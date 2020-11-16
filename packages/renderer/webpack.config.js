"use strict";
const config = require("config");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const packageName = path.basename(__dirname);
const rootPath = path.resolve(__dirname, "../..");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    filename: "index.js",
    path: path.resolve(rootPath, "dist", packageName),
  },
  devServer: {
    contentBase: path.join(rootPath, "dist", packageName),
    compress: true,
    port: config.get("renderer.dev.port"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/template.html"),
    }),
  ],
};
