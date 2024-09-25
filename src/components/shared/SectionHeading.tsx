import React from "react";

const SectionHeading = ({ title }: { title: string }) => {
  return (
    <span className="relative ">
      <span className="absolute bottom-0 left-0 bg-violet-300 w-full h-[10px] -z-20 blur " />
      <span className="text-4xl md:text-5xl lg:text-6xl font-bold  text-white-400 mx-4 my-2 w-auto">
        {title}
      </span>
    </span>
  );
};

export default SectionHeading;
