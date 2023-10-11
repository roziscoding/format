const { expect } = require('chai')

const { getFullFormat } = require('../dist')

describe('Format', () => {
  const format = getFullFormat()
  const name = 'Roz'
  const age = 23
  const dateFixture = new Date('2020-01-01T08:00:00')
  const formattedDateFixture = dateFixture.toLocaleDateString()
  const formattedTimeFixture = dateFixture.toLocaleTimeString()

  it('Ignores non-formatable params', () => {
    expect(format`Hello, ${name}! You are ${age} years old!`).to.equal(
      'Hello, Roz! You are 23 years old!'
    )
  })

  it('Formats all formatable params', () => {
    expect(format`Date: ${{ date: dateFixture }}. Time: ${{ time: dateFixture }} :)`).to.equal(
      `Date: ${formattedDateFixture}. Time: ${formattedTimeFixture} :)`
    )
  })

  it('Formats mixed params', () => {
    expect(
      format`Name: ${name}, age: ${age}, Date: ${{ date: dateFixture }}, Time: ${{
        time: dateFixture
      }} :)`
    ).to.equal(
      `Name: Roz, age: 23, Date: ${formattedDateFixture}, Time: ${formattedTimeFixture} :)`
    )
  })

  it('Formats strings beginning with params', () => {
    expect(format`${{ date: dateFixture }} is the date`).to.equal(
      `${formattedDateFixture} is the date`
    )
  })

  it('Formats strings ending in params', () => {
    expect(format`The date is ${{ date: dateFixture }}`).to.equal(
      `The date is ${formattedDateFixture}`
    )
  })

  it('Formats text with no params', () => {
    expect(format`This is a test`).to.equal('This is a test')
  })

  it('Formats text with only params', () => {
    expect(format`${{ date: dateFixture }}`).to.equal(formattedDateFixture)
  })
})
