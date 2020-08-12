import { FormattingStrategy } from './types/FormattingStrategy'
import { GlobalOptions } from './types/GlobalOptions'

const defaultStrategy = {
  format: (obj: any) => (typeof obj === 'string' ? obj : JSON.stringify(obj))
}

export function getFormat(
  strategies: FormattingStrategy<any>[],
  globalOptions: GlobalOptions = {}
) {
  return function format(strings: TemplateStringsArray, ...params: any[]) {
    return strings.reduce((acc, string, index) => {
      const param = params[index]
      if (!param) return `${acc}${string}`

      const strategy = strategies.find(strategy => strategy.fits(param)) || defaultStrategy

      return `${acc}${string}${strategy.format(param, globalOptions)}`
    }, '')
  }
}
