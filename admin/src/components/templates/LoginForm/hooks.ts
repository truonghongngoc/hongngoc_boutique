import { TLoginFormProps } from '@src/components/templates/LoginForm/types'
import React, { useCallback, useState } from 'react'
import * as yup from 'yup'
import { defaultLogin, schemaLogin } from '@src/schema/login'
import { ErrorsFormValue } from '@src/schema/types'

export const useLoginForm = (props: TLoginFormProps) => {
  const { onSubmit, ...rest } = props

  const [formValue, setFormValue] = useState(defaultLogin)
  const [errors, setErrors] = useState<ErrorsFormValue>({})

  const validation = useCallback(() => {
    setErrors({})
    try {
      schemaLogin.validateSync(formValue, { abortEarly: false })
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        if (error.inner) {
          const newErrors: ErrorsFormValue = {}
          error.inner.forEach(err => {
            if (err.path && err.message) {
              newErrors[err.path] = { message: err.message }
            }
          })
          setErrors(newErrors)
          return false
        }
      }
    }

    return true
  }, [formValue])

  function handleChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setFormValue({
      ...formValue,
      email: e.target.value,
    })
  }

  function handleChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setFormValue({
      ...formValue,
      password: e.target.value,
    })
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (validation()) {
      onSubmit(schemaLogin.cast(formValue))
    }
  }

  return {
    ...rest,
    handleSubmit,
    handleChangeEmail,
    handleChangePassword,
    formValue,
    errors,
  }
}
