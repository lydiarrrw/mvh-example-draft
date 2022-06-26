const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  const publicPath =
    env.NODE_ENV === "local"
      ? {
          publicPath: "/",
        }
      : {};
  return {
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
      path: path.resolve("."),
      ...publicPath,
    },
    module: {
      rules: [
        { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
        { test: /\.css$/, use: ["style-loader", "css-loader"] },
        {
          test: /\.s(a|c)ss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|svg|jpg|gif|pdf)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
              },
            },
          ],
        },
      ],
    },
    devServer: {
      publicPath: "/",
      contentBase: path.resolve("src"),
      hot: true,
      open: true,
      port: 8000,
      watchContentBase: true,
      historyApiFallback: true,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: "src/index.html",
        filename: "index.html",
        inject: "body",
      }),
    ],
  };
};
