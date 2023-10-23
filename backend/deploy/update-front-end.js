const { network } = require("hardhat");
const fs = require("fs");
require("dotenv").config();

const {
  frontEndContractFile,
  frontEndAbiLocation,
} = require("../helper-hardhat-config");

const contractAddress = "0xDeC6b9c484f01B080AdFa2fCE29FF6DD65FE97b0";

module.exports = async function () {
  if (process.env.UPDATE_FRONT_END) {
    console.log("Updating front end...");
    await updateContractAddresses();
    await updateAbi();
    console.log("Front end written!");
  }
};

async function updateAbi() {
  const saveAKid = await ethers.getContractAt("SaveAKid", contractAddress);

  fs.writeFileSync(
    "../frontend/src/constants/saveAKid.json",
    saveAKid.interface.format(ethers.utils.FormatTypes.json)
  );
  //   fs.writeFileSync(
  //     `${frontEndAbiLocation}`,
  //     JSON.stringify(saveAKid.interface.format("json"))
  //   );
}

async function updateContractAddresses() {
  const saveAKid = await ethers.getContractAt("SaveAKid", contractAddress);
  const chainId = network.config.chainId.toString();
  const contractAddresses = JSON.parse(
    fs.readFileSync(`${frontEndContractFile}`, "utf8")
  );

  if (contractAddresses[chainId]) {
    // Check if it's already an array
    if (Array.isArray(contractAddresses[chainId])) {
      if (!contractAddresses[chainId].includes(saveAKid.address)) {
        contractAddresses[chainId].push(saveAKid.address);
      }
    } else {
      // Convert it to an array
      contractAddresses[chainId] = [
        contractAddresses[chainId],
        saveAKid.address,
      ];
    }
  } else {
    contractAddresses[chainId] = [saveAKid.address];
  }

  fs.writeFileSync(
    "../frontend/src/constants/contractAddresses.json",
    JSON.stringify(contractAddresses)
  );
}

module.exports.tags = ["all", "frontend"];
