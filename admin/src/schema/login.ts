import * as yup from 'yup'
import { TLoginFormValue } from '@src/components/templates/LoginForm/types'

export const schemaLogin = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
})

export const defaultLogin: TLoginFormValue = {
  email: '',
  password: '',
}
