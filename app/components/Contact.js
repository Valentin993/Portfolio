"use client";

import Image from "next/image";
import Link from "next/link";
import closeSquare from "../image/close-square-svgrepo-black.svg";
import shape from "../image/3d model.png";
import gmail from "../image/gmail.png";
import instagram from "../image/instagram.png";
import React from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

export default function Contact() {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e78011e6-280e-493b-b053-2ed049a66afa");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
  }
  return (
    <div className="container py-[60px] px-4">
      <div className="flex flex-wrap">
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
              transition: { delay: 0.4 },
            },
          }}
          className="bg-[#353A46] py-[20px] lg:py-[80px] px-[20px] lg:px-[80px] w-full lg:w-6/12"
        >
          <div className="lg:hidden flex justify-end opacity-20 hover:opacity-50 duration-300 ease-in-out hover:-translate-y-0.5 ">
            <Link href="/">
              <Image
                src={closeSquare}
                alt=""
                className="w-[50px] h-[50px] 2xl:w-[88px] 2xl:h-[88px]"
              />
            </Link>
          </div>

          <form onSubmit={handleSubmit}>
            <h2 className="text-center">
              <span className="block text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl text-[#FFFFFF]/[.30] font-[AllertaStencil]">
                Get in
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#FFFFFF]/[.60] font-bold pl-[95px] md:pl-[115px] lg:pl-[150px] 2xl:pl-[250px] ">
                Touch
              </span>
            </h2>

            <div className="flex flex-wrap justify-between pt-[60px] px-12 lg:px-0">
              <input
                className="w-full h-[60px] 2xl:w-[290px] bg-[#353A46] border-2 rounded-[10px] text-center font-bold hover:border-sky-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                type="text"
                placeholder="Your Name"
                name="name"
                required
              />
              <input
                className="w-full h-[60px] 2xl:w-[290px] bg-[#353A46] border-2 rounded-[10px] text-center font-bold hover:border-sky-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 mt-5 2xl:mt-0"
                type="email"
                placeholder="Your email address"
                name="Email"
                required
              />
            </div>

            <div className="pt-12 px-12 lg:px-0">
              <textarea
                className="w-full h-[200px] bg-[#353A46] border-2 rounded-[10px] font-bold lg:text-xl pt-3 pl-3 hover:border-sky-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                type="text"
                placeholder="What can I help you with?"
                name="message"
                required
              />
            </div>

            <div className="flex justify-end px-12 lg:px-0 mb-16 lg:mb-0">
              <div className="border-2 border-white-500 text-[#FFFFFF]/[.70] font-medium xl:font-semibold xl:text-xl text-center pt-[7px] xl:pt-3 rounded-[30px] w-[150px] h-[40px] mt-7 xl:w-[200px] xl:h-[56px] xl:mt-[40px] hover:border-sky-500 hover:text-sky-500 active:bg-sky-700">
                <button type="submit">SUBMIT MESSAGE</button>
              </div>
            </div>
          </form>
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
              transition: { delay: 0.6 },
            },
          }}
          className="bg-[#1C2331] py-[20px] px-[20px] w-6/12 hidden lg:block "
        >
          <div className="flex justify-end opacity-20 hover:opacity-50 duration-300 ease-in-out hover:-translate-y-0.5">
            <Link href="/">
              <Image
                src={closeSquare}
                alt=""
                className="w-[70px] h-[70px] 2xl:w-[88px] 2xl:h-[88px]"
              />
            </Link>
          </div>

          <div className="text-2xl xl:text-4xl text-[#FFFFFF]/[.50] font-[AllertaStencil] mt-[50px] ml-[50px]">
            <span className="block">Let&apos;s create something</span>
            <span className="block">together!</span>
          </div>

          <div className="flex justify-center">
            <Image
              src={shape}
              alt=""
              className="w-[220px] h-[220px] xl:w-[250px] xl:h-[250px] mt-12"
            />
          </div>

          <div className="text-[#FFFFFF]/[.40] mt-[100px] ">
            <span className="block text-2xl xl:text-3xl 2xl:text-4xl ml-[60px] font-[AllertaStencil]">
              Feel free to reach me at
            </span>
            <span className="block text-xl xl:text-2xl ml-[160px] xl:ml-[250px] 2xl:ml-[350px] pt-4 font-semibold">
              digitalcrafts.v@gmail.com
            </span>
          </div>

          <ul className="flex justify-end mt-10">
            <li>
              <Link href="mailto:digitalcrafts.v@gmail.com">
                <Image src={gmail} alt="" width="60" height="60" />
              </Link>
            </li>
            <li>
              <Link href="">
                <Image src={instagram} alt="" width="60" height="60" />
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
