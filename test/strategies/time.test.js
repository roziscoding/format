const time = require('../../dist/strategies/time')
const { expect } = require('chai')

describe('Strategies > Time', () => {
  const date = new Date('2020-01-01T00:00:00')

  describe('fits', () => {
    it('Ignores objects that don\'t have a `time` key', () => {
      expect(time.fits({ something: date })).to.equal(false)
    })

    it('Ignores object with a non-date `time` key', () => {
      expect(time.fits({ time: 'something' })).to.equal(false)
    })

    it('Accepts objects with a `time` key containing a Date', () => {
      expect(time.fits({ time: date })).to.equal(true)
    })
  })

  describe('format', () => {
    it('Formats time correctly', () => {
      expect(time.format({ time: date })).to.equal('00:00:00')
    })

    it('Ignores non-time params', () => {
      expect(time.format({ something: 50 }).toString()).to.equal(({ something: 50 }).toString())
    })
  })
})
