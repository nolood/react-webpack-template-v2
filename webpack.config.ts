import path from "path";
import type webpack from "webpack";

import { buildWebpack } from "./config/build/buildWebpack";
import {
  type BuildMode,
  type BuildPaths,
  type BuildPlatform,
} from "./config/build/types/types";

interface EnvVariables {
  mode?: BuildMode;
  port?: number;
  platform?: BuildPlatform;
}

export default (env: EnvVariables): webpack.Configuration => {
  const paths: BuildPaths = {
    output: path.resolve(__dirname, "build"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const config: webpack.Configuration = buildWebpack({
    mode: env.mode ?? "development",
    port: env.port ?? 3000,
    platform: env.platform ?? "desktop",
    paths,
  });

  return config;
};
