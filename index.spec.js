import assert from 'assert'

import keyMirrorPfx from './'

describe('KeyMirrorPrefix', () => {

  it('should return a key mirror object', () => {
    const testObject = keyMirrorPfx(null, {
      hello: null,
      world: null,
    })

    assert.deepEqual(testObject, {
      hello: 'hello',
      world: 'world',
    })
  })

  it('should return a key mirror object with a prefix', () => {
    const testObject = keyMirrorPfx('prefix', {
      hello: null,
      world: null,
    })

    assert.deepEqual(testObject, {
      hello: 'prefix_hello',
      world: 'prefix_world',
    })
  })

})
