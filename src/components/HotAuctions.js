/* eslint-disable @next/next/no-img-element */
import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import bgProfile from "@/dist/profile.png";
import bgVerifiedUser from "@/dist/verified-user.png";
import Image from "next/image";
const HotAuctions = () => {
  return (
    <div>
      <div
        className="relative  py-16 sm:py-24 lg:py-32 bg-gray-900"
        data-aos="fade-up"
      >
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
                          className="bg-gradient-to-r mr-12 from-[#73E0A9] to-[#5B68DF] rounded-full w-10 h-10"
                        >
                          <div className="-mt-[1px]">
                            <Image
                              src={bgProfile}
                              alt="profile"
                              blurDataURL={bgProfile}
                              placeholder="blur"
                              objectFit="cover"
                              width={40}
                              height={40}
                              style={{ borderRadius: "100%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-7">
                    <div className="flex items-center justify-center">
                      <div className="flex-col w-full">
                        <div className="flex items-center justify-center">
                          <div className="mr-2 text-transparent font-medium text-md bg-clip-text bg-gradient-to-r from-[#73E0A9] to-[#5B68DF]">
                            ZombieLab
                          </div>
                          <Image
                            src={bgVerifiedUser}
                            alt="profile"
                            blurDataURL={bgVerifiedUser}
                            objectFit="cover"
                            width={20}
                            height={20}
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
    </div>
  );
};

export default HotAuctions;
