"use client";
import React, { useState, useEffect } from "react";

import styles from "./campaigns.module.css";

import DisplayCampaigns from "../../components/DisplayCampaigns";

import contractAbi from "../../constants/SaveAKid.json";
import contractAddresses from "../../constants/contractAddresses.json";
import { formatEther } from "viem";
import { ethers } from "ethers";

import {
  usePrepareContractWrite,
  useContractWrite,
  useContractRead,
  useAccount,
} from "wagmi";
import { getContract, readContract } from "@wagmi/core";

const page = () => {
  const saveAKidAddr = contractAddresses["11155111"][0];

  const contract = getContract({
    address: saveAKidAddr,
    abi: contractAbi,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address } = useAccount(); // smart wallet address

  // to fetch campaigns we need to call getCampaigns which is an async func and hence we can't use it directly in the useEffect
  // so we create another method (fetchCampaigns) and call that instead.
  const fetchCampaigns = async () => {
    setIsLoading(true);
    // Read values from the smart contract
    const readData = await readContract({
      address: saveAKidAddr,
      abi: contractAbi,
      functionName: "getCampaigns",
    });
    console.log(`The contract data is: ${readData}`);
    setCampaigns(readData);
    setIsLoading(false);
  };

  const getCampaigns = async () => {
    // Read values from the smart contract
    // const { data: readData, isLoading: readLoading } = useContractRead({
    //   address: saveAKidAddr,
    //   abi: contractAbi,
    //   functionName: "getCampaigns",
    // });

    const campaigns = await contract.read.getCampaigns();

    const parsedCampaigns = campaigns.map((campaign, i) => ({
      owner: campaign.owner,
      title: campaign.title,
      description: campaign.description,
      target: formatEther(campaign.target.toString()),
      deadline: campaign.deadline,
      amountCollected: formatEther(campaign.amountCollected.toString()),
      image: campaign.image,
      pId: i,
    }));

    console.log(`The contract data is: ${campaigns}`);
    return parsedCampaigns;
  };

  useEffect(() => {
    if (contract) getCampaigns();
  }, [address, contract]);

  return (
    <div className={styles.main}>
      <DisplayCampaigns
        title="All Campaigns"
        isLoading={isLoading}
        campaigns={campaigns}
      />{" "}
    </div>
  );
};

export default page;
