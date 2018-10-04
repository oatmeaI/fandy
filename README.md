[![Build Status](https://travis-ci.org/kvillaniholland/js-utils.svg?branch=master)](https://travis-ci.org/kvillaniholland/js-utils)
[![Coverage Status](https://coveralls.io/repos/github/kvillaniholland/js-utils/badge.svg?branch=master)](https://coveralls.io/github/kvillaniholland/js-utils?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# js-utils
A set of JavaScript utility functions I find myself needing frequently.

None of these are functions you can't find elsewhere, but I often find myself needing some of these, and not wanting to add a large dependency like lodash to my project.

This project is also a chance for me to practice setting up CI, full test coverage and a real README for the first time.

Feel free to make pull requests.


## Install dependencies
`npm install`


## Run tests
`npm test`


## Functions
### pipe(...fns)
Returns a function which returns the result of its arguments being passed one by one through `fns`
```js
const first = x => x + 1
const second = x => x * 2

const result = pipe(first, second)(1)

// result = 4
```

### split(string, token)
Returns an array consisting of `string` split on `token`
```js
const string = 'I-am-a-string'
const result = split(string, '-')

// result = ['I', 'am', 'a', 'string']
```

### uniq(array)
Returns a new array consisting of `array` with all duplicates removed.
```js
const array = ['Bob', 'James', 'Bob']
const result = uniq(array)

// result = ['Bob', 'James']
```

### zip(keys, ...arrays)
Returns an array objects created by zipping each `array` with `keys`
```js
const firstNames = ['Bob', 'James', 'Tim']
const lastNames = ['Builder', 'Rocket', 'Tiny']
const cities = ['London', 'Paris']
const keys = ['firstName', 'lastName', 'currentCity']
const result = zip(keys, firstNames, lastNames, cities)

// result = [
//    { firstName: 'Bob', lastName: 'Builder', currentCity: 'London' },
//    { firstName: 'James', lastName: 'Rocket', currentCity: 'Paris' },
//    { firstName: 'Tim', lastName: 'Tiny', currentCity: undefined }
//  ]
```
