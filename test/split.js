import test from 'ava'
import { split } from '../index'

test('split', test => {
  const string = 'I-am-a-string'
  const result = split(string, '-')
  test.deepEqual(result, ['I', 'am', 'a', 'string'])
})
