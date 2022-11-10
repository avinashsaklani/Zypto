// https://eth-ropsten.alchemyapi.io/v2/wDz85cT3NtddNDJDNy4hhjXkHt0ifqj2

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/wDz85cT3NtddNDJDNy4hhjXkHt0ifqj2',
      accounts: ['3a5c89df503c52371c16bdaf1797574efd159927e466104a849adccde4cfd053'],
    },
  },
};