import { storageService } from '@src/services'

const { VITE_DOMAIN_API } = import.meta.env
import { Api } from '@openapi/Api'
import { KEY_STORAGE_CREDENTIAL } from '@src/services/storageService/keyStorage'
import { TCredential } from '@src/types/auth'
import { pathname } from '@src/routers/pathname'
import { convertAxiosError } from '@src/repositories/errors'

const axios = new Api({
  baseURL: VITE_DOMAIN_API || 'http://localhost:3001',
})

axios.instance.interceptors.request.use(requestConfig => {
  const credential = storageService.get(KEY_STORAGE_CREDENTIAL) as TCredential

  if (requestConfig.headers && credential?.accessToken) {
    requestConfig.headers.Authorization = `Bearer ${credential.accessToken}`
  }
  return requestConfig
})

axios.instance.interceptors.response.use(
  // eslint-disable-next-line  @typescript-eslint/typedef
  function (response) {
    return response
  },
  // eslint-disable-next-line  @typescript-eslint/typedef
  function (error) {
    const newError = convertAxiosError(error)

    if (error.response?.status === 403) {
      storageService.remove(KEY_STORAGE_CREDENTIAL)
      if (window.location.pathname !== pathname.login.path) {
        window.location.href = pathname.login.path
      }
    }

    return Promise.reject(newError)
  },
)

export const repository = axios
