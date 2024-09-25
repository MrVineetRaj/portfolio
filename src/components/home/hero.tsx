"use client";
import { contacts, role } from "@/lib/constants";
import React, { useEffect, useState } from "react";
import ContactsDisplay from "../shared/ContactsDisplay";

const HeroSection = () => {
  const text = "Hello ! I am Vineet Raj";
  const [activeRole, setActiveRole] = useState<string>("");
  const [displayText, setDisplayText] = useState("");
  useEffect(() => {
    let index = 0;
    let roleIndex = 0;
    // console.log(role);
    const timer = setInterval(() => {
      // console.log(role[roleIndex], role[roleIndex].length);
      setDisplayText(role[roleIndex].slice(0, index));
      index++;
      if (index === role[roleIndex].length - 1) {
        // console.log(index, role[roleIndex].length);
        roleIndex = (roleIndex + 1) % role.length;
        index = 0;
      }
    }, 200);
  }, []);
  return (
    <div className="py-4 md:py-20 lg:py-40 flex flex-col-reverse lg:flex-row gap-16 items-center justify-around w-[80vw] md:w-[60vw]">
      <div className="relative flex flex-col sm:items-center lg:items-start bg-transparent sm:py-4 w-full">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white w-full sm:w-auto">
          Hello ! I am <span className="text-violet-400"> Vineet Raj</span>
        </h1>
        <p className="hidden lg:block text-3xl font-bold ">
          I am a <span className="text-orange-400">{displayText}</span>
        </p>

        <ContactsDisplay />
      </div>

      <div className="min-w-64 min-h-64 sm:min-w-80 sm:min-h-80 bg-black-400 rounded-full shadow-cover border-violet-300 border-2">
        {/* todo ;> paste image here */}
      </div>
    </div>
  );
};

export default HeroSection;
