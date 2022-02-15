require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace creek olympic short north rescue spawn proof harvest indoor flush tent'; 
let testAccounts = [
"0x7e9e04d06087642b5888a31b150c0ddebfba896ba2c808ee7aaa537e17bc78ba",
"0xe959483b5deac9c5020699f1bfb8d89058af726e4d2e8f1c8f29f9abcd1bb1ae",
"0xdbf4d3fb61e92747378ba290a0681ae3cd2e180e2761f51ed3b151c7f9734061",
"0x7fbd366233825c47b3cf273312ad7ea72136c8c9797c6e718d06e0961c593147",
"0x30c361b2944b95765750d1a4af61a7e6424f1cec63e9300b8aadc6ae2964307d",
"0xebfebdeaf238c695a3066ddea25540dc90594c11df4f38cc3b300389871df50b",
"0xb38a6b4d48e4f940e13848c16e363223aaf29ea276dba23207fe2043331a6d58",
"0xe797a2ea065e027981463839e572d4116875df05587ca76345cbbf16ce8dbf34",
"0x499f68135329c14179d38e5dc53a696c795713c74b68e47f6b6a664a73bfd061",
"0xd9fa4d58139556dcdd44b14b1b2cbf44c58a755c4dd9bd3dc6f7e4c3b695d11a"
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

