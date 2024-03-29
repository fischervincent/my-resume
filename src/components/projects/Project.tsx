import { useAutoAnimate } from "@formkit/auto-animate/react";
import type { ISkill } from "components/skills";
import type { IProject } from "./constants/projects";
import { Recommendations } from "./Recommendations";

interface ProjectProps extends IProject {
  selectedSkills: ISkill[];
}

export const Project = ({
  companyName,
  role,
  dates,
  skills,
  facts,
  Description,
  recommendations,
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
    <div className="section-card space-y-5">
      <div>
        <h1 className="font-sans text-3xl font-bold">{companyName}</h1>
        <div className="flex items-baseline mb-2">
          <h2 className="mb-0 text-2xl font-bold">{role}</h2>
          <h5 className="ml-4 text-sm font-extralight">{dates}</h5>
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
      <div>
        <Recommendations recommendations={recommendations} />
      </div>
      {facts.length > 0 && (
        <>
          <h2 className="font-sans text-lg font-bold text-gray-600">
            Specific topics
          </h2>
          <div className="overflow-x-auto relative">
            <div className="flex flex-col sm:flex-row sm:w-max space-y-4 space-x-0 sm:space-y-0 sm:space-x-6 my-4">
              {facts.map((fact) => (
                <div className="sm:w-[300px] p-4 sm:p-6 bg-white rounded-md shadow-md border border-gray-600 h-fit">
                  <h2 className="mb-3 text-2xl font-bold">{fact.title}</h2>
                  <p className="text-sm">{fact.content}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
