export type GlobalOptions = {
  locale?: string
  defaultStrategy?: (obj: any, globalOptions?: GlobalOptions) => string
} & Record<string, any>
