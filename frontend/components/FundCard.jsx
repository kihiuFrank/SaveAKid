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
      className=" rounded-[1rem]  bg-gray-50 border border-gray-200 shadow dark:bg-[#1c1c24] dark:border-gray-700 cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={image}
        width="auto"
        height="auto"
        alt="fund"
        className="w-full h-[12rem] object-cover rounded-[1rem]"
      />

      <div className="flex flex-col px-2">
        <p className="ml-2 mt-0.5 h-4   font-medium text-[#808191]">
          {category}
        </p>

        <div className="block">
          <h3 className="  font-semibold text-base text-black dark:text-white  text-left leading-6 truncate">
            {title}
          </h3>
          <p className="mt-1 font-normal  text-gray-700 dark:text-gray-400 text-left leading-6 truncate">
            {description}
          </p>
        </div>

        <div className="flex justify-between flex-wrap mt-4 gap-2">
          <div className="flex flex-col">
            <h4 className="  font-semibold text-base text-gray-700 dark:text-gray-400 leading-6">
              {amountCollected}
            </h4>
            <p className="mt-px font-normal text-sm leading-8 text-gray-700 dark:text-gray-400 max-w-[9rem] truncate">
              Raised out of <span className="truncate">{target}</span>
            </p>
          </div>

          <div className="flex flex-col">
            <h4 className="  font-semibold text-base text-gray-700 dark:text-gray-400 leading-6">
              {remainingDays}
            </h4>
            <p className="mt-px   font-normal text-sm leading-8 text-gray-700 dark:text-gray-400 sm:max-w-[120px] truncate">
              Days left
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-[3rem] h-3rem] rounded-full flex justify-center items-center ">
            <Image
              priority
              src="/logo.png"
              width={300}
              height={300}
              alt="user"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>

          <div className="flex-1   font-normal text-[12px] text-gray-700 dark:text-gray-400 p-4 truncate">
            {" "}
            by{" "}
            <span className="  leading-6 text-blue-600 hover:underline dark:text-blue-500">
              {name}
            </span>
            <div className="flex flex-col">
              <span className="   font-normal text-[12px] text-gray-700 dark:text-gray-400 leading-6 sm:max-w-[120px] truncate ">
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
