var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin')
var inlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin')
var path = require('path')


module.exports = {
  entry: {
    app: './index.js',
    vendor: ['jquery', 'bootstrap']
  },
  output: {
    /**
     * hash = id da compilação do pacote
     * chunkhash = id da compilação do módulo
     */
    // filename: '[name][hash].bundle.js',
    filename: '[name][chunkhash].bundle.js',
    path: path.join(__dirname, 'dist')
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
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap:true
    }),
    new webpack.LoaderOptionsPlugin({
      minime: true
    }),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [['es2015', {modules: false}]]
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8080
  },
  watchOptions: {
    aggregateTimeout: 300,
    ignored: /node_modules/
  }
}
