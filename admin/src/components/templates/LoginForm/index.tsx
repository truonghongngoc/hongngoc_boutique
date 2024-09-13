import { useLoginForm } from '@src/components/templates/LoginForm/hooks'
import { TLoginFormProps } from '@src/components/templates/LoginForm/types'
import { LabelForm } from '@src/components/molecules/LabelForm'
import React from 'react'
import { ErrorForm } from '@src/components/molecules/ErrorForm'
import { Heading, Button, Box, Input } from '@chakra-ui/react'
import { InputPassword } from '@src/components/atoms/InputPassword'

type Props = ReturnType<typeof useLoginForm>

const Component = (props: Props) => {
  const {
    handleChangePassword,
    errors,
    formValue,
    handleChangeEmail,
    handleSubmit,
    isLoading,
  } = props

  return (
    <Box as={'form'} onSubmit={handleSubmit}>
      <Heading
        as="h1"
        color={'black'}
        fontSize={'2xl'}
        fontWeight={'bold'}
        lineHeight={5}
        mb={4}
        textAlign={'center'}
      >
        Login
      </Heading>
      <div>
        <LabelForm>Email</LabelForm>
        <Input
          isInvalid={!!errors.email?.message}
          value={formValue.email}
          onChange={handleChangeEmail}
        />
        <ErrorForm>{errors.email?.message}</ErrorForm>
      </div>
      <div>
        <LabelForm>Password</LabelForm>
        <InputPassword
          isInvalid={!!errors.password?.message}
          value={formValue.password}
          onChange={handleChangePassword}
        />
        <ErrorForm>{errors.password?.message}</ErrorForm>
      </div>
      <Box display={'flex'} justifyContent={'center'}>
        <Button
          colorScheme="blue"
          isLoading={isLoading}
          minH={12}
          mt={4}
          px={4}
          type={'submit'}
          w={'full'}
        >
          Login
        </Button>
      </Box>
    </Box>
  )
}

export const LoginForm = (props: TLoginFormProps) => (
  <Component {...useLoginForm(props)} />
)
