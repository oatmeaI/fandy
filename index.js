export const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x)
export const split = (string, token) => string.split(token)
export const uniq = array => array.filter((element, index, array) => index === array.indexOf(element))
export const zip = (keys, ...arrays) => 
  arrays[0].map((array, entityIndex) => 
    keys.reduce((zipped, key, keyIndex) => 
      Object.assign(zipped, {[key]: arrays[keyIndex][entityIndex]}), {}))
