import { repository } from '@src/repositories'
import { useQuery } from '@src/routers/useQuery'
import { useCallback, useEffect, useState } from 'react'

export const useVerifyPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isVerify, setIsVerify] = useState(false)
  const { query } = useQuery()

  useEffect(() => {
    query.token && handleSubmit(query.token)
  }, [])

  const handleSubmit = useCallback(async (value: string) => {
    setIsLoading(true)

    try {
      await repository.authVerify({
        token: value,
      })
      setIsVerify(true)
    } catch (e) {
      console.log('error', e)
      setIsVerify(false)
    } finally {
      setIsLoading(false)
    }
  }, [])

  return {
    isLoading,
    isVerify,
  }
}
