const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

/** @type {import('webpack').Configuration} */

module.exports = {
  entry: path.resolve(__dirname, "..", "src"),
  output: {
    path: path.resolve(__dirname, "..", "build"),
    filename: "bundle.[contenthash].js",
    publicPath: ""
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/
      },
      {
        use: ["style-loader", "css-loader", "sass-loader"],
        test: /\.(css|scss|sass)$/
      },
      {
        type: "asset",
        test: /\.(png|svg|svg|jpeg|gif)$/i
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin({
    template: "./public/index.html"
  })]
}
