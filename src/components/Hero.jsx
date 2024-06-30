"use client";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const Hero = () => {
  const { scrollY } = useViewportScroll();
  const scale = useTransform(scrollY, [0, 500], [1, 0.4]);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    scrollY.onChange((value) => {
      if (value >= 900) {
        setShowText(true);
      } else {
        setShowText(false);
      }
    });
  }, [scrollY]);

  return (
    <div className="flex flex-col justify-center items-center text-center pt-[12rem]">
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

      <div className="flex flex-col xl:flex-row items-center justify-center gap-[120px]">
        <div className="image_carousel pt-[6rem] flex items-center justify-center">
          <motion.div style={{ scale }}>
            <Image
              src="/mockup/mockup2.svg"
              width={810}
              height={600}
              alt="mockup"
            />
          </motion.div>
        </div>
        {showText && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="gap-[10px] flex flex-col text-left w-25"
          >
            <Image
              src="/icon/home.svg"
              alt="home"
              width={42}
              height={42}
              className="rounded-[12px]"
            />
            <h1 className="h1">Ez a te kis otthonod</h1>
            <p className="font-figtree text-[18px] font-medium ">
              A nap nézetben mindent megtalálsz, amire szükséged van iskola
              előtt, közben, és után.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Hero;
