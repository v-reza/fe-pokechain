/* eslint-disable @next/next/no-img-element */
import {
  ArrowRightIcon,
  ChartSquareBarIcon,
  CheckIcon,
  ChevronDownIcon,
  CreditCardIcon,
  SelectorIcon,
} from "@heroicons/react/solid";
import { Combobox } from "@headlessui/react";

const people = [
  {
    id: 1,
    name: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More users...
];

import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  AdjustmentsIcon,
  FilterIcon,
  MenuIcon,
  SearchIcon,
  ShieldCheckIcon,
  XIcon,
} from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

const navigation = [
  { name: "Marketplace", href: "#" },
  { name: "Resource", href: "#" },
  { name: "About", href: "#" },
];
const features = [
  {
    name: "Fast transaction",
    icon: CreditCardIcon,
  },
  {
    name: "Growth Transaction",
    icon: ChartSquareBarIcon,
  },

  {
    name: "Advanced Security",
    icon: ShieldCheckIcon,
  },
];
const footerNavigation = {
  marketplace: [
    { name: "All Pokemon", href: "#" },
    { name: "News", href: "#" },
  ],
  stats: [
    { name: "Ranking", href: "#" },
    { name: "Activity", href: "#" },
  ],
  resources: [
    { name: "Help center", href: "#" },
    { name: "Gas-Free Marketplace", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Newsletter", href: "#" },
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Dribbble",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

import { classNames } from "@/utils/constant";
import Head from "next/head";
import LoginModal from "@/components/AuthPages/Login";
import Link from "next/link";

export default function Example() {
  const [query, setQuery] = useState("");
  const [selectedPerson, setSelectedPerson] = useState();
  const [openAuthModal, setOpenAuthModal] = useState(false);

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <>
      <div
        className="bg-gray-900"
        style={{
          backgroundImage:
            "url('/assets/images/light-green.png'), url('/assets/images/light-blue.png')",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "color",
          opacity: "80",
        }}
      >
        <Head>
          <title>Pokechain</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <div className="relative overflow-hidden">
          <Popover as="header" className="relative">
            <div className=" pt-6 pb-4">
              <nav
                className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
                aria-label="Global"
              >
                <div className="flex items-center flex-1">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                      <span className="sr-only">Workflow</span>
                      <img
                        className="h-8 w-auto sm:h-10"
                        src="/assets/images/icons.png"
                        alt=""
                      />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <button
                        type="button"
                        className="ml-auto mr-4 inline-flex items-center justify-center hover:text-slate-600 lg:hidden text-slate-400"
                      >
                        <span className="sr-only">Search</span>
                        <svg
                          width="24"
                          height="24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="m19 19-3.5-3.5"></path>
                          <circle cx="11" cy="11" r="6"></circle>
                        </svg>
                      </button>
                      <Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="hidden space-x-8 md:flex md:ml-10">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-base font-medium text-white hover:text-gray-300"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="hidden md:flex md:items-center md:space-x-2 lg:space-x-12">
                  <Combobox
                    as="div"
                    value={selectedPerson}
                    onChange={setSelectedPerson}
                  >
                    <div className="relative mt-1">
                      <Combobox.Input
                        className="w-full lg:w-[28rem] xl:w-[40rem] rounded-full  border border-indigo-500 bg-transparent text-white py-2 pl-6 pr-12 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                        onChange={(event) => setQuery(event.target.value)}
                        displayValue={(person) => person?.name}
                        placeholder="Search items, collections and accounts"
                      />
                      <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-4 focus:outline-none">
                        <SearchIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </Combobox.Button>

                      {filteredPeople.length > 0 && (
                        <Combobox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {filteredPeople.map((person) => (
                            <Combobox.Option
                              key={person.id}
                              value={person}
                              className={({ active }) =>
                                classNames(
                                  "relative cursor-default select-none py-2 pl-3 pr-9",
                                  active
                                    ? "bg-indigo-600 text-white"
                                    : "text-gray-900"
                                )
                              }
                            >
                              {({ active, selected }) => (
                                <>
                                  <div className="flex items-center">
                                    <img
                                      src={person.imageUrl}
                                      alt=""
                                      className="h-6 w-6 flex-shrink-0 rounded-full"
                                    />
                                    <span
                                      className={classNames(
                                        "ml-3 truncate",
                                        selected && "font-semibold"
                                      )}
                                    >
                                      {person.name}
                                    </span>
                                  </div>

                                  {selected && (
                                    <span
                                      className={classNames(
                                        "absolute inset-y-0 right-0 flex items-center pr-4",
                                        active
                                          ? "text-white"
                                          : "text-indigo-600"
                                      )}
                                    >
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  )}
                                </>
                              )}
                            </Combobox.Option>
                          ))}
                        </Combobox.Options>
                      )}
                    </div>
                  </Combobox>
                  <div
                    onClick={() => setOpenAuthModal(true)}
                    className="cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-[#3D00B7] hover:bg-[#3d00b7a1]"
                  >
                    Sign in Account
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
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div className="mt-6 px-5">
                      <Link href="/auth/login">
                        <div className="cursor-pointer block text-center w-full py-3 px-4 rounded-lg shadow bg-[#3D00B7] hover:bg-[#3d00b7a1] text-white font-medium">
                          Sign in Account
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <main>
            <div className="overflow-hidden sm:pt-12 lg:relative lg:py-36 xl:py-40">
              <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-1 lg:gap-24">
                <div className="mt-20 sm:mt-0">
                  <div className="sm:max-w-xl">
                    <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
                      DISCOVER, AND COLLECT POKEMON NFTS
                    </h1>
                    <p className="mt-6 text-xl text-slate-300">
                      Digital Marketplace NFT Pokemon collections. Buy, sell,
                      battle, and discover exclusive digital assets
                    </p>
                  </div>
                  <div className="mt-12 sm:max-w-lg sm:w-full sm:flex">
                    <div className="mt-4 sm:mt-0">
                      <button
                        type="submit"
                        className="block w-full rounded-full border border-transparent px-5 py-3 bg-[#3D00B7] hover:bg-[#3d00b7a1] text-base font-medium text-white shadow focus:outline-none  sm:px-10"
                      >
                        Explore Now
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="inline-flex items-center divide-x divide-gray-300">
                      <div className="flex-shrink-0 flex pr-5">
                        <StarIcon
                          className="h-5 w-5 text-yellow-400"
                          aria-hidden="true"
                        />
                        <StarIcon
                          className="h-5 w-5 text-yellow-400"
                          aria-hidden="true"
                        />
                        <StarIcon
                          className="h-5 w-5 text-yellow-400"
                          aria-hidden="true"
                        />
                        <StarIcon
                          className="h-5 w-5 text-yellow-400"
                          aria-hidden="true"
                        />
                        <StarIcon
                          className="h-5 w-5 text-yellow-400"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="min-w-0 flex-1 pl-5 py-1 text-sm text-gray-500 sm:py-3">
                        <span className="font-medium text-white">
                          Rated 5 stars
                        </span>{" "}
                        by over{" "}
                        <span className="font-medium text-rose-500">
                          500 beta users
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
                <div className="py-12 px-4 pl-4 sm:pl-0 sm:px-0 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-20 lg:w-1/3">
                  <div
                    className="rounded-3xl bg-gradient-to-r from-[#73E0A9] to-[#5B68DF] "
                    style={{ padding: "1.3px" }}
                  >
                    <div className="px-8 py-5 sm:px-6 rounded-3xl shadow-md bg-gray-900">
                      <div
                        className="rounded-3xl shadow-md  bg-gradient-to-r from-[#73E0A9] to-[#5B68DF] "
                        style={{ padding: "1.3px" }}
                      >
                        <div className="px-8 py-8 sm:px-6 rounded-3xl shadow-md bg-gray-800 relative">
                          <div className="flex items-center justify-center">
                            <img
                              className="w-40 object-cover h-full -mt-10"
                              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
                              alt=""
                            />
                          </div>
                          <div className="w-full mt-3 flex items-center justify-center absolute">
                            <div
                              style={{ padding: "1.3px" }}
                              className="bg-gradient-to-r mr-12 from-[#73E0A9] to-[#5B68DF] rounded-full "
                            >
                              <img
                                className="w-10 h-10  rounded-full"
                                src="/assets/images/profile.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-7">
                        <div className="flex items-center justify-center">
                          <div className="flex-col">
                            <div className="flex items-center justify-center">
                              <span className="text-white text-lg font-medium">
                                ZombieClub Token
                              </span>
                              <img
                                src="/assets/images/verified-user.png"
                                className="w-5 h-5 ml-2"
                                alt=""
                              />
                            </div>
                            <div className="flex items-center justify-center space-x-2">
                              <span className="text-white text-md font-medium">
                                Created by
                              </span>
                              <div className="text-transparent font-medium text-md bg-clip-text bg-gradient-to-r from-[#73E0A9] to-[#5B68DF]">
                                ZombieLab
                              </div>
                            </div>
                            <div className="mt-3">
                              <span className="text-white text-sm ">
                                Zombie Lab is a collection of 10,000 animated
                                NFTs. Each NFT is unique and resides on the
                                Ethereum blockchain. Your Zombie Lab Club NFT
                                will double as your club membership.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature section with grid */}
            <div className="relative bg-white py-16 sm:py-24 lg:py-32">
              <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                  THE AMAZING POKEMON NFT
                </p>
                <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                  Buy, sell, and trade your favorite Pokemon NFTs. All NFTs are
                </p>
                <div className="mt-12">
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => (
                      <div key={feature.name} className="pt-6">
                        <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                          <div className="-mt-6">
                            <div>
                              <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                                <feature.icon
                                  className="h-6 w-6 text-white"
                                  aria-hidden="true"
                                />
                              </span>
                            </div>
                            <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                              {feature.name}
                            </h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Hot Auctions */}
            <div className="relative  py-16 sm:py-24 lg:py-32">
              <div className="relative">
                <div className="cursor-pointer flex items-center justify-between text-left mx-auto max-w-md px-4 sm:max-w-4xl sm:px-6 lg:px-8 lg:max-w-7xl">
                  <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                    Hot Auctions
                  </p>
                  <p className="flex items-center text-lg font-medium text-white tracking-tight">
                    View All <ArrowRightIcon className="ml-4 w-5 h-5" />
                  </p>
                </div>
                <div className="mt-12 mx-auto max-w-md px-4 grid gap-4 sm:max-w-4xl sm:px-6 lg:px-8 sm:grid-cols-2  md:max-w-5xl md:grid-cols-3 lg:grid-cols-4 lg:max-w-7xl">
                  {new Array(4).fill(0).map((_, i) => (
                    <div
                      className="rounded-3xl bg-gradient-to-r from-[#73E0A9] to-[#5B68DF] "
                      style={{ padding: "1.3px" }}
                      key={i}
                    >
                      <div className="px-8 py-5 sm:px-6 rounded-3xl shadow-md bg-gray-900">
                        <div
                          className="rounded-3xl shadow-md  bg-gradient-to-r from-[#73E0A9] to-[#5B68DF] "
                          style={{ padding: "1.3px" }}
                        >
                          <div className="px-8 py-8 sm:px-6 rounded-3xl shadow-md bg-gray-800 relative">
                            <div className="flex items-center justify-center">
                              <img
                                className="w-40 object-cover h-full -mt-10"
                                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
                                alt=""
                              />
                            </div>
                            <div className="w-full mt-3 flex items-center justify-center absolute">
                              <div
                                style={{ padding: "1.3px" }}
                                className="bg-gradient-to-r mr-12 from-[#73E0A9] to-[#5B68DF] rounded-full "
                              >
                                <img
                                  className="w-10 h-10  rounded-full"
                                  src="/assets/images/profile.png"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-7">
                          <div className="flex items-center justify-center">
                            <div className="flex-col w-full">
                              <div className="flex items-center justify-center">
                                <div className="text-transparent font-medium text-md bg-clip-text bg-gradient-to-r from-[#73E0A9] to-[#5B68DF]">
                                  ZombieLab
                                </div>
                                <img
                                  src="/assets/images/verified-user.png"
                                  className="w-5 h-5 ml-2"
                                  alt=""
                                />
                              </div>
                              <div className="relative mt-2">
                                <div
                                  className="absolute inset-0 flex items-center"
                                  aria-hidden="true"
                                >
                                  <div className="w-full border-t border-[#5B68DF]" />
                                </div>
                              </div>
                              <div className="flex items-center justify-between space-x-2 w-full">
                                <span className="text-white text-md font-medium mt-2">
                                  Bulbasaur
                                </span>
                                <div className="mt-2 text-transparent font-medium text-md bg-clip-text bg-gradient-to-r from-[#73E0A9] to-[#5B68DF]">
                                  $30
                                </div>
                              </div>
                              <div className="mt-3">
                                <div className="flex items-center justify-between">
                                  <p className="text-green-600 font-medium text-sm">
                                    Ends in 01.34.45
                                  </p>
                                  <div className="flex items-center justify-center space-x-2 cursor-pointer w-max rounded-full border border-transparent px-8  py-1 bg-gradient-to-r from-[#511d82] to-[#275a9c] text-base font-medium text-white shadow focus:outline-none  sm:px-10">
                                    Bid
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Discover NFTS */}
            <div className="relative  py-16 sm:py-24 lg:py-32">
              <div className="relative">
                <div className="flex flex-col lg:flex-row items-center justify-between text-left mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                  <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                    Discover More Pokemon NFTS
                  </p>
                  <div className="flex items-center space-x-6 md:space-x-12 mt-8 lg:mt-0">
                    <div className="flex items-center space-x-2 text-white cursor-pointer">
                      <AdjustmentsIcon className="w-5 h-5" />
                      <span>Category</span>
                    </div>
                    <div className="hidden sm:flex items-center space-x-2 text-white cursor-pointer">
                      <span>Cheapest</span>
                      <ChevronDownIcon className="w-5 h-5" />
                    </div>
                    <div className="hidden sm:flex items-center space-x-2 text-white cursor-pointer">
                      <span>Newest</span>
                      <ChevronDownIcon className="w-5 h-5" />
                    </div>
                    <div className="flex items-center space-x-2 cursor-pointer w-full rounded-full border border-transparent px-8  py-1 bg-gradient-to-r from-[#9B51E0] to-[#3081ED] text-base font-medium text-white shadow focus:outline-none  sm:px-10">
                      <FilterIcon className="w-5 h-5" />
                      <span className="">Filter</span>
                    </div>
                  </div>
                </div>
                <div className="mt-12 mx-auto max-w-md px-4 grid gap-4 sm:max-w-4xl sm:px-6 lg:px-8 sm:grid-cols-2  md:max-w-5xl md:grid-cols-3 lg:grid-cols-4 lg:max-w-7xl">
                  {new Array(8).fill(0).map((_, i) => (
                    <div
                      className="rounded-3xl bg-gradient-to-r from-[#73E0A9] to-[#5B68DF] "
                      style={{ padding: "1.3px" }}
                      key={i}
                    >
                      <div className="px-8 py-5 sm:px-6 rounded-3xl shadow-md bg-gray-900">
                        <div
                          className="rounded-3xl shadow-md  bg-gradient-to-r from-[#73E0A9] to-[#5B68DF] "
                          style={{ padding: "1.3px" }}
                        >
                          <div className="px-8 py-8 sm:px-6 rounded-3xl shadow-md bg-gray-800 relative">
                            <div className="flex items-center justify-center">
                              <img
                                className="w-40 object-cover h-full -mt-10"
                                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
                                alt=""
                              />
                            </div>
                            <div className="w-full mt-3 flex items-center justify-center absolute">
                              <div
                                style={{ padding: "1.3px" }}
                                className="bg-gradient-to-r mr-12 from-[#73E0A9] to-[#5B68DF] rounded-full "
                              >
                                <img
                                  className="w-10 h-10  rounded-full"
                                  src="/assets/images/profile.png"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-7">
                          <div className="flex items-center justify-center">
                            <div className="flex-col w-full">
                              <div className="flex items-center justify-center">
                                <div className="text-transparent font-medium text-md bg-clip-text bg-gradient-to-r from-[#73E0A9] to-[#5B68DF]">
                                  ZombieLab
                                </div>
                                <img
                                  src="/assets/images/verified-user.png"
                                  className="w-5 h-5 ml-2"
                                  alt=""
                                />
                              </div>
                              <div className="relative mt-2">
                                <div
                                  className="absolute inset-0 flex items-center"
                                  aria-hidden="true"
                                >
                                  <div className="w-full border-t border-[#5B68DF]" />
                                </div>
                              </div>
                              <div className="flex items-center justify-between space-x-2 w-full">
                                <span className="text-white text-md font-medium mt-2">
                                  Bulbasaur
                                </span>
                                <div className="mt-2 text-transparent font-medium text-md bg-clip-text bg-gradient-to-r from-[#73E0A9] to-[#5B68DF]">
                                  $30
                                </div>
                              </div>
                              <div className="mt-3">
                                <div className="flex items-center justify-center space-x-2 cursor-pointer w-full rounded-full border border-transparent px-8  py-1 bg-gradient-to-r from-[#511d82] to-[#275a9c] text-base font-medium text-white shadow focus:outline-none  sm:px-10">
                                  Buy now
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="w-full mt-20 flex items-center justify-center">
                  <div
                    style={{ padding: "1.3px" }}
                    className="flex items-center justify-center space-x-2 cursor-pointer w-max rounded-full border border-transparent  bg-gradient-to-r from-[#511d82] to-[#275a9c] text-base font-medium text-white shadow focus:outline-none"
                  >
                    <div className="flex items-center justify-center space-x-2 cursor-pointer w-max rounded-full border border-transparent px-8  py-1 bg-gray-900 hover:bg-gray-800 text-base font-medium text-white shadow focus:outline-none  sm:px-10">
                      Load More
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <footer className="bg-gray-900" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
              Footer
            </h2>
            <div className="max-w-md mx-auto pt-12 px-4 sm:max-w-7xl sm:px-6 lg:pt-16 lg:px-8">
              <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                <div className="space-y-8 xl:col-span-1">
                  <img
                    className="h-10"
                    src="/assets/images/icons.png"
                    alt="Company name"
                  />
                  <p className="text-gray-500 text-base">
                    Making the world NFT Game a better to free to play.
                  </p>
                  <div className="flex space-x-6">
                    {footerNavigation.social.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">{item.name}</span>
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                  <div className="md:grid md:grid-cols-2 md:gap-8">
                    <div>
                      <div className="text-transparent font-medium text-md bg-clip-text bg-gradient-to-r from-[#73E0A9] to-[#5B68DF]">
                        Marketplace
                      </div>
                      <ul role="list" className="mt-4 space-y-4">
                        {footerNavigation.marketplace.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className="text-base text-gray-500 hover:text-gray-900"
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-12 md:mt-0">
                      <div className="text-transparent font-medium text-md bg-clip-text bg-gradient-to-r from-[#73E0A9] to-[#5B68DF]">
                        Stats
                      </div>
                      <ul role="list" className="mt-4 space-y-4">
                        {footerNavigation.stats.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className="text-base text-gray-500 hover:text-gray-900"
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="md:grid md:grid-cols-2 md:gap-8">
                    <div>
                      <div className="text-transparent font-medium text-md bg-clip-text bg-gradient-to-r from-[#73E0A9] to-[#5B68DF]">
                        Resources
                      </div>
                      <ul role="list" className="mt-4 space-y-4">
                        {footerNavigation.resources.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className="text-base text-gray-500 hover:text-gray-900"
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 border-t border-gray-200 py-8">
                <p className="text-base text-white xl:text-center">
                  &copy; 2022 Pokechain, Inc. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <LoginModal setOpen={setOpenAuthModal} open={openAuthModal} />
    </>
  );
}
