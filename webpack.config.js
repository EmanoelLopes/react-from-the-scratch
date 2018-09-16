const path = require('path');
const plugins = require('./config/plugins');
const baseConfig = require('./config/base.config')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist/lite'),
    filename: './static/js/app.[hash].js'
  },
  ...baseConfig,
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