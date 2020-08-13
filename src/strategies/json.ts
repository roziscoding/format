import { FormattingStrategy } from '../types/FormattingStrategy'

type Config = {
  indent?: number
}

type JSONStrategy = FormattingStrategy<any, Config>

export const extract: JSONStrategy['extract'] = ({ json, ...localOptions }) =>
  json ? ([json, localOptions] as const) : undefined

export const format: JSONStrategy['format'] = (
  value,
  _,
  strategyOptions = {},
  localOptions = {}
) => {
  const indent = strategyOptions.indent || localOptions.indent || 0

  return JSON.stringify(value, null, indent)
}

export const json: JSONStrategy = {
  extract,
  format,
  namespace: 'json'
}

export default json
