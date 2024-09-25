import Image from "next/image";
import React from "react";

const SkillCard = ({
  skill,
}: {
  skill: {
    label: string;
    icon: string;
  };
}) => {
  return (
    <span className="min-w-[70px] min-h-[80px] bg-gray-100 shadow-cover rounded-lg border-2 border-violet-300 flex items-center justify-center ">
      <Image src={skill.icon} alt={skill.label} width={40} height={40} />
    </span>
  );
};

export default SkillCard;
