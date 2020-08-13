# Format

Simple, 0 dependency library meant to make formatting strings easy

## Installation

`npm i @roziscoding/format`

OR

`yarn add @roziscoding/format`

## Usage

```typescript
import { getFormat, getFullFormat } from '@roziscoding/format'
import { currency, json, date, time } from '@roziscoding/format/strategies'

const format = getFormat([currency, json, date, time], { locale: 'PT-br' }) // Does not load any strategy. Only uses passed ones
const fullFormat = getFullFormat({ locale: 'PT-br' }) // Loads all default strategies

const name = 'Roz'
const age = 23
const balance = 50
const date = new Date()

console.log(
  format`Hi, ${name}! You are ${age} years old, and have ${{ USD: balance }} on ${{ date }} at ${{
    time: date
  }}!`
)
// Hi, Roz! You are 23 years old, and have US$ 50,00 on 30/07/2020 at 23:38:17!

console.log(
  fullFormat`Hi, ${name}! You are ${age} years old, and have ${{ USD: balance }} on ${{
    date
  }} at ${{
    time: date
  }}!`
)
// Hi, Roz! You are 23 years old, and have US$ 50,00 on 30/07/2020 at 23:38:17!
```

## Options

So far, every stragy accepts a `locale` option, which should be passed in the template literal param, like so: `${{ USD: balance, locale: 'en-US' }}`. This can be set globally by passing a second parameter to `getFormat`, ou a single parameter to `getFullFormat`. If this isn't passed, `undefined` will be used.

### Strategy specific options

- **date**: Accepts every option accepted by `Date.prototype.toLocaleDateString`
- **time**: Accepts every option accepted by `Date.prototype.toLocaleTimeString`
- **currency**: Accepts every option accepted by `Number.prototype.toLocaleString`
- **json**:
  - **indent**: Number param that should be passed to `JSON.stringify` as a third parameter, to

### Contributing

- clone this
- do your changes
- add tests
- run `npm test`. Coverage must be 100%
- commit with gitmoji
- open a PR
