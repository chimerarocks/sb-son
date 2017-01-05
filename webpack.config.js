module.exports = {
  entry: {
    app: './index.js',
    vendor: ['jquery']
  },
  output: {
    filename: '[name][hash].bundle.js',
    path: './dist'
  }
}
