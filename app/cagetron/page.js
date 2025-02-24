"use client";
import Image from "next/image";
import CageTron from "../image/CageTron.png";
import CageTron2 from "../image/CageTron2.png";
import CageTron3 from "../image/CageTron3.png";
import CageTron4 from "../image/CageTron4.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Cagetron() {
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
            <h2>CageTron</h2>
          </motion.div>

          <motion.div
            initial={{ y: 100, opasity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opasity: 0 }}
            transition={{ duration: 0.75 }}
            className="mt-[100px] flex justify-center"
          >
            <Image
              src={CageTron2}
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
            className="mt-[100px] flex justify-around flex-wrap"
          >
            <Image
              src={CageTron}
              alt=""
              className="rounded-[20px] w-[324px] h-[452px] lg:w-[524px] lg:h-[752px]"
            />

            <Image
              src={CageTron3}
              alt=""
              className="rounded-[20px] w-[324px] h-[452px] lg:w-[524px] lg:h-[752px] mt-8 md:mt-0 lg:mt-8 xl:mt-0"
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
              src={CageTron4}
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
