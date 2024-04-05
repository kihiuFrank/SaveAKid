"use client";
import PageContainer from "../../components/containers/PageContainer";
import React, { useState } from "react";
import { parseUnits } from "viem";
import { useStateContext } from "../../context/";
import { checkIfImage } from "../../utils";
import { useRouter } from "next/navigation";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import {
  usePrepareContractWrite,
  useWaitForTransaction,
  useContractWrite,
  useContractRead,
  useContract,
  useAccount,
} from "wagmi";
import contractAbi from "../../constants/SaveAKid.json";
import contractAddresses from "../../constants/contractAddresses.json";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../components/Loader";
import Container from "../../components/containers/Container";

const Campaign = () => {
  const router = useRouter();
  //const [isLoading, setIsLoading] = useState(false);
  const { createCampaign } = useStateContext();
  const [form, setForm] = useState({
    name: "",
    title: "",
    category: "Fundraiser",
    description: "",
    target: "",
    deadline: "2023-01-01",
    image: "",
  });

  const { address } = useAccount(); // smart wallet address
  const saveAKidAddr = contractAddresses["11155111"][0];
  // const [selectedCategory, setSelectedCategory] = useState({ category: "" });

  // function takes an event (e) and calls setForm()
  // we spread out the entire form and then change only the special type of the field that changed
  // we know which value changed by passing fieldName to the function
  // then the value is stored in e.target.value
  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  // const handleDropDownChange = (fieldName, e) => {
  //   setSelectedCategory({ ...selectedCategory, [fieldName]: e.target.value });
  // };

  const { config } = usePrepareContractWrite({
    address: saveAKidAddr,
    abi: contractAbi,
    functionName: "createCampaign",
    args: [
      // items have to be in the order they were the contract inside createCampaign()
      address, // owner of the campaign
      form.name, // name
      form.title, // title
      form.category, // campaign category
      form.description, // description
      parseUnits(form.target, 18),
      new Date(form.deadline).getTime(),
      form.image,
    ],
  });

  const { data, write } = useContractWrite(config);

  const { isLoading, isError, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page from reloading by default after submitting the form

    //console.log(form);
    checkIfImage(form.image, async (exists) => {
      if (exists) {
        //setIsLoading(true);
        console.log("form", form);

        // await createCampaign({
        //   ...form,
        //   target: parseUnits(form.target, 18),
        // });

        try {
          write();

          // if (isSuccess && !isError) {
          //   console.log("contract call success", data);
          //   router.push("/");
          //   toast.success(`Campaign created successfully. tx/${data?.hash}`);
          //   //setIsLoading(false);
          // }
        } catch (error) {
          toast.error("Error while creating Campaign, please try again");
          console.log("contract call failure", error);
        }
      } else {
        toast("Provide valid image URL");
        setForm({ ...form, image: "" });
      }
    });
  };

  return (
    <Container>
      {isLoading && <Loader />}

      {isSuccess &&
        toast.success(`Campaign created successfully. tx:${data?.hash}`) &&
        router.push("/")}

      {isError &&
        toast.error("Error while creating Campaign, please try again")}

      <div className=" flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4 gap-10 mt-[5rem]">
        <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
          <h1 className="  font-bold sm:text-[25px] text-[18px] leading-[38px] text-gray-800 dark:text-white">
            Start a Campaign
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full mt-[65px] flex flex-col gap-10"
        >
          <div className="flex flex-wrap gap-10">
            <FormField
              labelName="YourName *"
              placeholder="John Doe"
              inputType="text"
              value={form.name}
              handleChange={(e) => handleFormFieldChange("name", e)}
            />

            <FormField
              labelName="Campaign Title *"
              placeholder="Write a title"
              inputType="text"
              value={form.title}
              handleChange={(e) => handleFormFieldChange("title", e)}
            />

            <FormField
              labelName="Select Category *"
              placeholder="Select..."
              isCategory
              value={form.category}
              handleChange={(e) => handleFormFieldChange("category", e)}
            />
          </div>

          <FormField
            labelName="Story *"
            placeholder="Write a your story"
            isTextArea
            value={form.description}
            handleChange={(e) => handleFormFieldChange("description", e)}
          />

          <div className="w-full flex justify-start items-center p-4 bg-[#ac73ff] rounded-[10px]">
            <img
              src="/money.svg"
              alt="money"
              className="w-[40px] h-[40px] object-contain"
            />

            <h4 className="  font-bold text-[25px] text-gray-800 dark:text-white ml-[20px]">
              You will get (100 - platformFee)% of the raised amount
            </h4>
          </div>
          <div className="flex flex-wrap gap-10">
            <FormField
              labelName="Goal *"
              placeholder="ETH 0.50"
              inputType="text"
              value={form.target}
              handleChange={(e) => handleFormFieldChange("target", e)}
            />

            <FormField
              labelName="End Date *"
              placeholder="End Date"
              inputType="date"
              value={form.deadline}
              handleChange={(e) => handleFormFieldChange("deadline", e)}
            />
          </div>
          <FormField
            labelName="Campaign image *"
            placeholder="Place image URL of your campaign"
            inputType="url"
            value={form.image}
            handleChange={(e) => handleFormFieldChange("image", e)}
          />

          <div className="flex justify-center items-center mt-[40px]">
            <CustomButton
              btnType="submit"
              title="Start new campaign"
              styles="bg-[#b6049f]"
            />
          </div>
        </form>
      </div>
      <ToastContainer />
    </Container>
  );
};

export default Campaign;
