import test from 'ava'
import { uniq } from '../index'

test('uniq', test => {
  const array = ['Bob', 'James', 'Bob']
  const result = uniq(array)
  test.deepEqual(result, ['Bob', 'James'])
})
