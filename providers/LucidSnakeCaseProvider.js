const { ServiceProvider } = require('@adonisjs/fold')

class LucidSnakeCaseProvider extends ServiceProvider {
  boot () {
    require('../src/Patches/Model')
  }
}

module.exports = LucidSnakeCaseProvider
