import assert from 'assert'
import { add } from './myLib.mjs'

try {
  console.log('add() should add two numbers')
  assert.strictEqual(add(2, 5), 7)
  console.log('PASSED')
} catch (e) {
  console.log('FAILED')
  console.error(e)
}
