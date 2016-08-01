var Webpack = require('webpack')

module.exports = {
  devtool: 'eval',
  entry: [
    './src/index.js'
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader"
      }
    ]
  },
  output: {
    filename: "app.js",
    path: __dirname + '/build/'
  },
  plugins: []
}