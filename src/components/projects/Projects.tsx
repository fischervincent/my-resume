import { useState } from "react";

import Select, { MultiValue } from "react-select";

import { Skill } from "components/skills";
import type { ISkill } from "components/skills";
import { Project } from "./Project";
import { projects } from "./constants/projects";

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

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h5>Filter by skills, roles or methodologies</h5>
        <Select
          isMulti
          name="skills"
          options={skillOptions}
          value={selectedSkills}
          onChange={(value) => setSelectedSkills(value)}
        />
      </div>

      <div className="flex flex-col gap-16">
        {projects
          .filter(({ skills }) => {
            if (!selectedSkills.length) return true;
            const atLeastOne = selectedSkills.some(({ value }) =>
              skills.includes(value)
            );
            return atLeastOne;
          })
          .map((project) => (
            <Project {...project} />
          ))}
      </div>
    </div>
  );
};
