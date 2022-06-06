import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "src/main.js",
    output: [
      {
        file: "js/min.js",
        format: "iife",
        sourcemap: true,
        plugins: [terser()],
      },
    ],
  },
  {
    input: "src/pre.js",
    output: [
      {
        file: "js/pre.min.js",
        format: "iife",
        sourcemap: true,
        plugins: [terser()],
      },
    ],
  }
];
