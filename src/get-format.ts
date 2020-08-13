import { GlobalOptions } from './types/GlobalOptions'
import { FormattingStrategy } from './types/FormattingStrategy'
import { StrategyArray } from './strategies'

type Options = { global?: GlobalOptions } & Record<string, any>

export function getFormat(strategies: FormattingStrategy<any, any>[], options: Options = {}) {
  return function format<TStrategies extends Array<any> = StrategyArray>(
    strings: TemplateStringsArray,
    ...params: TStrategies
  ) {
    return strings.reduce((acc, string, index) => {
      const param = params[index]
      if (!param) return `${acc}${string}`

      const strategy = strategies.find(strategy => strategy.extract(param))

      if (!strategy) return `${acc}${string}${param}`

      const [value, localOptions] = strategy.extract(param)!
      const { [strategy.namespace]: strategyOptions, global: globalOptions = {} } = options

      const formattedParam = strategy.format(value, globalOptions, strategyOptions, localOptions)

      return `${acc}${string}${formattedParam}`
    }, '')
  }
}
