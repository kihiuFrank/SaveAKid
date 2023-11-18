"use client";
import Link from "next/link";
import Image from "next/image";

export default function Landing() {
  return (
    <div
      id="home-section"
      className="flex items-center justify-center flex-col  h-full my-12 mx-auto max-w-7xl pt-20 sm:pb-24 px-6"
    >
      <header className="flex items-center flex-col">
        <div className="leading-10 text-center">
          <h1 className="text-4xl">
            SaveAKid
            <span className="text-cornflowerblue"> Donations Platform</span>
          </h1>
          <h3 className="text-kellygreen text-sm font-semibold text-center lg:text-start">
            The ultimate donations platform for supporting children in Africa.
          </h3>
        </div>
      </header>

      <div className="flex justify-between items-center flex-col w-full p-12 gap-8 ">
        <div className="">
          <img
            className="h-auto max-w-lg  mx-auto rounded-lg shadow-xl dark:shadow-gray-800"
            src="/saveAKid.jpeg"
            alt="Picture"
          />
        </div>
        <p className="right-0 font-normal text-sm ">
          SaveAKid is a donations platform aiming to provide support for
          children and young people each year by creating a space where charity
          organizations and children homes are connected with donors from all
          over the world. <br /> <br />
          This includes support for children and young people at primary school,
          secondary school and for students attending college, university or
          vocational courses. <br />
          When you make a donation today, you're not only creating a brighter
          world, you are also helping a child meet some of their greatest needs.
          Support a child in need by making a donation today!
        </p>
      </div>
    </div>
  );
}
