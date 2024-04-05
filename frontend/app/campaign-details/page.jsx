"use client";

import React, { useState, useEffect } from "react";

// local imports
import { useStateContext } from "../../context";
import Image from "next/image";
import { calculateBarPercentage, daysLeft } from "../../utils";
import { useRouter, useSearchParams } from "next/navigation";
import CustomButton from "../../components/CustomButton";
import CountBox from "../../components/CountBox";
import Expandable from "../../components/Expandable";
import {
  usePrepareContractWrite,
  useContractWrite,
  useContractRead,
  useAccount,
} from "wagmi";
import { getContract, readContract } from "@wagmi/core";
import contractAbi from "../../constants/SaveAKid.json";
import contractAddresses from "../../constants/contractAddresses.json";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../components/Loader";
import Container from "../../components/containers/Container";
import { title } from "process";

const CampaignDetails = () => {
  const router = useRouter();
  //const { query } = useRouter();
  // const { state } = router.query;
  //let result = JSON.parse(router.query.result);

  const searchParams = useSearchParams();

  const saveAKidAddr = contractAddresses["11155111"][0];
  const contract = getContract({
    address: saveAKidAddr,
    abi: contractAbi,
  });

  const { address } = useAccount(); // smart wallet address

  // const { donate, getDonations, deleteCampaign } = useStateContext();

  //const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [donators, setDonators] = useState([]);

  const remainingDays = daysLeft(searchParams.get(deadline));

  // donating to a campaign
  const { donateConfig } = usePrepareContractWrite({
    address: saveAKidAddr,
    abi: contractAbi,
    functionName: "donateToCampaign",
    args: [
      // items have to be in the order they were the contract inside func()
      searchParams.get(pId),
      amount,
    ],
  });

  const { data, write } = useContractWrite(donateConfig);

  const { isLoading, isError, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const fetchDonators = async () => {
    const donatorsData = await readContract({
      address: saveAKidAddr,
      abi: contractAbi,
      functionName: "getDonations",
      args: [searchParams.get(pId)],
    });

    setDonators(donatorsData);
  };

  useEffect(() => {
    if (contract) fetchDonators();
  }),
    [contract, address];

  // const id = state.pId;
  // const name = state.name;
  // const title = state.title;
  // const category = state.category;
  // const description = state.description;
  // const target = state.target;
  // const deadline = state.deadline;
  // const image = state.image;

  const handleUpdate = () => {
    // router.push(`/update-campaign/${state.pId}`, {
    //   state: {
    //     id,
    //     name,
    //     title,
    //     category,
    //     description,
    //     target,
    //     deadline,
    //     image,
    //   },
    // });
    console.log("Updating...");
  };

  const handleDonate = async () => {
    try {
      write();

      // if (isSuccess && !isError) {
      //   console.log("contract call success", data);
      //   router.push("/");
      //   toast.success(`Donated successfully. tx/${data?.hash}`);
      //   //setIsLoading(false);
      // }
    } catch (error) {
      toast.error("Error while creating Campaign, please try again");
      console.log("contract call failure", error);
    }
  };

  const handleDelete = async () => {
    // setIsLoading(true);

    // await deleteCampaign(state.pId);

    // router.push("/");
    // setIsLoading(false);
    console.log("Deleting...");
  };

  return (
    <Container>
      {isLoading && <Loader />}

      {isSuccess &&
        toast.success(`Donated successfully. tx:${data?.hash}`) &&
        router.push("/dashboard")}

      {isError && toast.error("Error while donating, please try again")}

      <div className=" flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4 gap-10 mt-[5rem]">
        <div className="w-full flex md:flex-row flex-col mt-10 gap-[30px]">
          <div className="flex-1 flex-col">
            <img
              src={searchParams.get(image)}
              alt="campaign"
              className="w-full h-[410px] object-cover rounded-xl"
            />

            <div className="relative w-full h-[5px] bg-[#3a3a43] mt-2">
              <div
                className="absolute h-full bg-[#b6049f]"
                style={{
                  width: `${calculateBarPercentage(
                    searchParams.get(target),
                    searchParams.get(amountCollected)
                  )}%`,
                  maxWidth: "100%",
                }}
              ></div>
            </div>
          </div>

          <div className="flex md:w-[150px] w-full flex-wrap justify-between gap-[30px]">
            <CountBox title="Days Left" value={remainingDays} />
            <CountBox
              title={`Raised out of ${searchParams.get(target)}`}
              value={searchParams.get(target)}
            />
            <CountBox title="Total Backers" value={donators.length} />
          </div>
        </div>

        <div className="mt-[60px] flex lg:flex-row flex-col gap-5">
          <div className="flex-[2] flex flex-col gap-[40px]">
            <div>
              <h4 className="  font-semibold text-[18px] text-white uppercase">
                {searchParams.get(title)}
              </h4>

              <p className="mt-[3px]   font-normal text-[16px] leading-[18px] text-[#808191]">
                {searchParams.get(category)}
              </p>
            </div>

            <div>
              <h4 className="  font-semibold text-[18px] text-white uppercase">
                Organizer
              </h4>

              <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[14px]">
                <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#2c2f32] cursor-pointer">
                  <img
                    src="/thirdweb.png"
                    alt="user"
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>

                <div>
                  <h4 className="  font-semibold text-[14px] text-white break-all">
                    {searchParams.get(name)} is organizing this fundraiser.
                  </h4>
                  <p className="mt-[4px]   font-normal text-[13px] text-[#808191]">
                    {searchParams.get(owner)}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="  font-semibold text-[18px] text-white uppercase">
                Story
              </h4>

              <div className="mt-[20px] text-[#808191]">
                <Expandable>{searchParams.get(description)}</Expandable>
              </div>
            </div>

            <div>
              <h4 className="  font-semibold text-[18px] text-white uppercase">
                Donators
              </h4>

              <div className="mt-[20px] flex flex-col gap-4">
                {donators.length > 0 ? (
                  donators.map((item, index) => (
                    <div
                      key={`${item.donator}-${index}`}
                      className="flex justify-between items-center gap-4"
                    >
                      <p className="  font-normal text-[16px] text-[#b2b3bd] leading-[26px] break-all">
                        {" "}
                        {index + 1}. {item.donator}
                      </p>

                      <p className="  font-normal text-[16px] text-[#808191] leading-[26px] break-all">
                        {item.donation}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="   font-normal text-[16px] text-[#808191] leading-[26px] text-justify">
                    No donators yet. Be the first one.
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex-1">
            <h4 className="  font-semibold text-[18px] text-white uppercase">
              Fund
            </h4>

            <div className="mt-[20px] flex flex-col p-4 bg-[#1c1c24] rounded-[10px]">
              <p className="  fount-medium text-[20px] leading-[30px] text-center text-[#808191]">
                Fund the campaign
              </p>
              <div className="mt-[30px]">
                <input
                  type="number"
                  placeholder="ETH 0.1"
                  step="0.01"
                  className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent   text-white text-[18px] leading-[30px] placeholder:text-[#4b5264] rounded-[10px]"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />

                <div className="my-[20px] p-4 bg-[#13131a] rounded-[10px]">
                  <h4 className="  font-semibold text-[14px] leading-[22px] text-white">
                    Back it because you believe in it.
                  </h4>
                  <p className="mt-[20px]   font-normal leading-[22px] text-[#808191]">
                    Support the project for no reward, just because it speaks to
                    you.
                  </p>
                </div>

                <CustomButton
                  btnType="button"
                  title="Fund Campaign"
                  styles="w-full bg-[#ac73ff]"
                  handleClick={handleDonate}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[60px]   mb-[30px]">
          {address == searchParams.get(owner) ? (
            <div className="flex flex-wrap gap-[40px]">
              <CustomButton
                btnType="button"
                id={searchParams.get(pId)}
                title="Update Campaign"
                styles="w-[40%] bg-[#ac73ff]"
                handleClick={handleUpdate}
              />

              <CustomButton
                btnType="button"
                title="Delete Campaign"
                styles=" w-[40%] bg-[#FF0000]"
                handleClick={handleDelete}
              />
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>

      <ToastContainer />
    </Container>
  );
};

export default CampaignDetails;

// import React from "react";
// import ComingSoon from "../../components/utils/comingSoon/comingsoon";

// function page() {
//   return (
//     <div>
//       <ComingSoon />
//     </div>
//   );
// }

// export default page;
