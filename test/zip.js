import test from 'ava'
import { zip } from '../index'

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
