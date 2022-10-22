/* eslint-disable @next/next/no-img-element */
import React from "react";

const OverallStats = () => {
  return (
    <div>
      <div
        className="relative py-16 sm:py-24 lg:py-16 bg-gray-900"
        data-aos="fade-left"
      >
        <div className="relative">
          <div className="flex flex-col lg:flex-row items-center justify-between text-left mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Overall stats
            </p>
          </div>
          <div className="mt-12 mx-auto max-w-xs flex flex-col space-y-4 sm:space-y-0 items-center px-4 sm:grid gap-4 sm:max-w-lg sm:px-8 lg:px-8 sm:grid-cols-2 md:max-w-3xl md:grid-cols-3 lg:grid-cols-4 lg:max-w-7xl">
            <div
              className="px-8 py-5 sm:px-6 rounded-3xl shadow-md bg-slate-800 relative w-56"
              data-aos="flip-left"
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
                  Total Pokemon
                </span>
              </div>
              <div className="mt-2">
                <span className="text-xl font-extrabold text-white">100</span>
              </div>
            </div>
            <div
              className="px-8 py-5 sm:px-6 rounded-3xl shadow-md bg-slate-800 relative w-56"
              data-aos="flip-left"
              data-aos-duration="600"
            >
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
                <span className="text-xl font-extrabold text-white">100</span>
              </div>
            </div>
            <div
              className="px-8 py-5 sm:px-6 rounded-3xl shadow-md bg-slate-800 relative w-56"
              data-aos="flip-left"
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
                  Total Volume
                </span>
              </div>
              <div className="mt-2">
                <span className="text-xl font-extrabold text-white">
                  1,890,382
                </span>
              </div>
            </div>
            <div
              className="px-8 py-5 sm:px-6 rounded-3xl shadow-md bg-slate-800 relative w-56"
              data-aos="flip-left"
              data-aos-duration="1200"
            >
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
    </div>
  );
};

export default OverallStats;
