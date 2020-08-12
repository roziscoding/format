import { FormattingStrategy } from '../types/FormattingStrategy'

type JSONFormat = {
  json: string
  indent?: number
}

export const fits = (obj: any): obj is JSONFormat => {
  return !!obj.json
}

export const format = (obj: JSONFormat) => {
  const indent = obj.indent || 0
  return JSON.stringify(obj.json, null, indent)
}

export const json: FormattingStrategy<JSONFormat> = {
  fits,
  format
}

export default json
