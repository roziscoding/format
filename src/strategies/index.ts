import time from './time'
import date from './date'
import json from './json'
import currency from './currency'

export { date } from './date'
export { time } from './time'
export { json } from './json'
export { currency } from './currency'

export const strategies = {
  date,
  time,
  json,
  currency
}

const strategyArray = Object.values(strategies)

export type StrategyArray = typeof strategyArray
export default strategyArray
