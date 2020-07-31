import strategies from './strategies'

export function format (strings: TemplateStringsArray, ...params: any[]) {
  return strings.reduce((acc, string, index) => {
    const param = params[ index ]
    if (!param) return `${acc}${string}`

    const strategy = strategies.find(strategy => strategy.fits(param))

    if (!strategy) return `${acc}${string}${param}`

    return `${acc}${string}${strategy.format(param)}`
  }, '')
}

export default format
