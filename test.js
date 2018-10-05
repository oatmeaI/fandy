import test from 'ava'
import { pipe, split, uniq, zip, last, removeAt } from './index'

test('pipe', test => {
  const first = x => x + 1
  const second = x => x * 2

  const result = pipe(first, second)(1)
  test.is(result, 4)
})

test('split', test => {
  const string = 'I-am-a-string'
  const result = split(string, '-')
  test.deepEqual(result, ['I', 'am', 'a', 'string'])
})

test('uniq', test => {
  const array = ['Bob', 'James', 'Bob']
  const result = uniq(array)
  test.deepEqual(result, ['Bob', 'James'])
})

test('zip', test => {
  const firstNames = ['Bob', 'James', 'Tim']
  const lastNames = ['Builder', 'Rocket', 'Tiny']
  const cities = ['London', 'Paris']

  const keys = ['firstName', 'lastName', 'currentCity']

  const result = zip(keys, firstNames, lastNames, cities)
  test.deepEqual(result, [
    { firstName: 'Bob', lastName: 'Builder', currentCity: 'London' },
    { firstName: 'James', lastName: 'Rocket', currentCity: 'Paris' },
    { firstName: 'Tim', lastName: 'Tiny', currentCity: undefined }
  ])
})

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

test('removeAt', test => {
  const array = ['Bob', 'James', 'Robert']
  const result = removeAt(array, 1)
  test.deepEqual(result, ['Bob', 'Robert'])
})
