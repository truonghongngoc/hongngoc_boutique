import { AxiosError } from 'axios'

const errorMessageMap: { [Key: string]: string } = {
  '400': '400',
  '401': '401',
  '403': '403',
  '422': '422',
  default: 'default',
}

export function convertAxiosError(
  axiosError: AxiosError<{
    errors?: { [field: string]: string[] }
  }>,
): AxiosError {
  const code =
    errorMessageMap[axiosError?.response?.status ?? 0] ||
    errorMessageMap['default']

  let message = ''

  try {
    const errors = getErrorArray(axiosError.response?.data.errors)

    message = Object.values(errors).filter(Boolean).join('\n')
  } catch (e) {
    console.error(e)
  }

  return {
    ...axiosError,
    code,
    message: code === message ? '' : message,
  }
}
/*eslint-disable @typescript-eslint/no-explicit-any*/
function getErrorArray(error: any, result: string[] = []) {
  Object.keys(error).forEach(key => {
    if (typeof error[key] === 'object') {
      return getErrorArray(error[key], result)
    }
    result.push(error[key])
  })
  return result
}
