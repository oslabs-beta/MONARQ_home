/* eslint-disable no-dupe-keys */
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./public/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: "bundle.js",
  },
  mode: process.env.NODE_ENV,
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map",
    }),
  ],
  devtool: "source-map",
  devServer: {
    host: "localhost",
    port: 8080,
    publicPath: "/dist/",
    // contentBase: path.resolve(__dirname, "./build"),
    hot: true,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "*",
      https: true,
    },
    proxy: {
      "/api/**": {
        target: "http://localhost:3000/",
        secure: false,
      },
    },
  },
  node: {
    __dirname: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // compilation to es6
        enforce: "pre",
        use: ["source-map-loader"],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/react"],
          },
        },
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
