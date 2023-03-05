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
    <div className="flex flex-col gap-8">
      <div className="max-w-[500px]">
        <h5>Filter by skills, roles or methodologies</h5>
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
