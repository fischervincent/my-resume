import { Skill } from "./skills";

const coreSkills = [
  {
    category: "Roles",
    skills: [Skill.TECHLEAD, Skill.FRONTEND, Skill.BACKEND],
  },
  { category: "Languages", skills: [Skill.TYPESCRIPT, Skill.JAVASCRIPT] },
  {
    category: "Frontend",
    skills: [Skill.REACT, Skill.REACT_NATIVE, Skill.REDUX],
  },
  { category: "Backend", skills: [Skill.NODE, Skill.NESTJS, Skill.GRAPHQL] },
  { category: "Cloud", skills: [Skill.AWS, Skill.LAMBDA, Skill.GCP] },
  { category: "Infra", skills: [Skill.SERVERLESS_FRAMEWORK, Skill.TERRAFORM] },
  {
    category: "Database",
    skills: [Skill.POSTGRESQL, Skill.MYSQL, Skill.MONGODB],
  },
];

export const Skills = () => {
  // no flex because I wanted to have hover effect on scrolling skills (component below this one)
  return (
    <>
      <table>
        {coreSkills.map(({ category, skills }) => (
          <tr>
            <td>
              <h3 className="pr-4">{category}</h3>
            </td>
            <td>
              <div className="flex-1 flex flex-row gap-4 flex-wrap px-4">
                {skills.map((skill) => (
                  <span className="skill-badge">{skill}</span>
                ))}
              </div>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};
