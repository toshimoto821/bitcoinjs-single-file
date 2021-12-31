import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";

export default [{
    input: './bitcoin.js',
    output: {
        file: 'output/bitcoin.mjs',
        format: 'esm'
    },
    plugins: [commonjs()]
}, {
    input: './bitcoin.js',
    output: {
        file: 'output/bitcoin.min.mjs',
        format: 'esm'
    },
    plugins: [commonjs(), terser()]
}];