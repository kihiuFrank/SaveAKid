import { ConnectKitButton } from "connectkit";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "/",
      name: "Home",
    },
    {
      id: 2,
      link: "/dashboard",
      name: "Dashboard",
    },
    {
      id: 3,
      link: "/create-campaign",
      name: "Campaign",
    },
    {
      id: 4,
      link: "/community",
      name: "Community",
    },
    {
      id: 5,
      link: "/blog",
      name: "Blog",
    },
  ];

  return (
    <div className="flex-no-wrap flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap  lg:py-4  fixed nav">
      <div className="px-4">
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className="text-3xl font-signature ml-2">
          <a
            className="link-underline link-underline-black text-cornflowerblue"
            href="/"
            rel="noreferrer"
          >
            SaveAKid
          </a>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, name }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-gunmetalgray duration-200 link-underline"
          >
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>

      <div className="hidden md:flex px-4">
        <ConnectKitButton />
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 right-0 w-80 h-120  bg-[rgba(255,255,255,0.9)] border-gray-200 rounded-lg ">
          {links.map(({ id, link, name }) => (
            <li
              key={id}
              className="px-3 cursor-pointer capitalize py-4 text-2xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {name}
              </Link>
            </li>
          ))}

          <div className=" px-8 ">
            <ConnectKitButton />
          </div>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
