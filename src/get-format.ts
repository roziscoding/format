import { FormattingStrategy } from './types/FormattingStrategy'
import { GlobalOptions } from './types/GlobalOptions'

export function getFormat (strategies: FormattingStrategy<any>[], globalOptions: GlobalOptions = {}) {
  const { defaultStrategy = (obj) => JSON.stringify(obj) } = globalOptions

  return function format (strings: TemplateStringsArray, ...params: any[]) {
    return strings.reduce((acc, string, index) => {
      const param = params[ index ]
      if (!param) return `${acc}${string}`

      const strategy = strategies.find(strategy => strategy.fits(param))

      if (!strategy) return `${acc}${string}${defaultStrategy(param, globalOptions)}`

      return `${acc}${string}${strategy.format(param, globalOptions)}`
    }, '')
  }
}
