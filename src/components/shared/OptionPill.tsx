import { clsx } from "clsx";
import React from "react";

const OptionPill = ({
  title,
  isActive,
  handlePress,
}: {
  title: string;
  isActive: boolean;
  handlePress: (title: string) => void;
}) => {
  return (
    <span
      className={clsx(
        "px-4 py-1 rounded-full border border-violet-300 cursor-pointer transition-all duration-300 text-sm",
        isActive ? "bg-violet-300 text-black font-bold" : ""
      )}
      onClick={() => handlePress(title)}
    >
      {title}
    </span>
  );
};

export default OptionPill;
