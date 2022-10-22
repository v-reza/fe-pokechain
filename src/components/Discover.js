import { StarIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import React from 'react'
import bgPokemon from "@/dist/bg-pokemon.png"

const Discover = ({ setOpenAuthModal }) => {
  return (
    <div>
        <div className="overflow-hidden lg:relative xl:pb-16" data-aos="fade-up" data-aos-duration="1000">
              <div
                className="mx-auto mt-4 sm:px-6 w-full flex items-center justify-center bg-[length: 100%_100%] sm:rounded-[5rem] rounded-b-3xl  shadow-xl"
                style={{
                  backgroundImage: `url('${bgPokemon.src}')`,
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
    </div>
  )
}

export default Discover