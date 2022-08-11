const { toSnakeCase } = require('../utils')
const Model = use('Model')

const parentCreate = Model.create
const parentCreateMany = Model.createMany
const parentPrototypeMerge = Model.prototype.merge
const parentPrototypeFill = Model.prototype.fill

Model.create = function (payload, trx) {
  return parentCreate.call(this, toSnakeCase(payload), trx)
}

Model.createMany = function (payload, trx) {
  if (Array.isArray(payload)) {
    payload = payload.map(p => toSnakeCase(p))
  }
  return parentCreateMany.call(this, payload, trx)
}

Model.prototype.merge = function (payload, trx) {
  return parentPrototypeMerge.call(this, toSnakeCase(payload), trx)
}

Model.prototype.fill = function (payload) {
  return parentPrototypeFill.call(this, toSnakeCase(payload))
}
