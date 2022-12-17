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
              { skillName: "BackEnd", experienceLevel: 6, isFavorite: true },
              { skillName: "Tech lead", experienceLevel: 2, isFavorite: true },
            ],
          },
          {
            group: "Languages",
            skills: [
              { skillName: "Typescript", experienceLevel: 3, isFavorite: true },
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
              { skillName: "GraphQL", experienceLevel: 3, isFavorite: true },
              { skillName: "NestJS", experienceLevel: 3 / 12 },
            ],
          },
          {
            group: "Cloud",
            skills: [
              { skillName: "AWS", experienceLevel: 2, isFavorite: true },
              { skillName: "GCP", experienceLevel: 10 / 12 },
              { skillName: "Azure", experienceLevel: 8 / 12 },
            ],
          },
        ]}
      />
    </>
  );
};
