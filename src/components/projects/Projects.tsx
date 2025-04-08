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

const skillOptions = [
  {
    label: "Roles",
    options: [
      { label: Skill.BACKEND, value: Skill.BACKEND },
      { label: Skill.FRONTEND, value: Skill.FRONTEND },
      { label: Skill.FULLSTACK, value: Skill.FULLSTACK },
      { label: Skill.TECHLEAD, value: Skill.TECHLEAD },
    ],
  },
  {
    label: "Programming Languages",
    options: [
      { label: Skill.JAVASCRIPT, value: Skill.JAVASCRIPT },
      { label: Skill.TYPESCRIPT, value: Skill.TYPESCRIPT },
      { label: Skill.PHP, value: Skill.PHP },
      { label: Skill.JAVA, value: Skill.JAVA },
    ],
  },
  {
    label: "Frontend",
    options: [
      { label: Skill.REACTJS, value: Skill.REACTJS },
      { label: Skill.REACT_NATIVE, value: Skill.REACT_NATIVE },
    ],
  },
  {
    label: "Backend",
    options: [
      { label: Skill.NODEJS, value: Skill.NODEJS },
      { label: Skill.GRAPHQL, value: Skill.GRAPHQL },
      { label: Skill.NESTJS, value: Skill.NESTJS },
      { label: Skill.DJANGO, value: Skill.DJANGO },
    ],
  },
  {
    label: "Databases",
    options: [
      { label: Skill.MONGODB, value: Skill.MONGODB },
      { label: Skill.POSTGRESQL, value: Skill.POSTGRESQL },
      { label: Skill.MYSQL, value: Skill.MYSQL },
      { label: Skill.REDIS, value: Skill.REDIS },
      { label: Skill.AWS_DYNAMODB, value: Skill.AWS_DYNAMODB },
    ],
  },
  {
    label: "Test",
    options: [
      { label: Skill.JEST, value: Skill.JEST },
      { label: Skill.CUCUMBER, value: Skill.CUCUMBER },
    ],
  },
  {
    label: "Cloud & Infra & CI/CD",
    options: [
      { label: Skill.AWS, value: Skill.AWS },
      { label: Skill.AWS_LAMBDA, value: Skill.AWS_LAMBDA },
      { label: Skill.AWS_STEP_FUNCTION, value: Skill.AWS_STEP_FUNCTION },
      { label: Skill.AWS_SQS_SNS, value: Skill.AWS_SQS_SNS },
      { label: Skill.AWS_API_GATEWAY, value: Skill.AWS_API_GATEWAY },
      {
        label: Skill.AWS_AURORA_SERVERLESS,
        value: Skill.AWS_AURORA_SERVERLESS,
      },
      { label: Skill.AWS_WAF, value: Skill.AWS_WAF },
      { label: Skill.TERRAFORM, value: Skill.TERRAFORM },
      { label: Skill.SERVERLESS_FRAMEWORK, value: Skill.SERVERLESS_FRAMEWORK },
      { label: Skill.AZURE, value: Skill.AZURE },
      { label: Skill.GCP, value: Skill.GCP },
      { label: Skill.MICRO_SERVICES, value: Skill.MICRO_SERVICES },
      {
        label: Skill.SERVERLESS_ARCHITECTURE,
        value: Skill.SERVERLESS_ARCHITECTURE,
      },
      { label: Skill.CIRCLECI, value: Skill.CIRCLECI },
      { label: Skill.GITHUB_ACTIONS, value: Skill.GITHUB_ACTIONS },
      { label: Skill.KAFKA, value: Skill.KAFKA },
    ],
  },
  {
    label: "Methodologies & Practices",
    options: [
      { label: Skill.TDD, value: Skill.TDD },
      { label: Skill.CLEAN_ARCHITECTURE, value: Skill.CLEAN_ARCHITECTURE },
      { label: Skill.CLEAN_CODE, value: Skill.CLEAN_CODE },
      { label: Skill.DDD, value: Skill.DDD },
      { label: Skill.SCRUM, value: Skill.SCRUM },
    ],
  },
  {
    label: "Languages",
    options: [{ label: Skill.ENGLISH, value: Skill.ENGLISH }],
  },
];

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
    <div className="flex flex-col gap-4">
      <div className="max-w-[500px]">
        <h5 className="text-sm font-extralight">
          Filter by skills, roles or methodologies
        </h5>
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
