import * as yup from 'yup'

const schemaOrganization = yup.object().shape({
  name: yup.string().required(),
  domain: yup.string().required(),
})

const schemaUser = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Mật khẩu không khớp')
    .required(),
})

export const schemaRegister = yup.object().shape({
  organization: schemaOrganization,
  user: schemaUser,
})

export type RegisterFormData = yup.InferType<typeof schemaRegister>

export const defaultRegister: RegisterFormData = {
  organization: {
    name: '',
    domain: '',
  },
  user: {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  },
}
