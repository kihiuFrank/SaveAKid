const networkConfig = {
  default: {
    name: "hardhat",
  },
  31337: {
    name: "localhost",
    entranceFee: ethers.parseEther("0.1"),
    gasLane:
      "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
    callbackGasLimit: "500000",
    interval: "30",
  },
  11155111: {
    name: "sepolia",
    gasLane:
      "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15",
    callbackGasLimit: "500000", //500,000
    interval: "30",
  },
};

const developmentChains = ["hardhat", "localhost"];
const VERIFICATION_BLOCK_CONFIRMATIONS = 6;
const frontEndContractFile = "../frontend/constants/contractAddresses.json";
const frontEndAbiFile = "../frontend/constants/SaveAKid.json";

module.exports = {
  networkConfig,
  developmentChains,
  VERIFICATION_BLOCK_CONFIRMATIONS,
  frontEndContractFile,
  frontEndAbiFile,
};
