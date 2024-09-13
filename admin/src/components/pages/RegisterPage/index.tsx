import * as React from 'react'
import { useRegisterPage } from '@src/components/pages/RegisterPage/hooks'
import { RegisterForm } from '@src/components/templates/RegisterForm'
import { Box } from '@chakra-ui/react'

type Props = ReturnType<typeof useRegisterPage>

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
        <RegisterForm isLoading={isLoading} onSubmit={handleSubmit} />
      </Box>
    </Box>
  )
}

export const RegisterPage = () => <Component {...useRegisterPage()} />
