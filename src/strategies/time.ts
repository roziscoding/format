import { FormattingStrategy } from '../types/FormattingStrategy'

type TimeFormat = {
  time: Date
  locale?: string
} & Intl.DateTimeFormatOptions

export const fits = (obj: any): obj is TimeFormat => {
  return Boolean(obj.time) && obj.time instanceof Date
}

export const format = (obj: TimeFormat) => {
  if (!fits(obj)) return obj

  const { locale = 'pt-BR', ...options } = obj
  return obj.time.toLocaleTimeString(locale, options)
}

export const strategy: FormattingStrategy<TimeFormat> = {
  fits,
  format
}

export default strategy
