"use client";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

const MobileNav = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);
  return (
    <div>
      {/* Mobile Nav */}
      <div className="sticky top-0 w-[80vw] bg-gradient-to-t from-gray-900 to-gray-800 shadow-cover z-40 px-4  md:px-16  py-4 rounded-[15px] border-2 border-violet-300 mt-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-5 cursor-pointer">
            <Image
              src="/home.svg"
              alt="logo"
              width={30}
              height={30}
              className=""
            />
          </div>
          <div className="flex items-center justify-between gap-5 cursor-pointer">
            <Image
              src="/icons/hamburger-open.svg"
              alt="menu"
              width={30}
              height={30}
              className=""
              onClick={() => {
                console.log("clicked");
                setIsMobileNavOpen(true);
              }}
            />
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "fixed top-0 bg-black border-l border-violet-300 w-[240px] h-screen transition-all duration-1000 z-50",
          isMobileNavOpen ? "right-0" : "-right-[100%]"
        )}
      >
        <div className="flex justify-end items-center p-4">
          <Image
            src="/icons/hamburger-close.svg"
            alt="menu"
            width={30}
            height={30}
            className=""
            onClick={() => {
              console.log("clicked");
              setIsMobileNavOpen(false);
            }}
          />
        </div>
        <div className="flex flex-col items-start gap-5 w-full px-4">
          <span className="text-lg text-gray-100">Home</span>
          <span className="text-lg text-gray-100">Skills</span>
          <span className="text-lg text-gray-100">Experience</span>
          <span className="text-lg text-gray-100">Projects</span>
          <span className="text-lg text-gray-100">Contact</span>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
