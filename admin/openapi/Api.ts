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

import {
  AuthControllerChangePasswordBodyRequest,
  AuthControllerForgotPasswordBodyRequest,
  AuthControllerGetProfileResponse,
  AuthControllerSignInBodyRequest,
  AuthControllerSignInResponse,
  AuthControllerSignUpBodyRequest,
  AuthControllerSignUpResponse,
  AuthControllerVerifyBodyRequest,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class Api<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags App
   * @name AppCheckHealth
   * @request GET:/api/v1/health
   */
  appCheckHealth = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v1/health`,
      method: 'GET',
      ...params,
    })
  /**
   * No description
   *
   * @tags Auth
   * @name AuthSignIn
   * @request POST:/api/v1/auth/sign-in
   */
  authSignIn = (
    data: AuthControllerSignInBodyRequest,
    params: RequestParams = {},
  ) =>
    this.request<AuthControllerSignInResponse, any>({
      path: `/api/v1/auth/sign-in`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Auth
   * @name AuthVerify
   * @request PATCH:/api/v1/auth/verify
   */
  authVerify = (
    data: AuthControllerVerifyBodyRequest,
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/api/v1/auth/verify`,
      method: 'PATCH',
      body: data,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags Auth
   * @name AuthForgotPassword
   * @request PATCH:/api/v1/auth/forgot-password
   */
  authForgotPassword = (
    data: AuthControllerForgotPasswordBodyRequest,
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/api/v1/auth/forgot-password`,
      method: 'PATCH',
      body: data,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags Auth
   * @name AuthResetPassword
   * @request PATCH:/api/v1/auth/change-password
   */
  authResetPassword = (
    data: AuthControllerChangePasswordBodyRequest,
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/api/v1/auth/change-password`,
      method: 'PATCH',
      body: data,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags Auth
   * @name AuthSignUp
   * @request POST:/api/v1/auth/sign-up
   */
  authSignUp = (
    data: AuthControllerSignUpBodyRequest,
    params: RequestParams = {},
  ) =>
    this.request<AuthControllerSignUpResponse, any>({
      path: `/api/v1/auth/sign-up`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Auth
   * @name AuthGetProfile
   * @request GET:/api/v1/auth/profile
   * @secure
   */
  authGetProfile = (params: RequestParams = {}) =>
    this.request<AuthControllerGetProfileResponse, any>({
      path: `/api/v1/auth/profile`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
}
