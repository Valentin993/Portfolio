import Image from "next/image";
import Link from "next/link";
import Logo from "../image/logo.png";
import { motion } from "framer-motion";
import hm from "../image/hamburger-menu.svg";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
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
            transition: { delay: 0.3 },
          },
        }}
        className="container px-4"
      >
        <nav className="flex items-center justify-end lg:justify-between flex-wrap">
          <div className="hidden lg:block">
            <Link href="/">
              <Image
                className="opacity-60 hover:opacity-100"
                src={Logo}
                alt="Logo"
                width="158"
                height="111"
              />
            </Link>
          </div>

          <ul className="hidden lg:flex space-x-8 font-bold text-[#FFFFFF]/[.30] text-2xl xl:text-3xl border-0 bg-[#D9D9D9]/[.10] rounded-2xl px-5 py-4">
            <li className="border-x-2 border-[#FFFFFF]/[.30] px-5 hover:text-[#FFFFFF]/[.70]">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-[#FFFFFF]/[.70]">
              <Link href="#about">About</Link>
            </li>
            <li className="border-x-2 border-[#FFFFFF]/[.30] px-5 hover:text-[#FFFFFF]/[.70]">
              <Link href="/my-projects">Projects</Link>
            </li>
          </ul>

          <div className="hidden lg:flex border-0 text-black bg-[#D9D9D9]/[.20] font-bold text-xl xl:text-2xl px-5 py-2 rounded-2xl hover:bg-[#D9D9D9]/[.50] hover:text-[#FFFFFF]/[.50]">
            <Link href="/contact-form">Contact</Link>
          </div>

          <div className="flex flex-col lg:hidden relative pt-3">
            <Link href="#" onClick={toggleMenu}>
              <Image
                src={hm}
                alt="Hamburger Menu"
                width="60"
                height="50"
                className="opacity-30 hover:opacity-70"
              />
            </Link>

            {isMenuOpen && (
              <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-50">
                <div className="flex flex-col items-center justify-center w-full h-full text-white">
                  <ul className="space-y-6 text-4xl font-bold text-center">
                    <li className="hover:text-[#405d57]">
                      <Link href="/" onClick={toggleMenu}>
                        Home
                      </Link>
                    </li>
                    <li className="hover:text-[#405d57]">
                      <Link href="#about" onClick={toggleMenu}>
                        About
                      </Link>
                    </li>
                    <li className="hover:text-[#405d57]">
                      <Link href="/my-projects" onClick={toggleMenu}>
                        Projects
                      </Link>
                    </li>
                    <li className="hover:text-[#405d57]">
                      <Link href="/contact-form" onClick={toggleMenu}>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </nav>
      </motion.div>
    </header>
  );
}
