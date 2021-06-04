var CVTArtifact = artifacts.require("covidVaccinRegister");

module.exports = function (deployer) {
  deployer.deploy(CVTArtifact);
};