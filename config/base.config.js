const path = require('path');
const plugins = require('./plugins');

const baseConfig = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist/lite'),
    filename: './static/js/app.[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['eslint-loader']
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['*', '.js', '.jsx'],
    alias: {
      src: path.resolve(__dirname, './src')
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3000,
    https: true,
    hot: true,
    hotOnly: true,
    proxy: {
      '/do/api/v1': {
        target: 'https://localhost:9001',
        secure: false
      }
    },
  },
  plugins: [
    plugins.hot,
    plugins.html,
    plugins.css
  ],
  stats: 'errors-only'
};

module.exports = baseConfig;