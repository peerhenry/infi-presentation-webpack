const merge = require('webpack-merge')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const input = {
  entry: path.resolve(__dirname, 'src/main.js')
}

const output = {
  output: {
    path: 'dist',
    filename: 'bundle.js'
  }
}

const loaders = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // jsx
      // ts
      // pug
      // styl(us)
      // scss
      // files: text, fonts, images
    ]
  }
}

const plugins = {
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Infi Webpack Presentation',
      template: 'src/index.html'
    }),
    new CopyWebpackPlugin([
      {
        from: 'node_modules/reveal.js/js/reveal.js',
        to: 'dist/js/reveal.js'
      }
    ])
  ]
}

config = merge(
  input,
  output,
  loaders,
  plugins,
  { mode: 'production' }
)

module.exports = config