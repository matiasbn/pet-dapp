const PetDapp = artifacts.require('PetDapp');

module.exports = function (deployer) {
  deployer.deploy(PetDapp);
};
