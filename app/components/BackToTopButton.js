"use client";
import { Fragment, useEffect, useState } from "react";

export default function BackToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  });

  const jumpToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Fragment>
      {show ? (
        <div className="fixed bottom-0 right-0 mb-6 mr-6 z-10">
          <button
            onClick={jumpToTop}
            className="bg-[#FFFFFF]/[.25] text-white rounded-full p-2 hover:bg-[#FFFFFF]/[.50] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 lg:h-12 lg:w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>
      ) : (
        <Fragment />
      )}
    </Fragment>
  );
}
