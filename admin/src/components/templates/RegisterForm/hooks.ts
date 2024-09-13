import React, { useCallback, useState } from 'react'
import * as yup from 'yup'
import { set } from 'lodash'
import { schemaRegister, defaultRegister } from '../../../schema/register'
import { ErrorsFormValue } from '../../../schema/types'
import { TRegisterFormProps } from './types'

export const useRegisterForm = (props: TRegisterFormProps) => {
  const { onSubmit, ...rest } = props
  const [formValue, setFormValue] = useState(defaultRegister)
  const [errors, setErrors] = useState<ErrorsFormValue>({})

  const validation = useCallback(() => {
    setErrors({})
    try {
      schemaRegister.validateSync(formValue, { abortEarly: false })
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

  function handleChange(key: string, value: string) {
    const newFormValue = { ...formValue }

    set(newFormValue, key, value)

    setFormValue(newFormValue)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (validation()) {
      onSubmit(schemaRegister.cast(formValue))
    }
  }

  return {
    ...rest,
    handleSubmit,
    handleChange,
    formValue,
    errors,
  }
}
