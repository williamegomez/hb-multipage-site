const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dev'),
    compress: true,
    port: 8080
  },
  entry: {
    main: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dev'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'standard-loader',
        exclude: /(node_modules|bower_components)/,
        options: {
          error: false,
          snazzy: true
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{ loader: 'css-loader', options: {minimize: true, sourceMap: true} },
                { loader: 'sass-loader', options: {sourceMap: true} }]
        })
      },
      {
        include: /\.pug/,
        loader: ['raw-loader', 'pug-html-loader']
      }
    ]
  },
  plugins: [
    new StyleLintPlugin({/* Options */}),
    new ExtractTextPlugin('styles.css'),
    new CopyWebpackPlugin([{
      context: 'src',
      from: '**/*.html',
      to: './'
    }]),
    new UglifyJsPlugin({
      sourceMap: true
    })
  ]
}
