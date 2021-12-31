import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";

export default [{
    input: './bitcoinjs.js',
    output: {
        file: 'output/bitcoin.mjs',
        format: 'esm'
    },
    plugins: []
}, {
    input: './bitcoinjs.js',
    output: {
        file: 'output/bitcoin.min.mjs',
        format: 'esm'
    },
    plugins: [terser()]
}];