var bitcoin_js = require("bitcoinjs-lib");
bitcoin_js.Buffer = require("safe-buffer").Buffer;
bitcoin_js.bip38 = require("bip38");
bitcoin_js.bip39 = require("bip39");

module.exports = bitcoin_js;
