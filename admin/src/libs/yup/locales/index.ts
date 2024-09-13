import { setLocale } from 'yup'
import { vi } from './vi'
import { ja } from './ja'

export const languageSupport = {
  vi,
  ja,
}

export function changeLanguage(value: keyof typeof languageSupport) {
  localStorage.setItem('language', value)
  setLocale(languageSupport[value])
}
