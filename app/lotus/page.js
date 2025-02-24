"use client";

import Image from "next/image";
import Lotus2 from "../image/Lotus2.png";
import Lotus3 from "../image/Lotus3.png";
import Lotus4 from "../image/Lotus4.png";
import Lotus5 from "../image/Lotus5.png";
import Lotus6 from "../image/Lotus6.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Lotus() {
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
            <h2>Lotus</h2>
          </motion.div>

          <motion.div
            initial={{ y: 100, opasity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opasity: 0 }}
            transition={{ duration: 0.75 }}
            className="mt-[100px] flex justify-center"
          >
            <Image
              src={Lotus2}
              alt=""
              width="948"
              height="664"
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
              src={Lotus3}
              alt=""
              className="rounded-[20px] w-[300px] h-[300px] lg:w-[418px] lg:h-[418px]"
            />

            <Image
              src={Lotus4}
              alt=""
              className="rounded-[20px] w-[400px] h-[300px] lg:w-[650px] lg:h-[418px] mt-8 md:mt-0 lg:mt-8 xl:mt-0"
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
              src={Lotus5}
              alt=""
              width="650"
              height="418"
              className="rounded-[20px]"
            />

            <Image
              src={Lotus6}
              alt=""
              width="600"
              height="418"
              className="rounded-[20px]"
            />
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
