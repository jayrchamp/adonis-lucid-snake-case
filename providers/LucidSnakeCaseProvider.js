const { ServiceProvider } = require('@adonisjs/fold')

class LucidSnakeCaseProvider extends ServiceProvider {
  register () {
    this.app.bind('@jayrchamp/adonis-lucid-snake-case/CamelCaseSerializer', () => {
      return require('../src/Serializers/CamelCaseSerializer')
    })
  }

  boot () {
    require('../src/Patches/Model')
  }
}

module.exports = LucidSnakeCaseProvider
