/* eslint-disable @next/next/inline-script-id */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Head from "next/head";
import LoginModal from "@/components/AuthPages/Login";
import Navbar from "@/components/Navbar";
import Discover from "@/components/Discover";
import WhyPokechain from "@/components/WhyPokechain";
import FeaturePokechain from "@/components/FeaturePokechain";
import WeeksInPokechain from "@/components/WeeksInPokechain";
import OverallStats from "@/components/OverallStats";
import HotAuctions from "@/components/HotAuctions";
import lightGreen from "@/dist/light-green.png";
import lightBlue from "@/dist/light-blue.png";

export default function Home() {
  const [openAuthModal, setOpenAuthModal] = useState(false);
  return (
    <>
      <div
        className="bg-gray-900"
        style={{
          backgroundImage:
            `url('${lightGreen.src}'), url('${lightBlue.src}')`,
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
          <Navbar/>
          <main>
            {/* Discover main */}
            <Discover setOpenAuthModal={setOpenAuthModal}/>
            {/* Why pokechain */}
            <WhyPokechain/>
            {/* Feature Pokechain */}
            <FeaturePokechain/>
            {/* Weeks in pokechain */}
            <WeeksInPokechain/>
            {/* Overall stats */}
            <OverallStats/>
            {/* Hot Auctions */}
            <HotAuctions/>
          </main>
        </div>
      </div>
      <LoginModal setOpen={setOpenAuthModal} open={openAuthModal} />
    </>
  );
}
