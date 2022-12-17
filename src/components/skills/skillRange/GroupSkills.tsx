import { useAutoAnimate } from "@formkit/auto-animate/react";
import { SkillBar } from "./SkillBar";

export const GroupSkills = ({
  group,
  sortedSkills,
  getWidthFromLevel,
  disabled = false,
}: {
  group: string;
  sortedSkills: {
    skillName: string;
    experienceLevel: number;
    isFavorite?: boolean;
  }[];
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
        {sortedSkills.map(
          ({ skillName, experienceLevel, isFavorite = false }) => (
            <div className="relative">
              {isFavorite && (
                <span className="absolute -left-6">
                  <span className="tooltip" data-tip="favorite">
                    <img
                      src="/assets/img/star.svg"
                      alt="favorite"
                      width={20}
                      height={20}
                      style={{
                        opacity: disabled ? 0.5 : 1,
                      }}
                    />
                  </span>
                </span>
              )}
              <SkillBar
                key={skillName}
                skillName={skillName}
                experienceLevel={experienceLevel}
                getWidthFromLevel={getWidthFromLevel}
                disabled={disabled}
              />
            </div>
          )
        )}
      </div>
    </>
  );
};
