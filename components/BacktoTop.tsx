'use client';
import React, { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
      ) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`w-12 h-12 z-10 text-2xl ${visible ? "" : "hidden"} fixed bottom-8 right-8 scrollBtn`}
    >
      <button
        className="w-full h-full flex items-center justify-center relative overflow-hidden group"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <span className="border-2 border-green-500 rounded-full p-2 flex items-center justify-center">
          <BsArrowUp />
        </span>
        <span className="w-full h-[1px] bg-secondaryColor absolute top-0 inline-block -translate-y-[.3px] group-hover:translate-y-0 transition-transform duration-300"></span>
        <span className="w-full h-[1px] bg-secondaryColor absolute bottom-0 inline-block translate-y-[.3px] group-hover:translate-y-0 transition-transform duration-300"></span>
        <span className="w-[1px] h-full bg-secondaryColor absolute left-0 inline-block -translate-x-[.3px] group-hover:translate-x-0 transition-transform duration-300"></span>
        <span className="w-[1px] h-full bg-secondaryColor absolute right-0 inline-block translate-x-[.3px] group-hover:translate-x-0 transition-transform duration-300"></span>
      </button>
    </div>
  );
};

export default BackToTop;
