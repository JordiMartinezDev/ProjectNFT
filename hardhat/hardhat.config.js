require("@nomicfoundation/hardhat-toolbox");
const fs = require("fs");
let mnemonic = fs.readFileSync(".secret").toString().trim();
let infuraProjectId = fs.readFileSync(".infura").toString().trim();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/" + "23407298307847fe9575a7bc98a97aaa", // this could be infuraProjectId
      accounts: {
        mnemonic,
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 0,
      },
    },
  },
  solidity: "0.8.20",
};
