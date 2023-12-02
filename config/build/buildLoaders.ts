import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";

export const buildLoaders = (options: BuildOptions) => {
  const isDev = options.mode === 'development';

  const cssLoaderWithModules = {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
      },
    }
  }

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [isDev ? "style-loader" : MiniCssExtractPlugin.loader, cssLoaderWithModules, 'sass-loader'],
  }

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }


  return [
    scssLoader,
    tsLoader
  ]
}