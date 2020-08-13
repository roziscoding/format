import { FormattingStrategy } from '../types/FormattingStrategy'
import { GlobalOptions } from '../types/GlobalOptions'

type DateFormat = {
  date: Date
  locale?: string
} & Intl.DateTimeFormatOptions

export const fits = (obj: any): obj is DateFormat => {
  return Boolean(obj.date) && obj.date instanceof Date
}

export const format = (obj: DateFormat, globalOptions: GlobalOptions = {}) => {
  if (!fits(obj)) return obj

  const locale = obj.locale || globalOptions.locale

  return obj.date.toLocaleDateString(locale, { ...globalOptions, ...obj })
}

export const date: FormattingStrategy<DateFormat> = {
  fits,
  format
}

export default date
