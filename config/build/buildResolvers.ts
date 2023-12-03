import { type Configuration } from "webpack";
import { type BuildOptions } from "./types/types";

export const buildResolvers = (
  options: BuildOptions,
): Configuration["resolve"] => {
  return {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "~": options.paths.src,
    },
  };
};
