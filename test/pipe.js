import test from 'ava'
import { pipe } from '../index'

test('pipe', test => {
  const first = x => x + 1
  const second = x => x * 2

  const result = pipe(first, second)(1)
  test.is(result, 4)
})
