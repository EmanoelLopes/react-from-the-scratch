const path = require('path');

const devServer = {
  contentBase: path.join(__dirname, 'public'),
  port: 3000,
  // https: true,
  hot: true,
  hotOnly: true,
  proxy: {
    '/do/api/v1': {
      target: 'https://localhost:9001',
      secure: false
    }
  }
};

module.exports = devServer;