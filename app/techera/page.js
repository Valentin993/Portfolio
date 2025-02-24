"use client";

import Image from "next/image";
import TechEra from "../image/TechEra.png";
import TechEra2 from "../image/TechEra2.png";
import TechEra3 from "../image/TechEra3.png";
import TechEra4 from "../image/TechEra4.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Techera() {
  return (
    <>
      <Header />
      <section className="py-[100px]">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: { delay: 0.5 },
              },
            }}
            className="text-7xl text-center lg:text-[128px] xl:text-start text-[#FFFFFF]/[.25] font-[AllertaStencil] "
          >
            <h2>TechEra</h2>
          </motion.div>

          <motion.div
            initial={{ y: 100, opasity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opasity: 0 }}
            transition={{ duration: 0.75 }}
            className="mt-[100px] flex justify-center"
          >
            <Image
              src={TechEra2}
              alt=""
              width="633"
              height="650"
              className="rounded-[20px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="mt-[100px] flex justify-evenly flex-wrap"
          >
            <Image
              src={TechEra}
              alt=""
              className="rounded-[20px] w-[324px] h-[452px] lg:w-[524px] lg:h-[752px]"
            />

            <Image
              src={TechEra3}
              alt=""
              className="rounded-[20px] w-[324px] h-[452px] lg:w-[524px] lg:h-[752px] w-[324px] h-[452px] lg:w-[524px] lg:h-[752px] mt-8 md:mt-0 lg:mt-8 xl:mt-0 "
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: 500 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="mt-[100px] flex justify-center"
          >
            <Image
              src={TechEra4}
              alt=""
              width="948"
              height="664"
              className="rounded-[20px]"
            />
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
