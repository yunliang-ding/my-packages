import { defineConfig } from "rollup";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import replace from 'rollup-plugin-replace'
import less from "rollup-plugin-less";

const env = process.env.NODE_ENV

export default defineConfig({
  input: "./src/index.ts",
  output: [
    {
      file: "dist/index.esm.js",
      format: "esm",
    },
    {
      file: "dist/index.js",
      format: "cjs",
    },
    {
      file: 'dist/icon.min.js',
      format: 'umd',
      name: 'yldIcon',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'react/jsx-runtime': 'jsxRuntime',
      },
    },
  ],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    resolve(),
    external(),
    commonjs(),
    terser(),
    less({
      output: "dist/icon.min.css",
      insert: true,
      option: {
        compress: true,
      },
    }),
    typescript({
      compilerOptions: {
        target: "esnext",
        module: "esnext",
        esModuleInterop: true,
        moduleResolution: "node",
        declaration: true,
        jsx: "react-jsx",
        strict: false,
        sourceMap: false,
        skipLibCheck: true,
        outDir: "./dist",
      },
      include: ["src/**/*"],
      exclude: ["node_modules/**/*"],
    }),
  ],
});
