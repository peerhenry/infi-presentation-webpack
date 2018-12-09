const merge = require('webpack-merge')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const buildDirName = 'dist'

const input = {
  entry: path.resolve(__dirname, 'src/main.js')
}

const output = {
  output: {
    path: path.resolve(__dirname, buildDirName),
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
      {
        test: /\.(png|PNG|jpg|jpeg|svg)$/,
        use: [{
          loader: 'file-loader', // could use url-loader for small files
        }]
      }
      // jsx
      // ts
      // pug
      // styl(us)
      // scss
      // files: text, fonts, images
    ]
  },
  externals: {
    // 'reveal.js': 'reveal.js',
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
        to: 'js/reveal.js'
      },
      {
        from: 'node_modules/reveal.js/css/reveal.css',
        to: 'css/reveal.css'
      },
      {
        from: 'node_modules/reveal.js/css/theme/*.css',
        to: 'css/theme/[name].[ext]'
      },
      {
        from: 'node_modules/reveal.js/css/print/*.css',
        to: 'css/print/[name].[ext]'
      },
      {
        context: 'node_modules/reveal.js/lib/',
        from: '**/*',
        to: 'lib/'
      },
      {
        context: 'node_modules/reveal.js/plugin/',
        from: '**/*',
        to: 'plugin/'
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