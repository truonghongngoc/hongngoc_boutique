import * as React from 'react'
import { useLoginPage } from '@src/components/pages/LoginPage/hooks'
import { LoginForm } from '@src/components/templates/LoginForm'
import { Box } from '@chakra-ui/react'

type Props = ReturnType<typeof useLoginPage>

const Component = (props: Props) => {
  const { isLoading, handleSubmit } = props

  return (
    <Box
      alignItems={'center'}
      bg={'theme.50'}
      display={'flex'}
      justifyContent={'center'}
      minH={'100vh'}
      w={'full'}
    >
      <Box
        bg={'white'}
        borderRadius={'md'}
        boxShadow="base"
        maxW={'500px'}
        px={10}
        py={16}
        w={'100%'}
      >
        <LoginForm isLoading={isLoading} onSubmit={handleSubmit} />
      </Box>
    </Box>
  )
}

export const LoginPage = () => <Component {...useLoginPage()} />
