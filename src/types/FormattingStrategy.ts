import { GlobalOptions } from './GlobalOptions'

export type FormattingStrategy<T> = {
  fits: (obj: any) => obj is T
  format: (obj: T, options?: GlobalOptions) => string | T
}
