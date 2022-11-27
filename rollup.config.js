import sass from "rollup-plugin-sass";
import typescript from "rollup-plugin-typescript2";

import pkg from "./package.json";

export default {
  input: "src/index.tsx",
  output: [
    {
      file: pkg.main, // tells Rollup where to output the file
      format: "cjs", // commonjs format
      exports: "named", // tells Rollup how to export the file
      sourcemap: true, // tells Rollup to generate a sourcemap
      strict: false, // tells Rollup to not use strict mode
    },
  ],
  plugins: [
    sass({ insert: true }),
    typescript({ objectHashIgnoreUnknownHack: true }),
  ],
  external: ["react", "react-dom"], // tells Rollup not to bundle react and react-dom
};
