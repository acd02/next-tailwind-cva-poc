const path = require('path')

module.exports = {
  isDev(context) {
    return context.command === 'develop'
  },
  computePath(string) {
    return path.resolve(__dirname, string)
  }
}
