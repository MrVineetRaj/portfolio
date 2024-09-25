"use client";
import React, { useEffect, useState } from "react";
import SectionHeading from "../shared/SectionHeading";
import { skills } from "@/lib/constants";
import OptionPill from "../shared/OptionPill";
import SkillCard from "../shared/SkillCard";

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState<string>(
    "Programming Languages"
  );

  const [skillsToDisplay, setSkillsToDisplay] = useState(skills[0].skills);

  const handleActiveOption = (title: string) => {
    setActiveSkill(title);
    const selectedSkill = skills.find((skill) => skill.title === title);
    if (selectedSkill) {
      setSkillsToDisplay(selectedSkill.skills);
    }
  };

  useEffect(() => {
    const selectedSkill = skills.find((skill) => skill.title === activeSkill);
    if (selectedSkill) {
      setSkillsToDisplay(selectedSkill.skills);
    }
  }, [activeSkill]);

  return (
    <section className="section-container">
      <div className="w-full ">
        <SectionHeading title="Skills" />
      </div>
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <div className="flex-[0.5]">
          {" "}
          <p className="text-justify">
            I have multiple skills when it comes to programming as I have
            knowledge of some latest cutting edge technologies powered by
            companies like Google,AWS, Cloudinary and many more
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
            {skills.map((skill, index) => (
              <div key={index}>
                <OptionPill
                  title={skill.title}
                  isActive={activeSkill === skill.title}
                  handlePress={handleActiveOption}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex-[0.5] flex gap-4 flex-wrap justify-center md:justify-end h-full ">
          {skillsToDisplay?.map((skill, index) => {
            return (
              <div key={index} className="flex items-center gap-2">
                <SkillCard skill={skill} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
