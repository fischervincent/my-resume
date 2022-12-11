import { Skill } from "components/skills";

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
      <p>Here are my main skills.</p>
      <table className="border-separate border-spacing-y-4">
        {coreSkills.map(({ category, skills }) => (
          <tr>
            <td>
              <span className="pr-8 text-lg">{category}</span>
            </td>
            <td>
              <div>
                {skills.map((skill) => (
                  <span className="skill-badge mr-5">{skill}</span>
                ))}
              </div>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};
