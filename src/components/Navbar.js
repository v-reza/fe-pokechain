/* eslint-disable @next/next/no-img-element */
import { navigation } from "@/utils/navigation";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import icon from "@/dist/icons.png"
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  return (
    <div>
      <Popover as="header" className="relative z-20">
        <div className="pt-6">
          <nav
            className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  <Image
                    src={icon}
                    alt="icon"
                    placeholder="blur"
                    blurDataURL={icon}
                    objectFit="cover"
                    width={40}
                    height={40}
                  />
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="hidden space-x-8 md:flex md:ml-10">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <div
                      key={item.name}
                      className="cursor-pointer text-base  text-white hover:text-gray-300"
                    >
                      <span
                        className={`${
                          router.pathname === item.href
                            ? "text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600"
                            : "font-medium"
                        }`}
                      >
                        {item.name}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-2 lg:space-x-12">
              <div
                onClick={() => window.open(process.env.MARKETPLACE_URL)}
                className=" cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-[#3D00B7] hover:bg-[#3d00b7a1]"
              >
                <div className="flex items-center space-x-2 text-[#ff9345]">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 1.25A3.75 3.75 0 0 0 8.25 5v1a4 4 0 0 0-3.862 3.263l-1.5 8A4 4 0 0 0 6.82 22h10.36a4 4 0 0 0 3.932-4.737l-1.5-8A4 4 0 0 0 15.75 6V5A3.75 3.75 0 0 0 12 1.25ZM14.25 6V5a2.25 2.25 0 0 0-4.5 0v1h4.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span className="font-medium text-white">Marketplace</span>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
          >
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="/assets/images/icons.png"
                    alt=""
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:rounded-none">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <div
                        key={item.name}
                        className="cursor-pointer block px-3 py-2 rounded-md text-base text-gray-900 hover:bg-gray-50"
                      >
                        <span className={`font-medium`}>{item.name}</span>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-6 px-5">
                  <div
                    onClick={() => window.open(process.env.MARKETPLACE_URL)}
                    className="w-full cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-[#3D00B7] hover:bg-[#3d00b7a1]"
                  >
                    <div className="flex items-center space-x-2 text-[#ff9345]">
                      <svg viewBox="0 0 24 24" width="24" height="24">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 1.25A3.75 3.75 0 0 0 8.25 5v1a4 4 0 0 0-3.862 3.263l-1.5 8A4 4 0 0 0 6.82 22h10.36a4 4 0 0 0 3.932-4.737l-1.5-8A4 4 0 0 0 15.75 6V5A3.75 3.75 0 0 0 12 1.25ZM14.25 6V5a2.25 2.25 0 0 0-4.5 0v1h4.5Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <span className="font-medium text-white text-md">
                        Marketplace
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};

export default Navbar;
