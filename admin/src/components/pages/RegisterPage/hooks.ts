import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { pathname } from '@src/routers/pathname'
import { useToast } from '@chakra-ui/react'
import { AxiosError } from 'axios'
import { RegisterFormData } from '@src/schema/register'
import { repository } from '@src/repositories'

export const useRegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const toast = useToast()

  const handleSubmit = useCallback(
    async (value: RegisterFormData) => {
      setIsLoading(true)

      try {
        await repository.authSignUp(value)
        navigate(pathname.login.path, { replace: true })
        toast({
          title: 'Registration successful',
          description: 'You have successfully registered!',
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
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
