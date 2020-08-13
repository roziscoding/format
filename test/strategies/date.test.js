const date = require('../../dist/strategies/date')
const { expect } = require('chai')

describe('Strategies > Date', () => {
  const dateFixture = new Date('2020-01-01T00:00:00')
  const formattedDateFixture = dateFixture.toLocaleDateString()

  describe('extract', () => {
    it("Ignores objects that don't have a `date` key", () => {
      expect(date.extract({ something: dateFixture })).to.equal(undefined)
    })

    it('Ignores object with a non-date `date` key', () => {
      expect(date.extract({ date: 'something' })).to.equal(undefined)
    })

    it('Accepts objects with a `date` key containing a Date', () => {
      expect(date.extract({ date: dateFixture })).to.eql([dateFixture, {}])
    })
  })

  describe('format', () => {
    it('Formats date correctly', () => {
      expect(date.format(dateFixture)).to.equal(formattedDateFixture)
    })

    it('Respects locale', () => {
      expect(date.format(dateFixture, { locale: 'pt-BR' })).to.equal('01/01/2020')
    })
  })
})
