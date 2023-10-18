const { network } = require("hardhat");
const fs = require("fs");
require("dotenv").config();

const {
  frontEndContractFile,
  frontEndAbiLocation,
} = require("../helper-hardhat-config");

module.exports = async function () {
  if (process.env.UPDATE_FRONT_END) {
    console.log("Updating front end...");
    await updateContractAddresses();
    await updateAbi();
  }
};

async function updateAbi() {
  const saveAKid = await ethers.getContract("SaveAKid");
  //   fs.writeFileSync(
  //     `${frontEndAbiLocation}SaveAKid.json`,
  //     saveAKid.interface.format(ethers.utils.FormatTypes.json)
  //   );
  fs.writeFileSync(
    frontEndAbiLocation,
    saveAKid.interface.format(ethers.utils.FormatTypes.json)
  );
}

async function updateContractAddresses() {
  const saveAKid = await ethers.getContract("SaveAKid");
  const chainId = network.config.chainId.toString();
  const contractAddresses = JSON.parse(
    fs.readFileSync(frontEndContractFile, "utf8")
  );
  if (chainId in contractAddresses) {
    if (!contractAddresses[chainId].includes(saveAKid.address)) {
      contractAddresses[chainId].push(saveAKid.address);
    }
  } else {
    contractAddresses[chainId] = { SaveAKid: [saveAKid.address] };
  }
  fs.writeFileSync(frontEndContractFile, JSON.stringify(contractAddresses));
}

module.exports.tags = ["all", "frontend"];
