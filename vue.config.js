module.exports = {
  pages: {
    override: {
      template: 'public/browser-extension.html',
      entry: './src/override/main.js',
      title: 'Useless Ideas'
    },
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {
      }
    }
  }
}
