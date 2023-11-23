import React from "react";
import { useRouter } from "next/navigation";

import { v4 as uuidv4 } from "uuid";
import FundCard from "./FundCard";
import Image from "next/image";
import Container from "./containers/Container";
import PageContainer from "./containers/PageContainer";

const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
  const router = useRouter();

  console.log(`These are the campaigns: ${campaigns}`);

  const handleNavigate = (campaign) => {
    router.push(`/`);
  };

  return (
    <PageContainer className="flex flex-wrap items-center justify-between flex-col">
      <h1 className="text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
        {title} ({campaigns.length})
      </h1>
      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && (
          <Image
            priority
            src="/loader.svg"
            width={500}
            height={500}
            alt="loader"
            className="w-[100px] h-[100px] object-contain"
          />
        )}

        {!isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            You have not created any campaigns yet
          </p>
        )}

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
    </PageContainer>
  );
};

export default DisplayCampaigns;
