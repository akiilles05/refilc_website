"use client";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const Main = () => {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 1], [0, -100]);

  return (
    <div>
      <div className="flex flex-col xl:flex-row items-center justify-center gap-[120px]">
        <div className=" pt-[6rem] flex items-center justify-center">
          <motion.div style={{ y }}>
            <Image
              src="/mockup/tantargyak.svg"
              width={340}
              height={810}
              alt="mockup"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Main;
