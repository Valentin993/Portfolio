import Image from "next/image";
import Link from "next/link";
import gmail from "../image/gmail.png";
import instagram from "../image/instagram.png";

export default function Footer() {
  return (
    <footer className="shadow-inner-custom pt-[100px] pb-[20px]">
      <div className="container px-4">
        <div>
          <span className="block text-4xl text-center md:text-start md:text-6xl lg:text-7xl xl:text-8xl text-[#FFFFFF]/[.40] font-[AllertaStencil]">
            Let&apos;s collaborate
          </span>
          <span className="block text-xl text-center  md:text-2xl lg:text-3xl xl:text-5xl text-[#FFFFFF]/[.40]  md:pl-[250px] lg:pl-[300px] pt-[10px]">
            and turn your vision into a digital reality
          </span>
        </div>

        <ul className="flex justify-center mt-10">
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

        <p className="md:text-xl text-[#FFFFFF]/[.20] text-center lg:text-end">
          &copy;2025 All rights reserved
        </p>
      </div>
    </footer>
  );
}
