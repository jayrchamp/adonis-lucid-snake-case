const _ = use('lodash')

const toSnakeCase = (obj) => _.transform(obj, (result, value, key) => {
  result[_.snakeCase(key)] = value
  return result
}, {})

module.exports = { toSnakeCase }
