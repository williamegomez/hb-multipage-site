const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  entry: {
    main: './src/main.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'standard-loader',
        exclude: /(node_modules)/,
        options: {
          error: false,
          snazzy: true
        }
      },
      {
        test:/\.(s*)css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{ loader: 'css-loader', options: {minimize: true, sourceMap: true} },
                { loader: 'sass-loader', options: {sourceMap: true} }]
        })
      },
      {
        include: /\.pug/,
        use: [ {loader: 'raw-loader'}, { loader: 'pug-html-loader',
          options: {
            data: {MainMenu: require('./data/MainMenu.json')}
          }
        }]
      }
    ]
  },
  plugins: [
    new StyleLintPlugin({/* Options */}),
    new ExtractTextPlugin('styles.css'),
    new UglifyJsPlugin({
      sourceMap: true
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['main']
    })
  ]
}
