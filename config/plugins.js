const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const plugins = {
  hot: new webpack.HotModuleReplacementPlugin(),
  html: new HtmlWebPackPlugin({
    template: './public/index.html',
    filename: 'index.html',
    title: 'React App',
    minify: true
  }),
  css: new MiniCssExtractPlugin({
    filename: "[name].[hash].css",
    chunkFilename: "[id].[hash].css"
  })
};

module.exports = plugins;