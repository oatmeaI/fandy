import test from 'ava'
import { removeAt } from '../index'

test('removeAt', test => {
  const array = ['Bob', 'James', 'Robert']
  const result = removeAt(array, 1)
  test.deepEqual(result, ['Bob', 'Robert'])
})
