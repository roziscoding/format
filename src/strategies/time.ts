import { FormattingStrategy } from '../types/FormattingStrategy'

type Config = {
  locale?: string
} & Intl.DateTimeFormatOptions

type TimeStratey = FormattingStrategy<Date, Config>

export const extract: TimeStratey['extract'] = ({ time, ...localOptions }) =>
  time instanceof Date ? [time, localOptions] : undefined

export const format: TimeStratey['format'] = (
  value,
  globalOptions = {},
  strategyOptions = {},
  localOptiions = {}
) => {
  const options = { ...strategyOptions, ...localOptiions }

  const locale = options.locale || globalOptions.locale

  return value.toLocaleTimeString(locale, options)
}

export const time: TimeStratey = {
  extract,
  format,
  namespace: 'time'
}

export default time
