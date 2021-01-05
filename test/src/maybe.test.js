const Maybe = require('./maybe.js')

describe('Maybe', () => {
  it('creates itself', () => {
    expect(Maybe(10)).not.toBeNull()
  })

  describe('map', () => {
    it('gets a function and applies it to a value', () => {
      const result = Maybe(10).map(x => x * x)

      expect(result.value).toBe(100)
    })
  })

  describe('ap', () => {
    it('gets a Maybe of function and apples it to a value', () => {
      const maybefn = Maybe(x => x * x)
      const result = Maybe(10).ap(maybefn)

      expect(result.value).toBe(100)
    })
  })
})
