import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, IsEmail } from 'class-validator';
import { UserModel } from 'src/models/user';

export class AuthControllerSignInBodyRequest {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;
}

export class AuthControllerSignInResponse {
  @ApiProperty()
  @IsString()
  accessToken: string;
}

export class UserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;
}

export class OrganizationDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  domain: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;
}

export class AuthControllerSignUpBodyRequest {
  @ApiProperty({ type: UserDto, required: true })
  @Type(() => UserDto)
  user: UserDto;

  @ApiProperty({ type: OrganizationDto, required: true })
  @Type(() => OrganizationDto)
  organization: OrganizationDto;
}

export class AuthControllerSignUpResponse {
  user: UserModel;
}

export class AuthControllerVerifyBodyRequest {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  token: string;
}

export class AuthControllerForgotPasswordBodyRequest {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  email: string;
}

export class AuthControllerChangePasswordBodyRequest {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  token: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;
}

export class AuthControllerVerifyResponse {
  @ApiProperty()
  @IsString()
  accessToken: string;
}

export class AuthControllerGetProfileResponse {
  user: UserModel;
}
