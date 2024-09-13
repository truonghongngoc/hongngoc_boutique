import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { pathname } from '@src/routers/pathname'
import { useToast } from '@chakra-ui/react'
import { TLoginFormValue } from '@src/components/templates/LoginForm/types'
import { storageService } from '@src/services'
import { KEY_STORAGE_CREDENTIAL } from '@src/services/storageService/keyStorage'
import { AxiosError } from 'axios'
import { repository } from '@src/repositories'

export const useLoginPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const toast = useToast()

  const handleSubmit = useCallback(
    async (value: TLoginFormValue) => {
      setIsLoading(true)

      try {
        const response = await repository.authSignIn({
          email: value.email,
          password: value.password,
        })
        storageService.set(KEY_STORAGE_CREDENTIAL, {
          accessToken: response.data.accessToken,
        })
        navigate(pathname.home.path, { replace: true })
      } catch (error) {
        const err = error as AxiosError
        toast({
          title: err?.code || err?.message,
          description: err?.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      } finally {
        setIsLoading(false)
      }
    },
    [toast, navigate],
  )

  return {
    isLoading,
    handleSubmit,
  }
}
