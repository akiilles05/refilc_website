"use client";

import { useRef } from "react";
import { motion, transform, useInView } from "framer-motion";
import Image from "next/image";

import { fadeIn } from "../variants";
const Main = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div>
      <div className="flex flex-col xl:flex-row items-center justify-center gap-[120px]">
        <motion.div
          initial={{ opacity: 0, transform: "translateX(-200px)" }}
          whileInView={{ opacity: 1, transform: "translateX(0)" }}
          transition={{ duration: 0.5, type: "fade" }}
          className=" xl:absolute gap-[10px] flex flex-col  w-25 mr-[60%]"
        >
          <Image
            src="/icon/bookmark.svg"
            alt="bookmark"
            width={42}
            height={42}
            className="rounded-[12px]"
          />
          <h1 className="h1">A romló tendenciádat tízféle képpen láthatod</h1>
          <p className="font-figtree text-[18px] font-medium ">
            Annyi statisztikát kpasz, hogy a 8 általánosos matek nem lesz elég a
            kisilabizálására.
          </p>
        </motion.div>
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
              src="/mockup/tantargyak.svg"
              width={375}
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
