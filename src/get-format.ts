import { GlobalOptions } from './types/GlobalOptions'
import { FormattingStrategy } from './types/FormattingStrategy'
import { StrategyArray } from './strategies'

const defaultStrategy = {
  format: (obj: any) => (typeof obj === 'string' ? obj : JSON.stringify(obj))
}

export function getFormat(
  strategies: FormattingStrategy<any>[],
  globalOptions: GlobalOptions = {}
) {
  return function format<TStrategies extends Array<any> = StrategyArray>(
    strings: TemplateStringsArray,
    ...params: TStrategies
  ) {
    return strings.reduce((acc, string, index) => {
      const param = params[index]
      if (!param) return `${acc}${string}`

      const strategy = strategies.find(strategy => strategy.fits(param)) || defaultStrategy

      return `${acc}${string}${strategy.format(param, globalOptions)}`
    }, '')
  }
}
