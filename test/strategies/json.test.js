const json = require('../../dist/strategies/json')
const { expect } = require('chai')

describe('Strategies > JSON', () => {
  const user = {
    name: 'John Doe',
    age: 23
  }

  describe('fits', () => {
    it("Ignores objects that don't have a `json` key", () => {
      expect(json.fits({ something: user })).to.equal(false)
    })

    it('Accepts any type for the `json` key', () => {
      expect(json.fits({ json: 'something' })).to.equal(true)
    })
  })

  describe('format', () => {
    it('Formats objects correctly', () => {
      expect(json.format({ json: user })).to.equal(JSON.stringify(user))
    })

    it('Uses the `indent` param', () => {
      expect(json.format({ json: user, indent: 2 })).to.equal(JSON.stringify(user, null, 2))
      expect(json.format({ json: user, indent: 4 })).to.equal(JSON.stringify(user, null, 4))
    })
  })
})
