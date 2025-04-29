"use client";

import Image from "next/image";
import Link from "next/link";
import wp from "../image/webpage1.png";
import wpm from "../image/webpage2.png";
import CageTron from "../image/CageTron.png";
import TechEra from "../image/TechEra.png";
import Lotus from "../image/Lotus.png";
import Spectrum from "../image/Spectrum.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Projects() {
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
            <h2>PROJECTS</h2>
          </motion.div>

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
                transition: { delay: 0.7 },
              },
            }}
            className="flex justify-evenly flex-wrap"
          >
            <div className="shadow-inner-custom2 bg-[#565050]/[.10] mt-[100px] rounded-2xl py-12 w-[350px] h-[420px] lg:w-[540px] lg:h-[640px] flex flex-col items-center pt-[80px] lg:pt-[180px]">
              <Image
                src={wp}
                alt=""
                className=" w-[300px] h-[200px] lg:w-[420px] lg:h-[250px]"
              />

              <div className="text-xl lg:text-2xl font-[AllertaStencil] bg-[#040F16]/[.50] mt-[50px] lg:mt-[70px] rounded-2xl w-[250px] h-[80px] lg:w-[470px] lg:h-[80px] text-center py-1 lg:pt-[23px] hover:bg-green-800 hover:text-zinc-300">
                <Link
                  href="https://the-path-of-analog-synthesizer.vercel.app/"
                  target="_blank"
                >
                  Concept for Book WebSite
                </Link>
              </div>
            </div>

            <div className="shadow-inner-custom2 bg-[#565050]/[.10] mt-[100px] rounded-2xl py-12 w-[350px] h-[420px] lg:w-[540px] lg:h-[640px] flex flex-col items-center pt-[80px] lg:pt-[180px]">
              <Image
                src={wpm}
                alt=""
                className=" w-[300px] h-[200px] lg:w-[420px] lg:h-[250px]"
              />

              <div className="text-xl lg:text-2xl font-[AllertaStencil] bg-[#040F16]/[.50] mt-[50px] lg:mt-[70px] rounded-2xl w-[250px] h-[80px] lg:w-[470px] lg:h-[80px] text-center py-1 lg:pt-[23px] hover:bg-green-800 hover:text-zinc-300">
                <Link
                  href="https://spectrum-cocktail-bar.vercel.app/"
                  target="_blank"
                >
                  Concept for Bars WebSite
                </Link>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="shadow-inner-custom2 bg-[#565050]/[.10] mt-[100px] rounded-2xl w-[350px] h-[420px] lg:w-[540px] lg:h-[640px] flex flex-col items-center "
            >
              <Image
                src={CageTron}
                alt=""
                className="rounded-[20px] mt-[30px] lg:mt-[80px] w-[200px] h-[280px] lg:w-[280px] lg:h-[400px]"
              />

              <div className="text-xl lg:text-2xl font-[AllertaStencil] bg-[#040F16]/[.50] mt-[10px] lg:mt-[40px] rounded-2xl w-[250px] h-[70px] lg:w-[470px] lg:h-[80px] text-center py-1.5 lg:pt-[23px] hover:bg-green-800 hover:text-zinc-300">
                <Link href="/cagetron">Concept for Exhibition Poster</Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="shadow-inner-custom2 bg-[#565050]/[.10] mt-[100px] rounded-2xl w-[350px] h-[420px] lg:w-[540px] lg:h-[640px] flex flex-col items-center"
            >
              <Image
                src={TechEra}
                alt=""
                className="rounded-[20px] mt-[30px] lg:mt-[80px] w-[200px] h-[280px] lg:w-[280px] lg:h-[400px]"
              />

              <div className="text-xl lg:text-2xl font-[AllertaStencil] bg-[#040F16]/[.50] mt-[10px] lg:mt-[40px] rounded-2xl w-[250px] h-[70px] lg:w-[470px] lg:h-[80px] text-center py-1.5 lg:pt-[23px] hover:bg-green-800 hover:text-zinc-300">
                <Link href="/techera">Concept for ClubEvent Poster</Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="shadow-inner-custom2 bg-[#565050]/[.10] mt-[100px] rounded-2xl w-[350px] h-[420px] lg:w-[540px] lg:h-[640px] flex flex-col items-center"
            >
              <Image
                src={Lotus}
                alt=""
                className="rounded-[20px] mt-[30px] lg:mt-[80px] w-[200px] h-[280px] lg:w-[280px] lg:h-[400px]"
              />

              <div className="text-xl lg:text-2xl font-[AllertaStencil] bg-[#040F16]/[.50] mt-[10px] lg:mt-[40px] rounded-2xl w-[250px] h-[70px] lg:w-[470px] lg:h-[80px] text-center py-1.5 lg:pt-[23px] hover:bg-green-800 hover:text-zinc-300">
                <Link href="/lotus">Concept for Organic Store</Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="shadow-inner-custom2 bg-[#565050]/[.10] mt-[100px] rounded-2xl w-[350px] h-[420px] lg:w-[540px] lg:h-[640px] flex flex-col items-center"
            >
              <Image
                src={Spectrum}
                alt=""
                className="rounded-[20px] mt-[30px] lg:mt-[80px] w-[200px] h-[280px] lg:w-[280px] lg:h-[400px]"
              />

              <div className="text-xl lg:text-2xl font-[AllertaStencil] bg-[#040F16]/[.50] mt-[10px] lg:mt-[40px] rounded-2xl w-[250px] h-[70px] lg:w-[470px] lg:h-[80px] text-center py-1.5 lg:pt-[23px] hover:bg-green-800 hover:text-zinc-300">
                <Link href="/spectrum">Concept for Lunch Coffee-Bar</Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
