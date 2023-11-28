"use client";
import React from "react";

import Image from "next/image";
import { daysLeft } from "../utils";

const FundCard = ({
  owner,
  name,
  title,
  category,
  description,
  target,
  deadline,
  amountCollected,
  image,
  handleClick,
}) => {
  const remainingDays = daysLeft(deadline);
  return (
    <div
      className="sm:w-[288px] w-full rounded-[15px]  bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={image}
        width={200}
        height={200}
        alt="fund"
        className="w-full h-[158px] object-cover rounded-[15px]"
      />

      <div className="flex flex-col p-4">
        <div className="flex flex-row items-center mb-[18px]">
          <Image
            priority
            src="/type.svg"
            width={200}
            height={200}
            alt="tag"
            className="w-[17px] h-[17px] object-contain"
          />
          <p className="ml-[12px] mt-[2px] h-[17px] font-epilogue font-medium text-[#808191]">
            {category}
          </p>
        </div>

        <div className="block">
          <h3 className="font-epilogue font-semibold text-[16px] text-black dark:text-white  text-left leading-[26px] truncate">
            {title}
          </h3>
          <p className="mt-[5px] font-epilogue font-normal  text-gray-700 dark:text-gray-400 text-left leading-[18px] truncate">
            {description}
          </p>
        </div>

        <div className="flex justify-between flex-wrap mt-[15px] gap-2">
          <div className="flex flex-col">
            <h4 className="font-epilogue font-semibold text-[14px] text-gray-700 dark:text-gray-400 leading-[22px]">
              {amountCollected}
            </h4>
            <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-gray-700 dark:text-gray-400 sm:max-w-[120px] truncate">
              Raised out of {target}
            </p>
          </div>

          <div className="flex flex-col">
            <h4 className="font-epilogue font-semibold text-[14px] text-gray-700 dark:text-gray-400 leading-[22px]">
              {remainingDays}
            </h4>
            <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-gray-700 dark:text-gray-400 sm:max-w-[120px] truncate">
              Days left
            </p>
          </div>
        </div>

        <div className="flex items-center mt-[20px] gap-[12px]">
          <div className="w-[30px] h-30px] rounded-full flex justify-center items-center bg-[#13131a]">
            <Image
              priority
              src="/logo.png"
              width={200}
              height={200}
              alt="user"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>

          <div className="flex-1 font-epilogue font-normal text-[12px] text-gray-700 dark:text-gray-400 truncate">
            {" "}
            by{" "}
            <span className="font-epilogue leading-[22px] text-blue-600 hover:underline dark:text-blue-500">
              {name}
            </span>
            <div className="flex flex-col">
              <span className=" font-epilogue font-normal text-[12px] text-gray-700 dark:text-gray-400 leading-[18px] sm:max-w-[120px] truncate ">
                {owner}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundCard;
