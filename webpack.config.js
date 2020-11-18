"use strict";
const config = require("config");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const packageName = path.basename(__dirname);
const rootPath = path.resolve(__dirname, "../..");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "packages/renderer/src/index.tsx"),
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
        loader: "babel-loader",
      },
      {
        test: /\.css/,
        use: [
          "style-loader",
          "css-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    fallback: {
      path: false,
    },
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "packages/renderer/tsconfig.json"),
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "packages/renderer/src/template.html"),
    }),
  ],
};
