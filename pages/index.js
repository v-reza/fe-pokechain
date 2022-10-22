/* eslint-disable @next/next/inline-script-id */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useState } from "react";
import {  ArrowRightIcon } from "@heroicons/react/solid";
import { features } from "@/utils/navigation";
import Head from "next/head";
import LoginModal from "@/components/AuthPages/Login";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Discover from "@/components/Discover";
import WhyPokechain from "@/components/WhyPokechain";
import FeaturePokechain from "@/components/FeaturePokechain";
import WeeksInPokechain from "@/components/WeeksInPokechain";
import OverallStats from "@/components/OverallStats";
import HotAuctions from "@/components/HotAuctions";

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
