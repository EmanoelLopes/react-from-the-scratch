const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const plugins = {
  hot: new webpack.HotModuleReplacementPlugin(),
  html: new HtmlWebPackPlugin({
    template: './public/index.html',
    filename: 'index.html',
    title: 'React App',
    mobile: true,
    lang: 'pt-BR',
    minify: {
      collapseWhitespace: true,
      preserveLineBreaks: false,
      collapseInlineTagWhitespace: true
    },
  }),
  css: new MiniCssExtractPlugin({
    filename: "[name].[hash].css",
    chunkFilename: "[id].[hash].css"
  })
};

module.exports = plugins;