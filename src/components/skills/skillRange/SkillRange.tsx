import { Scale } from "./Scale";
import { SkillBar } from "./SkillBar";
import "styles/skills.css";

export const SkillRange = ({
  skills,
}: {
  skills: { skillName: string; experienceLevel: number; group: string }[];
}) => {
  const nbYearsInScale = 6;
  const getWidthFromLevel = (level: number) => {
    return (level / nbYearsInScale) * 100;
  };

  const skillsGroupedByGroup = skills.reduce((acc, skill) => {
    const { group } = skill;
    if (group) {
      if (acc[group]) {
        acc[group].push(skill);
      } else {
        acc[group] = [skill];
      }
    }
    return acc;
  }, {} as { [group: string]: { skillName: string; experienceLevel: number }[] });

  const sortedGroupsByExperience = Object.entries(skillsGroupedByGroup)
    .map(([group, skills]) => {
      const highestExperience = skills.reduce(
        (acc, skill) => Math.max(acc, skill.experienceLevel),
        0
      );
      return { group, skills, highestExperience };
    })
    .sort((a, b) => b.highestExperience - a.highestExperience);

  return (
    <div>
      <div
        className="grid items-center"
        style={{ gridTemplateColumns: "100px auto" }}
      >
        <div />
        <Scale nbTicks={nbYearsInScale} />

        {sortedGroupsByExperience.map(({ skills, group }) => {
          const sortedSkills = skills.sort(
            (a, b) => b.experienceLevel - a.experienceLevel
          );
          return (
            <>
              <div className="mb-2">{group}</div>
              <div className="relative mb-2 mr-6">
                {sortedSkills.map(({ skillName, experienceLevel }) => (
                  <SkillBar
                    skillName={skillName}
                    experienceLevel={experienceLevel}
                    getWidthFromLevel={getWidthFromLevel}
                  />
                ))}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
