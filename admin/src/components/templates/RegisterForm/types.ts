import { RegisterFormData } from '@src/schema/register'

export type TRegisterFormProps = {
  isLoading: boolean
  onSubmit: (value: RegisterFormData) => void
}
