const currency = require('../../dist/strategies/currency')
const { expect } = require('chai')

describe('Strategies > Currency', () => {
  const amount = 50
  const formattedAmount = amount.toLocaleString(undefined, { style: 'currency', currency: 'BRL' })

  describe('extract', () => {
    it("Ignores objects that don't have a currency key", () => {
      expect(currency.extract({ something: amount })).to.equal(undefined)
    })

    it('Ignores object with a non-number currency key', () => {
      expect(currency.extract({ BRL: 'something' })).to.equal(undefined)
    })

    it('Accepts objects with a currency key containing a number', () => {
      expect(currency.extract({ BRL: amount })).to.eql([['BRL', amount], {}])
    })
  })

  describe('format', () => {
    it('Formats currency correctly', () => {
      expect(currency.format(['BRL', amount])).to.equal(formattedAmount)
    })

    it('Respects locale', () => {
      expect(currency.format(['BRL', amount], { locale: 'en-US' })).to.equal('R$50.00')
    })

    it('Respects locale on local options', () => {
      expect(currency.format(['BRL', amount], undefined, undefined, { locale: 'en-US' })).to.equal(
        'R$50.00'
      )
    })
  })
})
