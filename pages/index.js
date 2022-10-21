/* eslint-disable @next/next/inline-script-id */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { StarIcon, ArrowRightIcon } from "@heroicons/react/solid";
import { navigation, features } from "@/utils/navigation";
import Head from "next/head";
import LoginModal from "@/components/AuthPages/Login";
import Link from "next/link";
const whyPokechainList = [
  {
    id: 1,
    description: "Buy, sell, battle, and trade your favorite Pokemon.",
  },
  {
    id: 2,
    description: "Stake NFT Pokechain to earn & redeem in-game rewards",
  },
  {
    id: 3,
    description: "Trade game items with other players",
  },
];
export default function Home() {
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const router = useRouter();
  return (
    <>
      <div
        className="bg-gray-900"
        style={{
          backgroundImage:
            "url('/assets/images/light-green.png'), url('/assets/images/light-blue.png')",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "color",
          backgroundSize: "100% 100%",
          backgroundPosition: "top left, bottom right",
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
          <Popover as="header" className="relative z-20">
            <div className="pt-6 pb-4">
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
                      <span className="font-medium text-white">
                        Marketplace
                      </span>
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
          <main>
            <div className="overflow-hidden sm:pt-12 lg:relative lg:py-20" data-aos="fade-up" data-aos-duration="1000">
              <div
                className="mx-auto mt-8 sm:mt-0 sm:px-6 w-full flex items-center justify-center bg-[length: 100%_100%] sm:rounded-[5rem] rounded-b-3xl  shadow-xl"
                style={{
                  backgroundImage: "url('/assets/images/bg-pokemon.png')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: "0.8",
                }}
              >
                <div className="mt-20 sm:mt-0 py-56 w-full flex flex-col items-center justify-center">
                  <div className="">
                    <h1 className="text-transparent font-extrabold tracking-tight text-3xl px-4 sm:px-0 bg-clip-text bg-gradient-to-r from-[#31e38a] to-[#bff806] sm:text-5xl">
                      DISCOVER, AND COLLECT POKEMON NFTS
                    </h1>
                    <p className="mt-6 text-xl px-4 sm:px-0 text-transparent font-extrabold tracking-tight bg-clip-text bg-gradient-to-r from-[#f20256] to-[#ffffff]">
                      Digital Marketplace NFT Pokemon collections. Buy, sell,
                      battle, and discover exclusive digital assets
                    </p>
                  </div>
                  <div className="mt-12 sm:max-w-lg sm:w-full sm:flex items-center justify-center">
                    <div className="mt-4 sm:mt-0">
                      {/* Desktop Breakpoints */}
                      <button
                        type="button"
                        onClick={() => setOpenAuthModal(true)}
                        className="hidden sm:block w-full rounded-full border border-transparent px-5 py-3 bg-[#3D00B7] hover:bg-[#7e43f4] text-base font-medium text-white shadow focus:outline-none  sm:px-16"
                      >
                        Play Now
                      </button>
                      {/* Mobile Breakpoints */}
                      <Link href="/auth/login">
                        <button
                          type="button"
                          className="block sm:hidden w-full rounded-full border border-transparent px-28 py-3 bg-[#3D00B7] hover:bg-[#3d00b7a1] text-base font-medium text-white shadow focus:outline-none  sm:px-16"
                        >
                          Play Now
                        </button>
                      </Link>
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
            </div>
            {/* Why pokechain */}
            <div className="relative py-16 sm:py-24 lg:py-16" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
              <div className="mx-auto max-w-md px-4 padding-under340 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <span className="text-transparent font-extrabold tracking-tight text-5xl bg-clip-text bg-gradient-to-r from-[#73E0A9] to-[#5B68DF]">
                  Why Pokechain?
                </span>
                <div className="mt-32 flex sm:items-center sm:justify-between flex-col xl:flex-row">
                  <img
                    className="w-auto h-auto"
                    alt=""
                    src="/assets/images/four-pokemon.png"
                  />

                  <div
                    className="w-[50rem] h-[50rem] mr-1 flex sm:ml-80 md:ml-52 lg:ml-10 xl:ml-28 bg-[length:38%_80%] image-under340 sm:bg-[length:60%_100%] md:bg-[length:80%_100%] lg:bg-[length:100%_100%]"
                    style={{
                      backgroundImage: "url('/assets/images/bg-board.png')",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="width-under340 w-[19rem] sm:w-[30rem] md:w-[42rem] lg:w-full">
                      <div className="flex mt-5 sm:mt-6 margin-under340 lg:mt-7 items-center justify-center">
                        <span className="text-lg sm:text-3xl lg:text-4xl font-extrabold text-white">
                          PLAY TO EARN
                        </span>
                      </div>

                      <div className="px-12 py-14 sm:p-16 md:px-20 md:py-10 md:mt-2 flex flex-col">
                        <span className="flex items-center justify-center text-white text-lg sm:text-2xl lg:text-3xl text-transparent font-extrabold tracking-tight  bg-clip-text bg-gradient-to-r from-[#b73091] to-[#5B68DF]">
                          Free to play to earn Pokechain tokens by playing the
                          game.
                        </span>
                        <div className="w-full lg:mt-2">
                          <div className="flex flex-col items-start justify-start p-4">
                            <div className="flow-root">
                              <ul role="list" className="-mb-8">
                                {whyPokechainList.map((item, itemIdx) => (
                                  <li key={item.id}>
                                    <div className="relative pb-2 sm:pb-16 ">
                                      {itemIdx !==
                                      whyPokechainList.length - 1 ? (
                                        <span
                                          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-white"
                                          aria-hidden="true"
                                        />
                                      ) : null}
                                      <div className="relative flex items-start space-x-3">
                                        <div className="relative">
                                          <img
                                            className="w-10 h-10 object-cover rounded-full"
                                            src="/assets/images/pokeball.png"
                                            alt=""
                                          />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                          <div>
                                            <div className="text-md sm:text-3xl text-left lg:ml-2">
                                              <div className="font-medium text-[#BB5A01]">
                                                {item.description}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
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

            {/* Weeks in pokechain */}
            <div className="relative py-16 sm:py-12 lg:py-32 bg-gray-900" data-aos="fade-right">
              <div className="relative ">
                <div className="cursor-pointer flex flex-col space-y-8 xl:flex-row xl:space-y-0 items-center lg:items-start xl:items-center xl:justify-between text-lef mx-auto max-w-md px-4 sm:max-w-4xl sm:px-6 lg:px-8 lg:max-w-7xl">
                  <div className="flex-col flex justify-center  items-center  lg:items-start lg:justify-start lg:text-left">
                    <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                      This week in pokechain
                    </p>
                    <p className="text-md font-medium text-slate-500 text-center xl:text-left">
                      General stats from the past 1 weeks in the pokechain
                      universe.
                    </p>
                  </div>
                  <div className="max-w-md space-y-8 sm:space-y-0 grid gap-4 sm:max-w-4xl  xl:px-8 sm:grid-cols-2 md:max-w-5xl md:grid-cols-3 lg:grid-cols-3 lg:max-w-7xl">
                    <div className="px-8 py-5 sm:px-6 rounded-3xl shadow-md bg-slate-800 relative w-56" data-aos="flip-right" data-aos-duration="300">
                      <div className="absolute top-0 left-0 -mt-4 ml-4">
                        <img
                          className="w-10 h-10 object-cover rounded-full"
                          alt=""
                          src="/assets/images/pokeball.png"
                        />
                      </div>
                      <div className="mt-4">
                        <span className="text-md font-extrabold text-slate-400">
                          New Pokemon
                        </span>
                      </div>
                      <div className="mt-2">
                        <span className="text-xl font-extrabold text-white">
                          15,669
                        </span>
                      </div>
                    </div>
                    <div className="px-8 py-5 sm:px-6 rounded-3xl shadow-md bg-slate-800 relative w-56" data-aos="flip-right" data-aos-duration="600">
                      <div className="absolute top-0 left-0 -mt-4 ml-4">
                        <img
                          className="w-10 h-10 object-cover rounded-full"
                          alt=""
                          src="/assets/images/battles-stats.png"
                        />
                      </div>
                      <div className="mt-4">
                        <span className="text-md font-extrabold text-slate-400">
                          Origins Battle
                        </span>
                      </div>
                      <div className="mt-2">
                        <span className="text-xl font-extrabold text-white">
                          3,120,908
                        </span>
                      </div>
                    </div>
                    <div className="px-8 py-5 sm:px-6 rounded-3xl shadow-md bg-slate-800 relative w-56" data-aos="flip-right" data-aos-duration="900">
                      <div className="absolute top-0 left-0 -mt-4 ml-4">
                        <img
                          className="w-10 h-10 object-cover rounded-full"
                          alt=""
                          src="/assets/images/sales-stats.png"
                        />
                      </div>
                      <div className="mt-4">
                        <span className="text-md font-extrabold text-slate-400">
                          Sales Volume
                        </span>
                      </div>
                      <div className="mt-2">
                        <span className="text-xl font-extrabold text-white">
                          $669
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Overall stats */}
            <div className="relative py-16 sm:py-24 lg:py-16 bg-gray-900" data-aos="fade-left">
              <div className="relative">
                <div className="flex flex-col lg:flex-row items-center justify-between text-left mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                  <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                    Overall stats
                  </p>
                </div>
                <div className="mt-12 mx-auto max-w-xs flex flex-col space-y-4 sm:space-y-0 items-center px-4 sm:grid gap-4 sm:max-w-lg sm:px-8 lg:px-8 sm:grid-cols-2 md:max-w-3xl md:grid-cols-3 lg:grid-cols-4 lg:max-w-7xl">
                  <div className="px-8 py-5 sm:px-6 rounded-3xl shadow-md bg-slate-800 relative w-56" data-aos="flip-left" data-aos-duration="300">
                    <div className="absolute top-0 left-0 -mt-4 ml-4">
                      <img
                        className="w-10 h-10 object-cover rounded-full"
                        alt=""
                        src="/assets/images/pokeball.png"
                      />
                    </div>
                    <div className="mt-4">
                      <span className="text-md font-extrabold text-slate-400">
                        Total Pokemon
                      </span>
                    </div>
                    <div className="mt-2">
                      <span className="text-xl font-extrabold text-white">
                        100
                      </span>
                    </div>
                  </div>
                  <div className="px-8 py-5 sm:px-6 rounded-3xl shadow-md bg-slate-800 relative w-56" data-aos="flip-left" data-aos-duration="600">
                    <div className="absolute top-0 left-0 -mt-4 ml-4">
                      <img
                        className="w-10 h-10 object-cover rounded-full"
                        alt=""
                        src="/assets/images/stats-owners.png"
                      />
                    </div>
                    <div className="mt-4">
                      <span className="text-md font-extrabold text-slate-400">
                        Total Owners
                      </span>
                    </div>
                    <div className="mt-2">
                      <span className="text-xl font-extrabold text-white">
                        100
                      </span>
                    </div>
                  </div>
                  <div className="px-8 py-5 sm:px-6 rounded-3xl shadow-md bg-slate-800 relative w-56" data-aos="flip-left" data-aos-duration="900">
                    <div className="absolute top-0 left-0 -mt-4 ml-4">
                      <img
                        className="w-10 h-10 object-cover rounded-full"
                        alt=""
                        src="/assets/images/sales-stats.png"
                      />
                    </div>
                    <div className="mt-4">
                      <span className="text-md font-extrabold text-slate-400">
                        Total Volume
                      </span>
                    </div>
                    <div className="mt-2">
                      <span className="text-xl font-extrabold text-white">
                        1,890,382
                      </span>
                    </div>
                  </div>
                  <div className="px-8 py-5 sm:px-6 rounded-3xl shadow-md bg-slate-800 relative w-56" data-aos="flip-left" data-aos-duration="1200">
                    <div className="absolute top-0 left-0 -mt-4 ml-4">
                      <img
                        className="w-10 h-10 object-cover rounded-full"
                        alt=""
                        src="/assets/images/stats-transactions.png"
                      />
                    </div>
                    <div className="mt-4">
                      <span className="text-md font-extrabold text-slate-400">
                        Transactions
                      </span>
                    </div>
                    <div className="mt-2">
                      <span className="text-xl font-extrabold text-white">
                        1,890,382
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Hot Auctions */}
            <div className="relative  py-16 sm:py-24 lg:py-32 bg-gray-900" data-aos="fade-up">
              <div className="relative">
                <div className="cursor-pointer flex items-center justify-between text-left mx-auto max-w-md px-4 sm:max-w-4xl sm:px-6 lg:px-8 lg:max-w-7xl">
                  <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                    Hot Auctions
                  </p>
                  <p
                    className="flex items-center text-lg font-medium text-white tracking-tight"
                    onClick={() =>
                      window.open(
                        process.env.MARKETPLACE_URL + "/hot-auctions",
                        "_blank"
                      )
                    }
                  >
                    View All <ArrowRightIcon className="ml-4 w-5 h-5" />
                  </p>
                </div>
                <div className="mt-12 mx-auto max-w-md px-4 grid gap-4 sm:max-w-4xl sm:px-6 lg:px-8 sm:grid-cols-2  md:max-w-5xl md:grid-cols-3 lg:grid-cols-4 lg:max-w-7xl">
                  {new Array(4).fill(0).map((_, i) => (
                    <div
                      className="rounded-3xl bg-gradient-to-r from-[#73E0A9] to-[#5B68DF] "
                      style={{ padding: "1.3px" }}
                      key={i}
                      data-aos="zoom-in"
                      data-aos-duration={`${i * 300}`}
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
          </main>
        </div>
      </div>
      <LoginModal setOpen={setOpenAuthModal} open={openAuthModal} />
    </>
  );
}
