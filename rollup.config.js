import commonjs from '@rollup/plugin-commonjs';

export default {
    input: './bitcoinjs.js',
    output: {
        file: 'output/bitcoin.mjs',
        format: 'esm'
    },
    plugins: [commonjs()]
};