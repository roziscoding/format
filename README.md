Format
===

Simple, 0 dependency library meant to make formatting strings easy

## Installation

`npm i @roziscoding/format`

OR

`yarn add @roziscoding/format`

## Usage

```typescript
import { format } from '@roziscoding/format'

const name = 'Roz'
const age = 23
const balance = 50
const date = new Date()

console.log(format`Hi, ${name}! You are ${age} years old, and have ${{ USD: balance }} on ${{ date }} at ${{ time: date }}!`)
// Hi, Roz! You are 23 years old, and have US$ 50,00 on 30/07/2020 at 23:38:17!
```

## Options

So far, every stragy accepts a `locale` option, which should be passed in the template literal param, like so: `${{ USD: balance, locale: 'en-US' }}`. In the future, there will be a way to set this "globally".

### Strategy specific options

- **date**: Accepts every option accepted by `Date.prototype.toLocaleDateString`
- **time**: Accepts every option accepted by `Date.prototype.toLocaleTimeString`
- **currency**: Accepts every option accepted by `Number.prototype.toLocaleString`

### Contributing

- clone this
- do your changes
- add tests
- run `npm test`. Coverage must be 100%
- commit with gitmoji
- open a PR
