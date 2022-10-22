/* eslint-disable @next/next/no-img-element */
import React from "react";

const WeeksInPokechain = () => {
  return (
    <div>
      <div
        className="relative py-16 sm:py-12 lg:py-32 bg-gray-900"
        data-aos="fade-right"
      >
        <div className="relative ">
          <div className="cursor-pointer flex flex-col space-y-8 xl:flex-row xl:space-y-0 items-center lg:items-start xl:items-center xl:justify-between text-lef mx-auto max-w-md px-4 sm:max-w-4xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <div className="flex-col flex justify-center  items-center  lg:items-start lg:justify-start lg:text-left">
              <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                This week in pokechain
              </p>
              <p className="text-md font-medium text-slate-500 text-center xl:text-left">
                General stats from the past 1 weeks in the pokechain universe.
              </p>
            </div>
            <div className="max-w-md space-y-8 sm:space-y-0 grid gap-4 sm:max-w-4xl  xl:px-8 sm:grid-cols-2 md:max-w-5xl md:grid-cols-3 lg:grid-cols-3 lg:max-w-7xl">
              <div
                className="px-8 py-5 sm:px-6 rounded-3xl shadow-md bg-slate-800 relative w-56"
                data-aos="flip-right"
                data-aos-duration="300"
              >
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
              <div
                className="px-8 py-5 sm:px-6 rounded-3xl shadow-md bg-slate-800 relative w-56"
                data-aos="flip-right"
                data-aos-duration="600"
              >
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
              <div
                className="px-8 py-5 sm:px-6 rounded-3xl shadow-md bg-slate-800 relative w-56"
                data-aos="flip-right"
                data-aos-duration="900"
              >
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
    </div>
  );
};

export default WeeksInPokechain;
