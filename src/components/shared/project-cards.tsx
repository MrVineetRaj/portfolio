"use client";
import React, { useState } from "react";
import clsx from "clsx";

const ProjectCard = ({
  project,
}: {
  project: {
    title: string;
    category: string;
    description: string;
    tech_stack: string[];
    image: string;
    demo: string;
    github: string;
  };
}) => {
  const [showUrl, setShowUrl] = useState(false);
  return (
    <div
      className={clsx(
        "relative flex flex-col gap-2 items-start justify-start max-w-[300px] border-2 border-violet-300 p-2 rounded-lg transition-all duration-200",
        showUrl && "shadow-cover"
      )}
      onMouseEnter={() => setShowUrl(true)}
      onMouseLeave={() => setShowUrl(false)}
    >
      <img
        src={project.image}
        alt={project.title}
        className="min-w-[250px] rounded-md"
      />
      <span className="font-bold">{project.title}</span>
      <span className="text-sm">
        <span className="font-semibold text-gray-400">Tech</span>{" "}
        {project.tech_stack.join(", ")}
      </span>
      <span className="line-clamp-3 text-sm hover:line-clamp-5 text-justify">
        {project.description}
      </span>
      {showUrl && (
        <span className="absolute flex gap-2 top-28 left-4 transition-all duration-200">
          {project.github && (
            <span>
              <a
                href={project.github}
                className="bg-violet-900 px-2 py-1 rounded-md"
                target="_blank"
              >
                Github
              </a>
            </span>
          )}
          {project.demo && (
            <span className="">
              <a
                href={project.demo}
                className="bg-violet-900 px-2 py-1 rounded-md "
                target="_blank"
              >
                Demo
              </a>
            </span>
          )}
        </span>
      )}
    </div>
  );
};

export default ProjectCard;
