import React from "react";

const ExperienceCard = ({
  internship,
}: {
  internship: {
    role: string;
    company: string;
    duration: string;
    description: string;
    address: string;
  };
}) => {
  return (
    <div className="max-w-[600px] w-full">
      <h3 className="flex flex-col md:flex-row justify-between border-b border-violet-300">
        {" "}
        <span className="font-bold text-sm">
          {internship.company}{" "}
          <span className="text-[10px] text-gray-400">
            {internship.address}
          </span>
        </span>
        <span className="text-sm text-gray-300 text-right">
          {internship.duration}
        </span>
      </h3>
      <p className="text-gray-400 text-sm text-justify">
        {internship.description}
      </p>
    </div>
  );
};

export default ExperienceCard;
