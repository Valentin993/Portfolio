"use client";

import Image from "next/image";
import Link from "next/link";
import Spline from "@splinetool/react-spline";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import shape from "./image/3d model.png";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="pb-12">
          <div className="container">
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
              className="hidden lg:flex mt-9 ml-12"
            >
              <h2 className="lg:text-6xl xl:text-7xl text-[#FFFFFF]/[.10] font-[AllertaStencil]">
                VALENTIN
              </h2>
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
                  transition: { delay: 0.8 },
                },
              }}
              className="relative hidden lg:flex h-[465px]"
            >
              <Spline scene="https://prod.spline.design/yR-YBrXEg7y4i3mt/scene.splinecode" />

              <div className="absolute bottom-5 right-5 w-[150px] h-9 bg-[#0b151e]"></div>
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
              className="flex justify-center py-10 lg:hidden"
            >
              <Image src={shape} alt="" width="200" height="200"></Image>
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
                  transition: { delay: 0.9 },
                },
              }}
              className="text-center lg:text-start text-lg md:text-xl xl:text-3xl font-bold text-[#FFFFFF]/[.70] mx-[150px]"
            >
              <span className="block">Crafting Digital Identities </span>
              <span className="block">with Design & Development</span>
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
                  transition: { delay: 1 },
                },
              }}
              className="hidden lg:flex lg:justify-end"
            >
              <h2 className="lg:text-5xl xl:text-6xl text-[#FFFFFF]/[.10] font-[AllertaStencil]">
                MAYSTOROVSKI
              </h2>
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
                  transition: { delay: 1 },
                },
              }}
              className="text-3xl md:text-4xl pt-4 text-center lg:hidden"
            >
              <span className="text-[#FFFFFF]/[.10] font-[AllertaStencil]">
                Valentin Maystorovski
              </span>
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
                  transition: { delay: 1 },
                },
              }}
              className="text-center mt-5 mb-5"
            >
              <h3 className="text-lg lg:text-2xl text-[#FFFFFF]/[.25] font-[AllertaStencil]">
                WEB DESIGNER & DEVELOPER
              </h3>
            </motion.div>
          </div>
        </section>

        <section
          id="about"
          className="shadow-inner-custom pt-[100px] pb-[200px]"
        >
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="text-7xl text-center lg:text-[128px] lg:text-start text-[#FFFFFF]/[.25] font-[AllertaStencil] "
            >
              <h2>ABOUT</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="text-xl lg:font-medium text-center lg:text-3xl text-[#FFFFFF]/[.60] mt-[100px] bg-[#D9D9D9]/[.10] rounded-2xl px-4 lg:px-12 py-14"
            >
              <p>
                Hi, I am Valentin Maystorovski, a UX/UI designer, brand
                designer, and web developer based in Berlin.
              </p>
              <p className="mt-12">
                With a passion for creating intuitive user experiences, I
                specialize in blending design and development to craft seamless
                digital solutions. From building cohesive brand identities to
                designing responsive websites, I focus on making complex ideas
                simple and engaging for users.
              </p>
              <p className="mt-12">
                Driven by creativity and user-centric design, I am always
                exploring new ways to elevate brands and deliver impactful,
                functional designs that resonate.
              </p>
            </motion.div>
          </div>
        </section>

        <section className=" pt-[100px] pb-[200px]">
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="text-7xl lg:text-[128px] text-[#FFFFFF]/[.30] font-[AllertaStencil] text-center "
            >
              <h2>SERVICES</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="text-center bg-[#D9D9D9]/[.10] mt-[100px] rounded-2xl px-4 py-14"
            >
              <h3 className="text-4xl lg:text-6xl font-bold text-[#FFFFFF]/[.50] pb-8">
                UX/UI Design
              </h3>
              <div className="text-xl lg:text-3xl lg:font-medium text-[#FFFFFF]/[.70] ">
                <p>
                  I specialize in creating user-centered designs that prioritize
                  both functionality and visual appeal.
                </p>
                <p className="mt-3">
                  Through a thoughtful and research-driven approach, I ensure
                  that each project
                </p>
                <p>
                  I work on provides a seamless and intuitive experience for
                  users.
                </p>
                <p className="mt-3">
                  From wireframes to interactive prototypes, I focus on crafting
                  designs that are not
                </p>
                <p>
                  only beautiful but also deliver real value by solving user
                  problems and enhancing usability.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="text-center bg-[#D9D9D9]/[.10] mt-[100px] rounded-2xl px-4 py-14"
            >
              <h3 className="text-4xl lg:text-6xl font-bold text-[#FFFFFF]/[.50] pb-8">
                Brand Design
              </h3>
              <div className="text-xl lg:text-3xl lg:font-medium text-[#FFFFFF]/[.70] ">
                <p>
                  As a solo designer, I take the time to really understand your
                  business and vision, creating a
                </p>
                <p>
                  unique brand identity that reflects your values and resonates
                  with your target audience.
                </p>
                <p className="mt-2">
                  From logo design to color schemes and typography, I work with
                  you to build a cohesive brand
                </p>
                <p>
                  presence that makes a lasting impression and sets you apart in
                  a competitive market.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="text-center bg-[#D9D9D9]/[.10] mt-[100px] rounded-2xl px-4 py-14"
            >
              <h3 className="text-4xl lg:text-6xl font-bold text-[#FFFFFF]/[.50] pb-8">
                Web Development
              </h3>
              <div className="text-xl lg:text-3xl lg:font-medium text-[#FFFFFF]/[.70] ">
                <p>
                  I provide custom web development services, building responsive
                  and user-friendly websites
                </p>
                <p>
                  tailored to your needs. Whether it is a simple landing page, a
                  portfolio, or a more complex site,
                </p>
                <p>
                  focus on creating smooth, fast, and secure digital
                  experiences. With attention to detail and
                </p>
                <p>performance, I ensure your site is easy to manage,</p>
                <p>
                  adaptable across devices, and optimized for a seamless user
                  journey.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
