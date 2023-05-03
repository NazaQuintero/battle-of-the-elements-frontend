import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";

import packageJson from "./package.json" assert { type: "json" };

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extensions: [".scss"],
    }),
    copy({
      targets: [
        { src: 'node_modules/primereact/resources/**/*', dest: 'lib/resources' },
        { src: 'node_modules/primereact/primereact.min.css', dest: 'lib/resources' },
        { src: 'node_modules/primeicons/primeicons.css', dest: 'lib/resources' },
      ],
    }),
  ],
};
