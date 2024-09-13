export type TLoginFormProps = {
  isLoading: boolean
  onSubmit: (value: TLoginFormValue) => void
}

export type TLoginFormValue = {
  email: string
  password: string
}

export type TLoginFormErrors = {
  [key: string]:
    | {
        message: string
      }
    | undefined
}
