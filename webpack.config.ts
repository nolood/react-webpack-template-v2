import path from 'path';
import webpack from 'webpack';

import {buildWebpack} from "./config/build/buildWebpack";
import {BuildMode, BuildPaths} from "./config/build/types/types";


interface EnvVariables {
  mode: BuildMode
  port: number
}

export default (env: EnvVariables) => {

  const paths: BuildPaths = {
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  }

  const config: webpack.Configuration = buildWebpack({
    mode: env.mode ?? 'development',
    port: env.port ?? 3000,
    paths
  })

  return config
};