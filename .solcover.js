const package = require("./package.json");
const shell = require("shelljs");
const utils = require("solidity-coverage/plugins/resources/truffle.utils");

module.exports = {
  port: 8545,
  skipFiles: ["mcd", "interfaces"],
  client: require("ganache-cli"),
  providerOptions: {
    network_id: package.config.ganacheNetworkID,
    default_balance_ether: package.config.etherBalance,
    mnemonic: package.config.mnemonic
  },
  onServerReady: function() {
    shell.exec("rm -rf build");
  },
  onCompileComplete: async function(config) {
    shell.exec("yarn gen:contract-typings");
    shell.exec("tsc -b");

    // Work arounds
    config.test_files = await utils.getTestFilePaths(config);
    process.env.npm_package_config_mnemonic = package.config.mnemonic;
  }
};
