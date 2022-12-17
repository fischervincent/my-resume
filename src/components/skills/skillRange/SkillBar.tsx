export const SkillBar = ({
  skillName,
  experienceLevel,
  getWidthFromLevel,
}: {
  skillName: string;
  experienceLevel: number;
  getWidthFromLevel: (level: number) => number;
}) => {
  const width = getWidthFromLevel(experienceLevel);

  return (
    <div className="my-2 hiddenAtFirst hiddenClip">
      <div
        className="h-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white absolute t-0 l-0 overflow-hidden whitespace-nowrap"
        style={{
          width: `100%`,
          clipPath: `polygon(0 0, ${width}% 0, ${width}% 100%, 0 100%)`,
        }}
      >
        {skillName}
      </div>
      <div className="h-6 text-black t-0 l-0 whitespace-nowrap">
        {skillName}
      </div>
    </div>
  );
};
