import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Hero = () => (
  <div className="flex flex-col justify-center items-center text-center pt-64">
    {/* milliard */}
    <p className="bg-secondary font-medium rounded-full py-2 px-4 font-arial">
      40+ milliárd forintért nem sikerült
    </p>
    <h1 className="title w-1/2 items-center flex flex-col">
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
    <p className="text-center w-[29%]">
      A reFilc folytatja, amit a Filc Napló és a Szivacs Napló elkezdett: egy
      diákoknak elkészült eKréta kliens, ami szép és hasznos is.
    </p>
    <Button className="bg-[#3673EE] text-white mt-5 w-24">Letöltés</Button>
  </div>
);

export default Hero;
