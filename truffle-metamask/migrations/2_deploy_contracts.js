var TestContract = artifacts.require("./TestContract.sol");

module.exports = function(deployer) {
  deployer.deploy(TestContract);
};
