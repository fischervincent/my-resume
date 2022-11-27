import type { FC } from "react";

interface ProjectProps {
  companyName: string;
  role: string;
  dates: string;
  skills: string[];
  Facts: FC;
  Description: FC;
}

export const Project = ({
  companyName,
  role,
  dates,
  skills,
  Facts,
  Description,
}: ProjectProps) => {
  return (
    <div className="section-card grid grid-cols-6 gap-8">
      <div className="col-span-6 md:col-span-4">
        <h1 className="text-3xl font-bold">{companyName}</h1>
        <div className="flex items-end mb-8">
          <h2 className="text-2xl">{role}</h2>
          <span className="ml-4">{dates}</span>
        </div>
        <Description />
      </div>
      <div className="col-span-6 md:col-span-2 text-sm">
        <h3 className="text-xl font-extralight mb-4">Some facts:</h3>
        <Facts />
      </div>
      <div className="col-span-6 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span className="skill-badge">{skill}</span>
        ))}
      </div>
    </div>
  );
};
