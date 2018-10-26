import test from 'ava'
import { switcher } from '../index'

test('switcher', test => {
  const cases = {
    true: "It's true",
    false: "It's false"
  }
  const result = switcher(cases, 'otherwise', true)
  test.is(result, "It's true")
})

test('switcher with strings', test => {
  const cases = {
    'test': "It's a test",
    'other': "It's something else"
  }
  const result = switcher(cases, 'otherwise', 'other')
  test.is(result, "It's something else")
})

test('switcher fallthrough', test => {
  const cases = {
    true: "It's true",
    false: "It's false"
  }
  const result = switcher(cases, 'otherwise', 'none of the above')
  test.is(result, 'otherwise')
})

test('switcher with functions', test => {
  const cases = {
    true: () => "It's true",
    false: "It's false"
  }
  const result = switcher(cases, 'otherwise', true)
  test.is(result, "It's true")
})
