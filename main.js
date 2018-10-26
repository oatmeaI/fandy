export const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x)

export const split = (string, token) => string.split(token)

export const uniq = array => array.filter((element, index, array) => index === array.indexOf(element))

export const zip = (keys, ...arrays) =>
  arrays[0].map((array, entityIndex) =>
    keys.reduce((zipped, key, keyIndex) =>
      Object.assign(zipped, { [key]: arrays[keyIndex][entityIndex] }), {}))

export const last = (array, index = 1) => array.slice(-index)[0]

export const removeAt = (array, index) => array.filter((element, currentIndex) => currentIndex !== index)

export const switcher = (cases, otherwise, value) => {
  const result = cases[value] || otherwise
  return typeof result === 'function' ? result() : result
}
