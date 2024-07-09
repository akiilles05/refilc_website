"use client";

import { useRef } from "react";
import { motion, transform, useInView } from "framer-motion";
import Image from "next/image";

import { fadeIn } from "../variants";
const Orarend = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div>
      <div className="flex flex-col xl:flex-row items-center justify-center">
        <div className="pt-[6rem] flex items-center justify-center">
          <motion.div
            initial={{
              opacity: 0,
              transform: "translateX(-200px)",
            }}
            whileInView={{ opacity: 1, transform: "translateX(0)" }}
            transition={{ duration: 0.5, type: "tween" }}
            viewport={{ once: true }}
          >
            <Image
              src="/mockup/orarend.svg"
              width={375}
              height={810}
              alt="mockup"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, transform: "translateX(200px)" }}
          whileInView={{ opacity: 1, transform: "translateX(0)" }}
          transition={{ duration: 0.5, type: "fade" }}
          className=" xl:absolute gap-[10px] flex flex-col  w-25 ml-[60%]"
        >
          <Image
            src="/icon/container.svg"
            alt="bookmark"
            width={42}
            height={42}
            className="rounded-[12px]"
          />
          <h1 className="h1">Csodálatos órarend.</h1>
          <p className="font-figtree text-[18px] font-medium ">
            Elbűvölően személyre szabható órarendünktől a tanáraid is hátast
            dobnak. Lyukas, órák, számonkérések, szünetek, minden egy helyen, ha
            szeretnéd.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
export default Orarend;
