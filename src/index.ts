import strategies from './strategies'
import { getFormat } from './get-format'
import { GlobalOptions } from './types/GlobalOptions'

export { getFormat }

export const format = getFormat(strategies, { locale: 'pt-BR' })

export const getFormatWithOptions = (options: GlobalOptions) => getFormat(strategies, options)

