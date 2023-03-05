import { useAutoAnimate } from "@formkit/auto-animate/react";
import type { ISkill } from "components/skills";
import type { FC } from "react";
import type { Fact } from "./constants/projects";

interface ProjectProps {
  companyName: string;
  role: string;
  dates: string;
  skills: ISkill[];
  facts: Fact[];
  Description: FC;
  selectedSkills: ISkill[];
}

export const Project = ({
  companyName,
  role,
  dates,
  skills,
  facts,
  Description,
  selectedSkills,
}: ProjectProps) => {
  const [animatedSkills] = useAutoAnimate<HTMLDivElement>();
  const [filteredSkills, otherSkills] = skills.reduce(
    (acc, skill) => {
      if (selectedSkills.includes(skill)) {
        acc[0].push(skill);
      } else {
        acc[1].push(skill);
      }
      return acc;
    },
    [[], []] as [ISkill[], ISkill[]]
  );

  return (
    <div className="section-card">
      <div>
        <h1 className="font-sans">{companyName}</h1>
        <div className="flex items-baseline mb-2">
          <h2 className="mb-0">{role}</h2>
          <h5 className="ml-4">{dates}</h5>
        </div>
        <div ref={animatedSkills} className="flex flex-wrap gap-2 mb-6">
          {filteredSkills.map((skill) => (
            <span
              key={companyName + skill}
              className="skill-badge badge-primary font-bold"
            >
              {skill}
            </span>
          ))}
          {otherSkills.map((skill) => (
            <span key={companyName + skill} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
        <Description />
      </div>
      <div className="overflow-x-auto mt-6">
        <div className="flex flex-col sm:flex-row sm:w-max space-y-4 sm:space-y-0 sm:space-x-6 my-4">
          {facts.map((fact) => (
            <div className="sm:w-[300px] p-4 sm:p-6 bg-white rounded-md shadow-md border border-gray-600">
              <h2 className="mb-3">{fact.title}</h2>
              <p className="text-sm">{fact.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
