const Koala = artifacts.require("Koala");

module.exports = function (deployer, network, accounts) {
  deployer.deploy(Koala, { from: accounts[0] });
};
