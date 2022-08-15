'use strict'

const { toCamelCase } = require('../utils')

const VanillaSerializer = use('@adonisjs/lucid/src/Lucid/Serializers/Vanilla')

class CamelCaseSerializer extends VanillaSerializer {
  _getRowJSON (modelInstance) {
    const json = super._getRowJSON(modelInstance)
    return toCamelCase(json)
  }
}

module.exports = CamelCaseSerializer