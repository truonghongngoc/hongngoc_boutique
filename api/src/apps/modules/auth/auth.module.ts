import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { CredentialsRepository } from 'src/repositories/credential.repository';
import { UsersRepository } from 'src/repositories/user.repository';
import { jwtConstants } from 'src/constants';
import { ConfigModule } from '@nestjs/config';
import { OrganizationsRepository } from 'src/repositories/organization.repository';
import { EmployeesRepository } from 'src/repositories/employee.repository';

@Module({
  imports: [
    ConfigModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '12h' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    CredentialsRepository,
    UsersRepository,
    OrganizationsRepository,
    EmployeesRepository,
  ],
})
export class AuthModule {}
