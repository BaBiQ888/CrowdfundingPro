require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {
      accounts,
      gas: 10000000,
      gasPrice: 10000000000,
    },
    testnet: {
      accounts: [privateKey],
      url: 'http://35.177.140.254:26658',
      gas: 100000000,
      gasLimit: 100000000,
      gasPrice: 10000000000,
    },
    httest: {
      network_id: "*", // Any network (default: none)
      url: "https://http-testnet.hecochain.com",
      accounts: [privateKey],
    },
    local: {
      url: 'http://127.0.0.1:8545',
      accounts: [privateKey],
      gasLimit: 100000000,
      gasPrice: 5000000000
    }
  },
};
