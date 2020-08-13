import { FormattingStrategy } from '../types/FormattingStrategy'

type DateStrategy = FormattingStrategy<Date, Config>

type Config = { locale?: string } & Intl.DateTimeFormatOptions

export const extract = ({ date, ...localOptions }: any) =>
  date instanceof Date ? ([date, localOptions] as const) : undefined

export const format: DateStrategy['format'] = (
  value,
  globalOptions = {},
  strategyOptions = {},
  localOptions = {}
) => {
  const options = { ...strategyOptions, ...localOptions }

  const locale = options.locale || globalOptions.locale

  return value.toLocaleDateString(locale, options)
}

export const date: FormattingStrategy<Date, Config> = {
  extract,
  format,
  namespace: 'date'
}

export default date
