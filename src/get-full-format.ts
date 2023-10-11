import strategies from './strategies'
import { getFormat } from './get-format'
import { GlobalOptions } from './types/GlobalOptions'

export const getFullFormat = (options?: GlobalOptions) => getFormat(strategies, options)
