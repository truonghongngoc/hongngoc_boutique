import {
  Controller,
  Get,
  Post,
  Body,
  UnauthorizedException,
  BadRequestException,
  UseGuards,
  Req,
  Put,
  Patch,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CredentialsRepository } from 'src/repositories/credential.repository';
import { prisma, transaction } from 'src/libs/prisma';
import {
  AuthControllerChangePasswordBodyRequest,
  AuthControllerForgotPasswordBodyRequest,
  AuthControllerGetProfileResponse,
  AuthControllerSignInBodyRequest,
  AuthControllerSignInResponse,
  AuthControllerSignUpBodyRequest,
  AuthControllerSignUpResponse,
  AuthControllerVerifyBodyRequest,
} from './auth.dto';
import { comparePassword, hashPassword } from 'src/libs/bcrypt';
import { UsersRepository } from 'src/repositories/user.repository';
import { AuthGuard } from 'src/services/auth.guard';
import { EKeyJwt, JwtPayLoad } from 'src/types/jwt';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserAuthRequest } from 'src/types/request';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { jwtConstants } from 'src/constants';
import { OrganizationsRepository } from 'src/repositories/organization.repository';
import { EmployeesRepository } from 'src/repositories/employee.repository';
import { Role } from '@prisma/client';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private jwtService: JwtService,
    private readonly credentialsRepository: CredentialsRepository,
    private readonly usersRepository: UsersRepository,
    private readonly mailerService: MailerService,
    private configService: ConfigService,
    private organizationsRepository: OrganizationsRepository,
    private employeesRepository: EmployeesRepository,
  ) {}

  @ApiResponse({
    status: 200,
    type: AuthControllerSignInResponse,
  })
  @Post('/sign-in')
  async signIn(
    @Body() body: AuthControllerSignInBodyRequest,
  ): Promise<AuthControllerSignInResponse> {
    const { email, password } = body;

    const credential = await this.credentialsRepository.findOne(prisma, {
      where: {
        email,
      },
    });

    if (!credential || !credential.verified) {
      throw new UnauthorizedException();
    }

    const isPass = await comparePassword(password, credential?.password);

    if (!isPass) {
      throw new UnauthorizedException();
    }

    const payload: JwtPayLoad = { id: credential.userId, key: EKeyJwt.signin };

    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }

  @ApiResponse({
    status: 200,
  })
  @Patch('/verify')
  async verify(@Body() body: AuthControllerVerifyBodyRequest): Promise<void> {
    const { token } = body;

    const payload: JwtPayLoad = await this.jwtService.verifyAsync(token, {
      secret: jwtConstants.secret,
    });

    const credential = await this.credentialsRepository.findOne(prisma, {
      where: {
        userId: payload.id,
      },
    });

    if (!credential || payload.key !== EKeyJwt.signup) {
      throw new BadRequestException({
        token: 'Token invalid',
      });
    }

    await transaction(async (prismaTransaction) => {
      await this.credentialsRepository.update(prismaTransaction, {
        where: {
          id: credential.id,
        },
        data: {
          verified: true,
        },
      });
    });
  }

  @ApiResponse({
    status: 200,
  })
  @Patch('/forgot-password')
  async forgotPassword(
    @Body() body: AuthControllerForgotPasswordBodyRequest,
  ): Promise<void> {
    const { email } = body;

    const credential = await this.credentialsRepository.findOne(prisma, {
      where: {
        email,
      },
    });

    if (!credential) {
      throw new BadRequestException({
        user: 'user not found',
      });
    }

    const payload: JwtPayLoad = { id: credential.userId, key: EKeyJwt.forgot };

    const token = await this.jwtService.signAsync(payload);

    await this.mailerService
      .sendMail({
        to: credential.email,
        from: 'noreply@nestjs.com',
        subject: 'Forgot Password',
        text: 'Forgot Password',
        html: `<b>Link forgot password : ${this.configService.get(
          'APP_DOMAIN',
        )}/forgot-password?token=${token} </b>`,
      })
      .then(() => {})
      .catch(() => {});
  }

  @ApiResponse({
    status: 200,
  })
  @Patch('/change-password')
  async resetPassword(
    @Body() body: AuthControllerChangePasswordBodyRequest,
  ): Promise<void> {
    const { token, password } = body;

    const payload: JwtPayLoad = await this.jwtService.verifyAsync(token, {
      secret: jwtConstants.secret,
    });

    const credentialSchema = await this.credentialsRepository.findOne(prisma, {
      where: {
        userId: payload.id,
      },
    });

    if (
      !credentialSchema ||
      payload.key !== EKeyJwt.forgot ||
      payload.id !== credentialSchema.userId
    ) {
      throw new BadRequestException();
    }

    const newPassword = await hashPassword(password);

    await this.credentialsRepository.update(prisma, {
      where: {
        id: credentialSchema.id,
      },
      data: {
        password: newPassword,
        verified: true,
      },
    });
  }

  @ApiResponse({
    status: 200,
    type: AuthControllerSignUpResponse,
  })
  @Post('/sign-up')
  async signUp(
    @Body() body: AuthControllerSignUpBodyRequest,
  ): Promise<AuthControllerSignUpResponse> {
    const { user, organization } = body;

    const organizationExited = await this.organizationsRepository.findOne(
      prisma,
      {
        where: {
          domain: organization.domain,
        },
      },
    );

    if (organizationExited) {
      throw new BadRequestException({
        organization: 'Organization exited',
      });
    }

    const credentialExited = await this.credentialsRepository.findOne(prisma, {
      where: {
        email: user.email,
      },
    });

    if (credentialExited) {
      throw new BadRequestException({
        user: 'User exited',
      });
    }

    const password = await hashPassword(user.password);

    let userSchema = undefined;
    await transaction(async (prismaTransaction) => {
      const organizationSchema = await this.organizationsRepository.create(
        prismaTransaction,
        {
          domain: organization.domain,
          name: organization.name,
        },
      );

      userSchema = await this.usersRepository.create(prismaTransaction, {
        email: user.email,
        name: user.email,
      });

      await this.credentialsRepository.create(prismaTransaction, {
        email: user.email,
        password: password,
        user: {
          connect: {
            id: userSchema.id,
          },
        },
      });

      await this.employeesRepository.create(prismaTransaction, {
        user: {
          connect: {
            id: userSchema.id,
          },
        },
        organization: {
          connect: {
            id: organizationSchema.id,
          },
        },
        role: Role.ADMIN,
      });
    });

    const payload: JwtPayLoad = { id: userSchema.id, key: EKeyJwt.signup };

    const token = await this.jwtService.signAsync(payload);

    await this.mailerService
      .sendMail({
        to: user.email,
        from: 'noreply@nestjs.com',
        subject: 'Verify email',
        text: 'Welcome',
        html: `<b>Link verify email : ${this.configService.get(
          'APP_DOMAIN',
        )}/verify?token=${token} </b>`,
      })
      .then(() => {})
      .catch(() => {});

    return {
      user: userSchema,
    };
  }

  @ApiResponse({
    status: 200,
    type: AuthControllerGetProfileResponse,
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get('/profile')
  async getProfile(
    @Req() req: UserAuthRequest,
  ): Promise<AuthControllerGetProfileResponse> {
    const userSchema = await this.usersRepository.findOne(prisma, {
      id: req.user.id,
    });

    return {
      user: userSchema,
    };
  }
}
