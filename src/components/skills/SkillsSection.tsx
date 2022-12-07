import { Skill } from "./skills";

const roles = [Skill.TECHLEAD, Skill.FRONTEND, Skill.BACKEND];

const languageSkills = [Skill.TYPESCRIPT, Skill.JAVASCRIPT];

const frontendSkills = [Skill.REACT, Skill.REACT_NATIVE, Skill.REDUX];

const backendSkills = [Skill.NODE, Skill.NESTJS, Skill.GRAPHQL];

const cloud = [Skill.AWS, Skill.LAMBDA, Skill.GCP];

const infra = [Skill.SERVERLESS_FRAMEWORK, Skill.TERRAFORM];

const databaseSkills = [Skill.POSTGRESQL, Skill.MYSQL, Skill.MONGODB];

const coreSkills = [
  roles,
  languageSkills,
  frontendSkills,
  backendSkills,
  cloud,
  infra,
  databaseSkills,
];

export const Skills = () => {
  // no flex because I wanted to have hover effect on scrolling skills (component below this one)
  return (
    <>
      <div className="mb-16" />
      <div className="h-fit w-full text-center sm:text-left sm:w-1/3 mb-16 sm:mb-0 inline-block align-top relative z-50">
        <h1>I LOVE my job!</h1>
        <h2>I have fun using all this tech</h2>
      </div>
      <div className="w-full sm:w-2/3 inline-block mb-20 sm:mb-0">
        <div className="flex flex-row gap-4 flex-wrap justify-center relative z-50">
          {coreSkills.map((skills) => (
            <div className="flex flex-row gap-4 flex-wrap justify-center">
              {skills.map((skill) => (
                <span className="skill-badge backdrop-blur-xl">{skill}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
