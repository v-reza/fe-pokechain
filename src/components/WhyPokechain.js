/* eslint-disable @next/next/no-img-element */
import React from "react";
import bgFourPokemon from "@/dist/four-pokemon.png";
import bgBoard from "@/dist/bg-board.png";
import bgPokeball from "@/dist/pokeball.png";
import Image from "next/image";
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
const WhyPokechain = () => {
  return (
    <div>
      <div
        className="relative py-16 sm:py-24 lg:py-16"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="1000"
      >
        <div className="mx-auto max-w-md px-4 padding-under340 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <span className="text-transparent font-extrabold tracking-tight text-5xl bg-clip-text bg-gradient-to-r from-[#73E0A9] to-[#5B68DF]">
            Why Pokechain?
          </span>
          <div className="mt-32 flex sm:items-center sm:justify-between flex-col xl:flex-row">
            <div className="w-auto h-auto">
              <Image
                src={bgFourPokemon}
                alt="four pokemon"
                blurDataURL={bgFourPokemon}
                placeholder="blur"
              />
            </div>
            <div
              className="w-[50rem] h-[50rem] mr-1 flex sm:ml-80 md:ml-52 lg:ml-10 xl:ml-28 bg-[length:38%_80%] image-under340 sm:bg-[length:60%_100%] md:bg-[length:80%_100%] lg:bg-[length:100%_100%]"
              style={{
                backgroundImage: `url('${bgBoard.src}')`,
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
                    Free to play to earn Pokechain tokens by playing the game.
                  </span>
                  <div className="w-full lg:mt-2">
                    <div className="flex flex-col items-start justify-start p-4">
                      <div className="flow-root">
                        <ul role="list" className="-mb-8">
                          {whyPokechainList.map((item, itemIdx) => (
                            <li key={item.id}>
                              <div className="relative pb-2 sm:pb-16 ">
                                {itemIdx !== whyPokechainList.length - 1 ? (
                                  <span
                                    className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-white"
                                    aria-hidden="true"
                                  />
                                ) : null}
                                <div className="relative flex items-start space-x-3">
                                  <div className="relative">
                                    <Image
                                      src={bgPokeball}
                                      alt="pokeball"
                                      blurDataURL={bgPokeball}
                                      placeholder="blur"
                                      objectFit="cover"
                                      width={40}
                                      height={40}
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
    </div>
  );
};

export default WhyPokechain;
