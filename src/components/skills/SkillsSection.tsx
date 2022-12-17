import { SkillRange } from "./skillRange/SkillRange";

export const Skills = () => {
  return (
    <>
      <p className="mb-16">Here are my main skills.</p>
      <SkillRange
        skills={[
          {
            group: "Roles",
            skills: [
              { skillName: "Fullstack", experienceLevel: 5 },
              { skillName: "FrontEnd", experienceLevel: 4 },
              { skillName: "BackEnd", experienceLevel: 6 },
              { skillName: "Tech lead", experienceLevel: 2 },
            ],
          },
          {
            group: "Languages",
            skills: [
              { skillName: "Typescript", experienceLevel: 3 },
              { skillName: "Javascript", experienceLevel: 5 },
            ],
          },
          {
            group: "FrontEnd",
            skills: [
              { skillName: "React", experienceLevel: 3 },
              { skillName: "React Native", experienceLevel: 1 / 12 },
              { skillName: "Redux", experienceLevel: 3 / 12 },
            ],
          },
          {
            group: "Backend",
            skills: [
              { skillName: "Node", experienceLevel: 4 },
              { skillName: "GraphQL", experienceLevel: 3 },
              { skillName: "NestJS", experienceLevel: 3 / 12 },
            ],
          },
        ]}
      />
    </>
  );
};
