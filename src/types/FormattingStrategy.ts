export type FormattingStrategy<T> = {
  fits: (obj: any) => obj is T,
  format: (obj: T) => string | T
}