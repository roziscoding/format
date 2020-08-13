import { GlobalOptions } from '../types/GlobalOptions'
import { FormattingStrategy } from '../types/FormattingStrategy'

type TimeFormat = {
  time: Date
  locale?: string
} & Intl.DateTimeFormatOptions

export const fits = (obj: any): obj is TimeFormat => {
  return Boolean(obj.time) && obj.time instanceof Date
}

export const format = (obj: TimeFormat, globalOptions: GlobalOptions = {}) => {
  if (!fits(obj)) return obj

  const locale = obj.locale || globalOptions.locale

  return obj.time.toLocaleTimeString(locale, { ...globalOptions, ...obj })
}

export const time: FormattingStrategy<TimeFormat> = {
  fits,
  format
}

export default time
