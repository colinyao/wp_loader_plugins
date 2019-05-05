const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {index: './entry.js'},
  mode: 'development',
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, './dist')
  },
  module: {
    rules: [{
      test: /\.txt$/,
      use: ['./loader/uppcase-loader.js','./loader/reverse-loader.js']
    },{
      test: /\.js$/,
      use: ['./loader/sendTime-longer.js']
    }]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
      filename: 'index.html',
    })
  ]
}