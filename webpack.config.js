const path = require("path");
const webpack = require("webpack");
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    path: `${__dirname}/docs`,
    filename: "bundle.js",
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.ProgressPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: "./index.html",
          to: "index.html",
        },
      ],
    }),
  ],
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, "./")],
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    hot: true,
  },
};
