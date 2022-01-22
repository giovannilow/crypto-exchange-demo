require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/wHpEqvrRAfxoH0PbreYrUUoIu-le7uml',
      accounts: [ '4a891315c496d4eda28589c9c6be8348b16bc1ca51daffe72bb3c16d6807d432' ]
    }
  }
}