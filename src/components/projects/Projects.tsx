import { useState } from "react";

import Select, { MultiValue } from "react-select";

import { Skill, ISkill } from "components/skills";
import { Project } from "./Project";
import { projects } from "./constants/projects";

import "./multi-select.css";
import { useAutoAnimate } from "@formkit/auto-animate/react";

// decided to use react on this because I want a search feature
// to filter projects

interface SkillOption {
  value: ISkill;
  label: ISkill;
}

const skillOptions = Object.entries(Skill).map(([, value]) => ({
  value,
  label: value,
}));

export const Projects = () => {
  const [selectedSkills, setSelectedSkills] = useState<MultiValue<SkillOption>>(
    []
  );
  const [parent] = useAutoAnimate<HTMLDivElement>();

  const filteredProjects = projects.filter(({ skills }) => {
    if (!selectedSkills.length) return true;
    const atLeastOne = selectedSkills.some(({ value }) =>
      skills.includes(value)
    );
    return atLeastOne;
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="alert alert-info">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-current shrink-0 w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span className="flex-1">
          This page is still under construction. The information here is not
          valid.
        </span>
      </div>
      <div className="max-w-[500px]">
        <h5 className="text-sm font-extralight">
          Filter by skills, roles or methodologies
        </h5>
        <Select
          isMulti
          name="skills"
          className="multi-select"
          options={skillOptions}
          value={selectedSkills}
          onChange={(value) => setSelectedSkills(value)}
        />
        {!!selectedSkills.length && (
          <p>
            Showing {filteredProjects.length} of {projects.length} projects.
          </p>
        )}
      </div>

      <div ref={parent} className="flex flex-col gap-16">
        {filteredProjects.map((project) => (
          <Project
            key={project.dates}
            {...project}
            selectedSkills={selectedSkills.map(({ value }) => value)}
          />
        ))}
      </div>
    </div>
  );
};
