"use client";
import React, { useState, useEffect } from "react";

import DisplayCampaigns from "../../components/DisplayCampaigns";

import contractAbi from "../../constants/SaveAKid.json";
import contractAddresses from "../../constants/contractAddresses.json";
import { formatEther } from "viem";

import {
  usePrepareContractWrite,
  useContractWrite,
  useContractRead,
  useAccount,
} from "wagmi";
import { getContract, readContract } from "@wagmi/core";
import PageContainer from "../../components/containers/PageContainer";
import Container from "../../components/containers/Container";

const Dashboard = () => {
  const saveAKidAddr = contractAddresses["11155111"][0];

  const contract = getContract({
    address: saveAKidAddr,
    abi: contractAbi,
  });

  const { address } = useAccount(); // smart wallet address

  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

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

    const parsedCampaigns = readData.map((campaign, i) => ({
      owner: campaign.owner,
      name: campaign.name,
      title: campaign.title,
      description: campaign.description,
      target: formatEther(campaign.target.toString()),
      deadline: campaign.deadline,
      amountCollected: formatEther(campaign.amountCollected.toString()),
      image: campaign.image,
      pId: i,
    }));

    console.log(`The contract data is: ${readData}`);
    setCampaigns(parsedCampaigns);
    setIsLoading(false);
  };

  // const getCampaigns = async () => {
  //   // Read values from the smart contract
  //   // const { data: readData, isLoading: readLoading } = useContractRead({
  //   //   address: saveAKidAddr,
  //   //   abi: contractAbi,
  //   //   functionName: "getCampaigns",
  //   // });

  //   const campaigns = await contract.read.getCampaigns();

  //   const parsedCampaigns = campaigns.map((campaign, i) => ({
  //     owner: campaign.owner,
  //     title: campaign.title,
  //     description: campaign.description,
  //     target: formatEther(campaign.target.toString()),
  //     deadline: campaign.deadline,
  //     amountCollected: formatEther(campaign.amountCollected.toString()),
  //     image: campaign.image,
  //     pId: i,
  //   }));

  //   console.log(`The contract data is: ${parsedCampaigns.owner}`);
  //   return parsedCampaigns;
  // };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address]);

  return (
    <>
      <DisplayCampaigns
        title="All Campaigns"
        isLoading={isLoading}
        campaigns={campaigns}
      />{" "}
    </>
  );
};

export default Dashboard;
