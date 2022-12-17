import { useAutoAnimate } from "@formkit/auto-animate/react";
import { SkillBar } from "./SkillBar";

export const GroupSkills = ({
  group,
  sortedSkills,
  getWidthFromLevel,
  disabled = false,
}: {
  group: string;
  sortedSkills: { skillName: string; experienceLevel: number }[];
  getWidthFromLevel: (level: number) => number;
  disabled?: boolean;
}) => {
  const [parent] = useAutoAnimate<HTMLDivElement>();

  return (
    <>
      <div
        className="mb-2"
        key={group}
        style={{
          opacity: disabled ? 0.5 : 1,
        }}
      >
        {group}
      </div>
      <div ref={parent} className="relative mb-2 mr-6" key={`${group}-skills`}>
        {sortedSkills.map(({ skillName, experienceLevel }) => (
          <SkillBar
            key={skillName}
            skillName={skillName}
            experienceLevel={experienceLevel}
            getWidthFromLevel={getWidthFromLevel}
            disabled={disabled}
          />
        ))}
      </div>
    </>
  );
};
