const { ethers, network } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");
const { verify } = require("../utils/verify");

const PLATFORM_FEE = 5;

module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  const args = [PLATFORM_FEE];
  const saveakid = await deploy("SaveAKid", {
    from: deployer,
    args: args,
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  });

  // Verify the deployment
  if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY
  ) {
    log("Verifying...");
    await verify(saveakid.address, args);
  }

  log(
    "---------------------------------------------------------------------------------------------------------------------"
  );
};

module.exports.tags = ["all", "saveakid"];
