import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Hero = () => (
  <div className="flex flex-col justify-center items-center text-center pt-64">
    {/* milliard */}
    <p className="flex bg-secondary font-medium rounded-[40px] py-2 px-4 leading-5 h-[45px] w-[276px] font-figtree items-center justify-center">
      40+ milliárd forintért nem sikerült
    </p>
    <h1 className="title w-[37.5rem] text-[#050B15] items-center flex flex-col">
      Kell egy jobb{" "}
      <div className="flex flex-row items-baseline">
        eKréta{" "}
        <Image
          src="./icon.svg"
          alt="icon"
          className=" rotate-12"
          width={30}
          height={30}
        />
      </div>
    </h1>
    <p className="text-center w-[36rem] font-medium text-[18px] font-figtree">
      A reFilc folytatja, amit a Filc Napló és a Szivacs Napló elkezdett: egy
      diákoknak elkészült eKréta kliens, ami szép és hasznos is.
    </p>
    <Button className="bg-[#3673EE] text-white mt-5 w-22 rounded-[22px]">
      Letöltés
    </Button>

    <div className="image_carousel pt-40">
      <Image src="/mockup/mockup1.svg" width={900} height={600} alt="mockup" />
    </div>
  </div>
);

export default Hero;
