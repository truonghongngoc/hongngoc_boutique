import React from 'react'
import { LabelForm } from '@src/components/molecules/LabelForm'
import { ErrorForm } from '@src/components/molecules/ErrorForm'
import { Heading, Button, Box, Input, Divider } from '@chakra-ui/react'
import { InputPassword } from '@src/components/atoms/InputPassword'
import { useRegisterForm } from './hooks'
import { TRegisterFormProps } from './types'

type Props = ReturnType<typeof useRegisterForm>

const Component = ({
  handleChange,
  handleSubmit,
  formValue,
  errors,
  isLoading,
}: Props) => {
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
        Đăng ký
      </Heading>

      <Divider marginY={3}></Divider>
      <Heading
        as="h3"
        color={'black'}
        fontSize={'xl'}
        fontWeight={'bold'}
        lineHeight={5}
        mb={4}
      >
        Thông tin tổ chức
      </Heading>

      <div>
        <LabelForm>Tên doanh nghiệp</LabelForm>
        <Input
          isInvalid={!!errors['organization.name']?.message}
          value={formValue?.organization?.name}
          onChange={e => handleChange('organization.name', e.target.value)}
        />
        <ErrorForm>{errors['organization.name']?.message}</ErrorForm>
      </div>
      <div>
        <LabelForm>Domain</LabelForm>
        <Input
          isInvalid={!!errors['organization.name']?.message}
          value={formValue.organization?.domain}
          onChange={e => handleChange('organization.domain', e.target.value)}
        />
        <ErrorForm>{errors['organization.name']?.message}</ErrorForm>
      </div>
      <Divider marginY={3}></Divider>
      <Heading
        as="h3"
        color={'black'}
        fontSize={'xl'}
        fontWeight={'bold'}
        lineHeight={5}
        mb={4}
      >
        Thông tin cá nhân
      </Heading>
      <div>
        <LabelForm>Họ và tên</LabelForm>
        <Input
          isInvalid={!!errors['user.name']?.message}
          value={formValue.user?.name}
          onChange={e => handleChange('user.name', e.target.value)}
        />
        <ErrorForm>{errors['user.name']?.message}</ErrorForm>
      </div>
      <div>
        <LabelForm>Email</LabelForm>
        <Input
          isInvalid={!!errors['user.email']?.message}
          type="email"
          value={formValue.user?.email}
          onChange={e => handleChange('user.email', e.target.value)}
        />
        <ErrorForm>{errors['user.email']?.message}</ErrorForm>
      </div>
      <div>
        <LabelForm>Mật khẩu</LabelForm>
        <InputPassword
          isInvalid={!!errors['user.password']?.message}
          value={formValue.user?.password}
          onChange={e => handleChange('user.password', e.target.value)}
        />
        <ErrorForm>{errors['user.password']?.message}</ErrorForm>
      </div>
      <div>
        <LabelForm>Xác nhận mật khẩu</LabelForm>
        <InputPassword
          isInvalid={!!errors['user.confirmPassword']?.message}
          value={formValue.user.confirmPassword}
          onChange={e => handleChange('user.confirmPassword', e.target.value)}
        />
        <ErrorForm>{errors['user.confirmPassword']?.message}</ErrorForm>
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
          Đăng ký
        </Button>
      </Box>
    </Box>
  )
}

export const RegisterForm = (props: TRegisterFormProps) => (
  <Component {...useRegisterForm(props)} />
)
