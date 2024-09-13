import { changeLanguage, languageSupport } from './locales'

const language = localStorage.getItem(
  'language',
) as keyof typeof languageSupport

changeLanguage(language || 'vi')
