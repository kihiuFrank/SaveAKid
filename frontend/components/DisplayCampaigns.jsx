import React from "react";
import { useRouter } from "next/navigation";

import { v4 as uuidv4 } from "uuid";
import FundCard from "./FundCard";
import Image from "next/image";
import Container from "./containers/Container";
import { formatEther } from "viem";

const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
  const router = useRouter();

  console.log(`These are the campaigns: ${campaigns}`);

  const handleNavigate = (campaign) => {
    //router.push(`/campaign-details/${campaign.pId}`, { state: campaign });
    router.push({
      pathname: `/campaign-details/${campaign.pId}`,
      query: {
        owner: campaign.owner,
        name: campaign.name,
        title: campaign.title,
        description: campaign.description,
        target: campaign.target,
        deadline: campaign.deadline,
        amountCollected: campaign.amountCollected,
        image: campaign.image,
        pId: campaign.pId,
      },
    });

    // router.push("/campaign-details");
  };

  return (
    <Container className="flex flex-wrap items-center justify-center flex-col mt-[5rem]">
      <h1 className=" font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight text-3xl xl:text-5xl xl:leading-tight dark:text-white">
        {title} ({campaigns.length})
      </h1>

      {isLoading && (
        <Image
          priority
          src="/loader.svg"
          width={200}
          height={200}
          alt="loader"
          className="object-contain"
        />
      )}

      {!isLoading && campaigns.length === 0 && (
        <p className="  font-semibold text-lg leading-8 text-[#818183]">
          You have not created any campaigns yet
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8  gap-8">
        {!isLoading &&
          campaigns.length > 0 &&
          campaigns.map((campaign) => (
            <FundCard
              key={uuidv4()}
              {...campaign}
              handleClick={() => handleNavigate(campaign)}
            />
          ))}
      </div>
    </Container>
  );
};

export default DisplayCampaigns;
