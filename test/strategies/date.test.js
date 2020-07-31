const date = require('../../dist/strategies/date')
const { expect } = require('chai')

describe('Strategies > Date', () => {
  const dateFixture = new Date('2020-01-01T00:00:00')

  describe('fits', () => {
    it('Ignores objects that don\'t have a `date` key', () => {
      expect(date.fits({ something: dateFixture })).to.equal(false)
    })

    it('Ignores object with a non-date `date` key', () => {
      expect(date.fits({ date: 'something' })).to.equal(false)
    })

    it('Accepts objects with a `date` key containing a Date', () => {
      expect(date.fits({ date: dateFixture })).to.equal(true)
    })
  })

  describe('format', () => {
    it('Formats date correctly', () => {
      expect(date.format({ date: dateFixture })).to.equal('01/01/2020')
    })

    it('Ignores non-date params', () => {
      expect(date.format({ something: 50 }).toString()).to.equal(({ something: 50 }).toString())
    })
  })
})
