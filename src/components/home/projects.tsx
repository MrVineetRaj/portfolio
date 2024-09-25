"use client";
import React, { act, useEffect, useState } from "react";
import SectionHeading from "../shared/SectionHeading";
import { projects, projects_categories } from "@/lib/constants";
import OptionPill from "../shared/OptionPill";
import ProjectCard from "../shared/project-cards";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("fullstack");
  const [projectToBeDisplayed, setProjectToBeDisplayed] = useState([
    {
      title: "Imaginify",
      category: "fullstack",
      description:
        "A fullstack application to edit images with ai powered tool provided by cloudinary",
      tech_stack: ["React", "Node", "MongoDB"],
      image: "/images/imaginify.png",
      demo: "https://imaginify.vercel.app/",
      github: "",
    },
  ]);
  const handleActiveOption = (category: string) => {
    setActiveCategory(category);
  };

  useEffect(() => {
    const selectedProjects = projects.filter(
      (project) => project.category === activeCategory
    );
    setProjectToBeDisplayed(selectedProjects);
  }, [activeCategory]);
  return (
    <section className="section-container">
      <div className="w-auto">
        <SectionHeading title="Projects" />
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <div className="flex items-center flex-col">
          <p className="text-center text-sm md:text-base">
            Now here are my projects that helped me to learn fundamental to
            intermediate knowledge of various tech stacks like{" "}
            <strong>Clerk, Gemini etc</strong> and grow in the
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
            {projects_categories.map((category, index) => (
              <div key={index}>
                <OptionPill
                  title={category}
                  isActive={activeCategory === category}
                  handlePress={handleActiveOption}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex-[0.5] flex gap-6 flex-wrap justify-center h-full mt-2 ">
          {projectToBeDisplayed?.map((project, index) => {
            return <ProjectCard project={project} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
