import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { ConnectKitButton } from "connectkit";

const Navbar = () => {
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
    <div className=" relative w-full ">
      <nav className=" fixed  z-50 flex flex-wrap items-center justify-between p-4  mx-auto lg:justify-between xl:px-0 shadow-lg shadow-black/5 d dark:shadow-black/10 bg-white dark:bg-gray-800  w-full top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        {/* Logo  */}
        <Disclosure>
          {({ open, close }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <span>
                      {/* <Image
                        src="/img/logo.svg"
                        alt="N"
                        width="32"
                        height="32"
                        className="w-8"
                      /> */}
                    </span>
                    <span>SaveAKid</span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {links.map(({ id, link, name }) => (
                      <Link
                        key={id}
                        href={link}
                        className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                        onClick={() => {
                          close();
                        }}
                      >
                        {name}
                      </Link>
                    ))}
                  </>
                  <div
                    className="w-full px-6 py-2 mt-3 text-center text-white  rounded-md lg:ml-5"
                    onClick={() => {
                      close();
                    }}
                  >
                    <ConnectKitButton />
                  </div>

                  <div
                    onClick={() => {
                      close();
                    }}
                  >
                    <ThemeChanger />
                  </div>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {links.map(({ id, link, name }) => (
              <li className="mr-3 nav__item" key={id}>
                <Link
                  href={link}
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <div className="px-6 py-2 text-white rounded-md md:ml-5">
            <ConnectKitButton />
          </div>

          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
