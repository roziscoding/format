const currency = require('../../dist/strategies/currency')
const { expect } = require('chai')

describe('Strategies > Currency', () => {
  const amount = 50

  describe('fits', () => {
    it("Ignores objects that don't have a currency key", () => {
      expect(currency.fits({ something: amount })).to.equal(false)
    })

    it('Ignores object with a non-number currency key', () => {
      expect(currency.fits({ BRL: 'something' })).to.equal(false)
    })

    it('Accepts objects with a currency key containing a number', () => {
      expect(currency.fits({ BRL: amount })).to.equal(true)
    })
  })

  describe('format', () => {
    it('Formats currency correctly', () => {
      expect(currency.format({ BRL: amount })).to.match(/R\$\s50,00/)
    })

    it('Ignores non-currency params', () => {
      expect(currency.format({ something: amount }).toString()).to.equal(
        { something: 50 }.toString()
      )
    })

    it('Respects locale', () => {
      expect(currency.format({ BRL: amount, locale: 'en-US' })).to.equal('R$50.00')
    })
  })
})
