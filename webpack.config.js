var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin')
var inlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin')

module.exports = {
  entry: {
    app: './index.js',
    vendor: ['jquery']
  },
  output: {
    /**
     * hash = id da compilação do pacote
     * chunkhash = id da compilação do módulo
     */
    // filename: '[name][hash].bundle.js',
    filename: '[name][chunkhash].bundle.js',
    path: './dist'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new htmlWebpackPlugin({
      template: './index.ejs'
    }),
    new inlineManifestWebpackPlugin({
      name: 'webpackManifest'
    })
  ]
}
