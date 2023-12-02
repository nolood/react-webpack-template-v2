import {Configuration} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";

export const buildPlugins = (options: BuildOptions): Configuration['plugins'] => {
  const isDev = options.mode === 'development';
  const isProd = options.mode === 'production';

  const plugins: Configuration['plugins'] = [new HtmlWebpackPlugin({template: options.paths.html})]

  if (isDev) {

  }

  if (isProd) {
    plugins.push(new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }))
  }


  return plugins

}