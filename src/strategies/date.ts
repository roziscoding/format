import { FormattingStrategy } from '../types/FormattingStrategy'

type DateFormat = {
  date: Date
  locale?: string
} & Intl.DateTimeFormatOptions

export const fits = (obj: any): obj is DateFormat => {
  return Boolean(obj.date) && obj.date instanceof Date
}

export const format = (obj: DateFormat) => {
  if (!fits(obj)) return obj

  const { locale = 'pt-BR', ...options } = obj
  return obj.date.toLocaleDateString(locale, options)
}

export const strategy: FormattingStrategy<DateFormat> = {
  fits,
  format
}

export default strategy
