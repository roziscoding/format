import date from './date'
import time from './time'
import currency from './currency'

export const strategies = {
  date,
  time,
  currency
}

export default Object.values(strategies)
