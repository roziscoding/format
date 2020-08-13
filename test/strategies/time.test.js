const time = require('../../dist/strategies/time')
const { expect } = require('chai')

describe('Strategies > Time', () => {
  const timeFixture = new Date('2020-01-01T00:00:00')
  const formattedTimeFixture = timeFixture.toLocaleTimeString()

  describe('extract', () => {
    it("Ignores objects that don't have a `time` key", () => {
      expect(time.extract({ something: timeFixture })).to.equal(undefined)
    })

    it('Ignores object with a non-date `time` key', () => {
      expect(time.extract({ time: 'something' })).to.equal(undefined)
    })

    it('Accepts objects with a `time` key containing a Date', () => {
      expect(time.extract({ time: timeFixture })).to.eql([timeFixture, {}])
    })
  })

  describe('format', () => {
    it('Formats time correctly', () => {
      expect(time.format(timeFixture)).to.equal(formattedTimeFixture)
    })

    it('Respects the `locale` parameter', () => {
      expect(time.format(timeFixture, { locale: 'pt-BR' })).to.equal('00:00:00')
    })
  })
})
