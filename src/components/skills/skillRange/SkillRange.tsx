import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import { Scale } from "./Scale";
import "styles/skills.css";
import { GroupSkills } from "./GroupSkills";
import type { ISkill } from "components/skills";

interface Skills {
  skillName: ISkill;
  experienceLevel: number;
}

export const SkillRange = ({
  skills,
}: {
  skills: { group: string; skills: Skills[] }[];
}) => {
  const nbYearsInScale = 6;
  const [minExperienceFilter, setMinExperienceFilter] = useState(0);

  const getWidthFromLevel = (level: number) => {
    return (level / nbYearsInScale) * 100;
  };

  const filteredSkills = skills
    .filter(
      ({ skills }) =>
        skills.filter(
          ({ experienceLevel }) => experienceLevel >= minExperienceFilter
        ).length > 0
    )
    .map(({ group, skills }) => ({
      group,
      skills: skills.filter(
        ({ experienceLevel }) => experienceLevel >= minExperienceFilter
      ),
    }));

  const filteredOutSkills = skills
    .filter(
      ({ skills }) =>
        skills.filter(
          ({ experienceLevel }) => experienceLevel < minExperienceFilter
        ).length > 0
    )
    .map(({ group, skills }) => ({
      group,
      skills: skills.filter(
        ({ experienceLevel }) => experienceLevel < minExperienceFilter
      ),
    }));

  const onFilterChange = (filter: number) => {
    setMinExperienceFilter(Number(filter) / 12);
  };

  const [parent] = useAutoAnimate<HTMLDivElement>();

  return (
    <div>
      <div
        ref={parent}
        className="grid items-center"
        style={{ gridTemplateColumns: "100px auto" }}
      >
        <div />
        <Scale nbTicks={nbYearsInScale} onFilterChange={onFilterChange} />

        {filteredSkills.map(({ skills, group }) => {
          const sortedSkills = skills.sort(
            (a, b) => b.experienceLevel - a.experienceLevel
          );
          return (
            <GroupSkills
              group={group}
              sortedSkills={sortedSkills}
              getWidthFromLevel={getWidthFromLevel}
            />
          );
        })}
        {filteredOutSkills.map(({ skills, group }) => {
          const sortedSkills = skills.sort(
            (a, b) => b.experienceLevel - a.experienceLevel
          );
          return (
            <GroupSkills
              group={group}
              sortedSkills={sortedSkills}
              getWidthFromLevel={getWidthFromLevel}
              disabled
            />
          );
        })}
      </div>
    </div>
  );
};
