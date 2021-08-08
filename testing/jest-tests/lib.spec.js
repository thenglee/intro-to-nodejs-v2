const { mapObjectToArray, getNewUser } = require('./myLib.mjs')

describe('getNewUser', () => {
  test('user does exist', async () => {
    const user = await getNewUser(1)

    expect(user).toBeTruthy()
    expect(user.verified).toBe(false)
  })

  test('user does not exist', async () => {
    expect.assertions(1)

    try {
      await getNewUser(3)
    } catch (e) {
      expect(e.message).toBe('User does not exist')
    }
  })
})

describe('mapObjectToArray', () => {
  test('callback gets called for each value', () => {
    const mockCb = jest.fn()

    mapObjectToArray({ a: 1, b: 1, c: 1 }, mockCb)
    expect(mockCb.mock.calls.length).toBe(3)
  })

  test('maps values to array using callback', () => {
    const result = mapObjectToArray({ a: 1, b: 1 }, (k, v) => {
      return v + 10
    })

    expect(result).toEqual([11, 11])
  })

  test('callback gets the right args', () => {
    const mockCb = jest.fn()
    const o = { a: 1, b: 1, c: 1 }

    mapObjectToArray(o, mockCb)
    const firstCall = mockCb.mock.calls[0]

    expect(firstCall[0]).toBe('a')
    expect(firstCall[1]).toBe(1)
    expect(firstCall[2]).toBe(o)
  })
})
