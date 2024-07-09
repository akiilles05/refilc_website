"use client";

import { useRef } from "react";
import { motion, transform, useInView } from "framer-motion";
import Image from "next/image";

import { fadeIn } from "../variants";
const Fuzet = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div>
      <div className="flex flex-col xl:flex-row items-center justify-center">
        <div className="pt-[6rem] flex items-center justify-center">
          <motion.div
            initial={{
              opacity: 0,
              transform: "translateX(200px)",
            }}
            whileInView={{ opacity: 1, transform: "translateX(0)" }}
            transition={{ duration: 0.5, type: "tween" }}
            viewport={{ once: true }}
          >
            <Image
              src="/mockup/fuzet.svg"
              width={375}
              height={810}
              alt="mockup"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, transform: "translateX(-200px)" }}
          whileInView={{ opacity: 1, transform: "translateX(0)" }}
          transition={{ duration: 0.5, type: "fade" }}
          className=" xl:absolute gap-[10px] flex flex-col  w-25 mr-[60%]"
        >
          <Image
            src="/icon/booklet.svg"
            alt="bookmark"
            width={42}
            height={42}
            className="rounded-[12px]"
          />
          <h1 className="h1">Titkos napló, vagy csak jegyzetfüzet?</h1>
          <p className="font-figtree text-[18px] font-medium ">
            A reFilc akár mindekettő is lehet. Nálunk a tantárgyaidhoz
            rendelheted a jegyzeteket, és fájlaidat. Hamarosan még tollal is
            írhatsz, és számítógépről is jegyzetelhetsz.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
export default Fuzet;
