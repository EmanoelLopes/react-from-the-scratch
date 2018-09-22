const path = require('path');
const baseConfig = require('./config/base.config');
const plugins = require('./config/plugins');
const devServer = require('./config/devServer');

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
  devServer,
  plugins: [
    plugins.hot,
    plugins.html,
    plugins.css
  ],
  stats: 'errors-only'
};