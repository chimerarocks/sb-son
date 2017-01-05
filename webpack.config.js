var webpack = require('webpack')

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
      name: 'vendor'
    })
  ]
}
