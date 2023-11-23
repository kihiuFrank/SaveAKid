import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "./containers/Container";

import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

export default function Footer() {
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
  const legal = [
    {
      id: 1,
      link: "",
      name: "Terms",
    },
    {
      id: 2,
      link: "",
      name: "Privacy",
    },
    {
      id: 3,
      link: "",
      name: "Legal",
    },
  ];
  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl  grid-cols-1 md:grid-cols-4 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              {" "}
              <Link
                href="/"
                className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
              >
                {/* <Image
                  src="/img/logo.svg"
                  alt="N"
                  width="32"
                  height="32"
                  className="w-8"
                /> */}
                <span>SaveAKid</span>
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              SaveAKid is a donations platform aiming to provide support for
              children and young people each year by creating a space where
              charity organizations and children homes are connected with donors
              from all over the world.
            </div>

            <div className="flex p-8 sm:p-4 flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href=""
                target="_blank"
                rel="noopener"
                className="px-4 py-2  text-lg font-medium text-center text-white bg-indigo-600 rounded-md "
              >
                Donate Now
              </a>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {links.map(({ id, link, name }) => (
                <Link
                  key={id}
                  href={link}
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map(({ id, link, name }) => (
                <Link
                  key={id}
                  href={link}
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
          <div className="">
            <div>Follow us</div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              <a
                href="https://twitter.com/"
                target="_blank"
                className="lg:text-3xl"
                rel="noopener"
              >
                <span className="sr-only">Twitter</span>
                <FaXTwitter />
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                className="lg:text-3xl"
                rel="noopener"
              >
                <span className="sr-only">Facebook</span>
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                className="lg:text-3xl"
                rel="noopener"
              >
                <span className="sr-only">Instagram</span>
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                className="lg:text-3xl"
                rel="noopener"
              >
                <span className="sr-only">Linkedin</span>
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. Made with ♥ by{" "}
          <a href="https://franklinekihiu.xyz./" target="_blank" rel="noopener">
            Frankline Kihiu.
          </a>
        </div>
      </Container>
    </div>
  );
}
