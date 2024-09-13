type Errors = {
  [key: string]: {
    message: string
  }
}
export function convertErrorsForKey(errors: Errors, formKey?: string) {
  if (!formKey) {
    return errors
  }

  const objects: Errors = {}

  Object.keys(errors).forEach(key => {
    if (key.startsWith(formKey)) {
      const newKey = key.replace(formKey, '')
      objects[newKey] = errors[key]
    }
  })

  return objects
}
