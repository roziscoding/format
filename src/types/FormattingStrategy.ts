import { GlobalOptions } from './GlobalOptions'

export type FormattingStrategy<TValue, TConfig = never> = {
  extract: (obj: any) => readonly [TValue, TConfig] | undefined
  format: (
    value: TValue,
    globalOptions: GlobalOptions,
    strategyOptions: TConfig,
    localOptions: TConfig
  ) => string
  namespace: string
}
