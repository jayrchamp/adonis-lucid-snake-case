const _ = use('lodash')

const toCamelCase = (obj) => _.transform(obj, (result, value, key) => {
  result[_.camelCase(key)] = value
}, {})

const toSnakeCase = (obj) => _.transform(obj, (result, value, key) => {
  result[_.snakeCase(key)] = value
  return result
}, {})

module.exports = { toCamelCase, toSnakeCase }
