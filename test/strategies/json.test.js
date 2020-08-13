const json = require('../../dist/strategies/json')
const { expect } = require('chai')

describe('Strategies > JSON', () => {
  const user = {
    name: 'John Doe',
    age: 23
  }

  describe('extract', () => {
    it("Ignores objects that don't have a `json` key", () => {
      expect(json.extract({ something: user })).to.equal(undefined)
    })

    it('Accepts any type for the `json` key', () => {
      expect(json.extract({ json: 'something' })).to.eql(['something', {}])
    })
  })

  describe('format', () => {
    it('Formats objects correctly', () => {
      expect(json.format(user)).to.equal(JSON.stringify(user))
    })

    it('Respects the `indent` param', () => {
      expect(json.format(user, undefined, undefined, { indent: 2 })).to.equal(
        JSON.stringify(user, null, 2)
      )
      expect(json.format(user, undefined, undefined, { indent: 4 })).to.equal(
        JSON.stringify(user, null, 4)
      )
    })
  })
})
