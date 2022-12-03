require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict industry flame street name recipe sad universe install battle fresh stove'; 
let testAccounts = [
"0x66664fd7526c33489f6f9c9d71534a30640a6b47b92f12108d79a7958b251ef7",
"0xddb574769f40c804148b08405b91bca0958460418f1c817c0fcb7646732269b0",
"0x01fbb975594f62f8fc9949e95026109623a5bd9d9c1b1f52ffd3365d9560566e",
"0x545f21c703101acb488f87068c05d6af9d2acd841678f8ceec30e4208c3a3ceb",
"0x48e6e1bdf33185ae088888b0ca408970c0f7e1d6cf8036bba1ae9eada19d17f8",
"0x3e762d389976adb1637174f1c531ea632558bc3ae975f6125252eea49a43369f",
"0xac26a9b08a26161dad3ca2cf0bb415ff7b98d74ac54cb8c094f3252a92ed82a4",
"0xb167d9fa88b8e19397be5f86e11a47a1c44958ea7335f5c72911fc2798cac114",
"0xdb72a962173b01d8627e44ec5ff29c85e4b7942211bf521eb2b14d86db711613",
"0x6d1c111e69a644b6a9ab246331a31232bf89efc4bc962dc934cfaa65ae5e02a4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

