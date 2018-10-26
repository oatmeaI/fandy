import test from 'ava'
import { last } from '../index'

test('last', test => {
  const array = ['Bob', 'James', 'Robert']
  const result = last(array)
  test.is(result, 'Robert')
})

test('last with index', test => {
  const array = ['Bob', 'James', 'Robert']
  const result = last(array, 2)
  test.is(result, 'James')
})
