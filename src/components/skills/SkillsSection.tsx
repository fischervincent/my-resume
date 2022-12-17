import { SkillRange } from "./skillRange/SkillRange";

export const Skills = () => {
  return (
    <>
      <p className="mb-16">Here are my main skills.</p>
      <SkillRange
        skills={[
          { skillName: "Typescript", experienceLevel: 3, group: "Languages" },
          { skillName: "Javascript", experienceLevel: 5, group: "Languages" },
          { skillName: "Front End", experienceLevel: 4, group: "FrontEnd" },
          { skillName: "React", experienceLevel: 3, group: "FrontEnd" },
          {
            skillName: "React Native",
            experienceLevel: 1 / 12,
            group: "FrontEnd",
          },
          { skillName: "Redux", experienceLevel: 3 / 12, group: "FrontEnd" },
          { skillName: "Back End", experienceLevel: 6, group: "Backend" },
          { skillName: "NodeJS", experienceLevel: 4, group: "Backend" },
          { skillName: "GraphQL", experienceLevel: 3, group: "Backend" },
          { skillName: "NestJS", experienceLevel: 3 / 12, group: "Backend" },
        ]}
      />
    </>
  );
};
