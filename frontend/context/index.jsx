"use client";
import React, { useContext, createContext } from "react";
import contractAbi from "../constants/SaveAKid.json";
import contractAddresses from "../constants/contractAddresses.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import {
//   useAddress,
//   useContract,
//   useMetamask,
//   useContractWrite,
//   ChainId,
// } from "@thirdweb-dev/react";
import {
  usePrepareContractWrite,
  useWaitForTransaction,
  useContractWrite,
  useContractRead,
  useContract,
  useAccount,
} from "wagmi";
import { getContract } from "@wagmi/core";
import { utils } from "ethers";
//import { ethers } from "ethers";

const StateContext = createContext();
const saveAKidAddr = contractAddresses["11155111"][0];

export const StateContextProvider = ({ children }) => {
  const contract = getContract({
    address: saveAKidAddr,
    abi: contractAbi,
  });

  const { address } = useAccount(); // smart wallet address

  const createCampaign = async (form) => {
    const { config } = usePrepareContractWrite({
      address: saveAKidAddr,
      abi: contractAbi,
      functionName: "createCampaign",
    });

    const { data, write } = useContractWrite(config);

    const { isSuccess } = useWaitForTransaction({
      hash: data?.hash,
    });
    try {
      write({
        args: [
          // items have to be in the order they were the contract inside createCampaign()
          address, // owner of the campaign
          form.name, // name
          form.title, // title
          form.category, // campaign category
          form.description, // description
          form.target,
          new Date(form.deadline).getTime(),
          form.image,
        ],
      });

      isSuccess &&
        toast.success(
          `Campaign created successfully. https://etherscan.io/tx/${data?.hash}`
        );
      console.log("contract call success", data);
    } catch (error) {
      toast.error("Error while creating Campaign, please try again");
      console.log("contract call failure", error);
    }
  };

  const updateCampaign = async (form) => {
    try {
      const data = await contract.call("updateCampaign", [
        form.id, // campaign id
        form.title, // title
        form.description, // description
        form.target,
        new Date(form.deadline).getTime(), // deadline,
        form.image,
      ]);
      toast.success("Campaign updated successfully.");
      console.log("contract call success", data);
    } catch (error) {
      toast.error("Error while creating Campaign, please try again");
      console.log("contract call failure", error);
    }
  };

  const deleteCampaign = async (pId) => {
    try {
      const data = await contract.call("deleteCampaign", [pId]);

      toast.success("Campaign deleted successfully.");
      console.log("contract call success", data);
      return data;
    } catch (error) {
      toast.error("Error while deleting Campaign, please try again");
      console.log("contract call failure", error);
    }
  };

  const getCampaigns = async () => {
    // Read values from the smart contract
    const { data: readData, isLoading: readLoading } = useContractRead({
      address: saveAKidAddr,
      abi: contractAbi,
      functionName: "getCampaigns",
    });

    const campaigns = await contract.call("getCampaigns");

    const parsedCampaigns = campaigns.map((campaign, i) => ({
      owner: campaign.owner,
      title: campaign.title,
      description: campaign.description,
      target: ethers.utils.formatEther(campaign.target.toString()),
      deadline: campaign.deadline.toNumber(),
      amountCollected: ethers.utils.formatEther(
        campaign.amountCollected.toString()
      ),
      image: campaign.image,
      pId: i,
    }));

    return parsedCampaigns;
  };

  const getUserCampaigns = async () => {
    const allCampaigns = await getCampaigns();

    const filteredCampaigns = allCampaigns.filter(
      (campaign) => campaign.owner === address
    );

    return filteredCampaigns;
  };

  const donate = async (pId, amount) => {
    try {
      const data = await contract.call("donateToCampaign", [pId], {
        value: ethers.utils.parseEther(amount),
      });
      toast.success(
        "Campaign funded successfully. Thansk for your collaboration"
      );
      return data;
    } catch (err) {
      console.log("Error occured while making donation", err);
    }
  };

  const payOutToCampaignTeam = async (pId) => {
    try {
      const data = await contract.call("payOutToCampaignTeam", [pId]);
      toast.success("Campaign funds successfully withdrawed.");
      return data;
    } catch (err) {
      toast.error("Error occured while withdrawing funds.");
      console.log("Error occured while withdrawing funds", err);
    }
  };

  const getDonations = async (pId) => {
    const donations = await contract.call("getDonators", [pId]);
    const numberOfDonations = donations[0].length;

    const parsedDonations = [];

    for (let i = 0; i < numberOfDonations; i++) {
      parsedDonations.push({
        donator: donations[0][i],
        donation: ethers.utils.formatEther(donations[1][i].toString()),
      });
    }

    return parsedDonations;
  };

  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        createCampaign,
        getCampaigns,
        getUserCampaigns,
        donate,
        getDonations,
        payOutToCampaignTeam,
        updateCampaign,
        deleteCampaign,
      }}
    >
      <ToastContainer />
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
