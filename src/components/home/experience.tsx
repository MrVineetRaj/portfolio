"use client";
import React, { useState } from "react";
import SectionHeading from "../shared/SectionHeading";
import { internship_roles, internships } from "@/lib/constants";
import OptionPill from "../shared/OptionPill";
import ExperienceCard from "../shared/ExperienceCard";

const Experience = () => {
  const [activeRole, setActiveRole] = useState<string>("FullStack Developer");
  const [internshipsToDisplay, setInternshipsToDisplay] = useState([
    internships[0],
  ]);
  const handleActiveOption = (role: string) => {
    setActiveRole(role);
    const selectedInternshipsToBeDisplayed = internships.filter(
      (internship) => internship.role === role
    );

    if (selectedInternshipsToBeDisplayed) {
      setInternshipsToDisplay(selectedInternshipsToBeDisplayed);
    }
  };

  return (
    <section className="section-container">
      <div className="w-auto">
        <SectionHeading title="Experience" />
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex items-center flex-col">
          <p className="text-center text-sm md:text-base">
            When it comes to experience i also have strong experience with the
            above technologies as I Worked in a following company for role :
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {internship_roles.map((role, index) => (
              <div key={index}>
                <OptionPill
                  title={role}
                  isActive={activeRole === role}
                  handlePress={handleActiveOption}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex-[0.5] flex gap-4 flex-wrap justify-around h-full ">
          {internshipsToDisplay?.map((internship, index) => {
            return <ExperienceCard internship={internship} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
