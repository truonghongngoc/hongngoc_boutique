/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AuthControllerSignInBodyRequest {
  email: string
  password: string
}

export interface AuthControllerSignInResponse {
  accessToken: string
}

export interface AuthControllerVerifyBodyRequest {
  token: string
}

export interface AuthControllerForgotPasswordBodyRequest {
  email: string
}

export interface AuthControllerChangePasswordBodyRequest {
  token: string
  password: string
}

export interface UserDto {
  email: string
  password: string
  name: string
}

export interface OrganizationDto {
  domain: string
  name: string
}

export interface AuthControllerSignUpBodyRequest {
  user: UserDto
  organization: OrganizationDto
}

export type AuthControllerSignUpResponse = object

export type AuthControllerGetProfileResponse = object
