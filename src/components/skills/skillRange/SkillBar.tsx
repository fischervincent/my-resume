export const SkillBar = ({
  skillName,
  experienceLevel,
  getWidthFromLevel,
  disabled = false,
}: {
  skillName: string;
  experienceLevel: number;
  getWidthFromLevel: (level: number) => number;
  disabled?: boolean;
}) => {
  const width = getWidthFromLevel(experienceLevel);

  return (
    <div className="my-2">
      <div
        className={`h-6 absolute t-0 l-0 overflow-hidden whitespace-nowrap`}
        style={{
          width: `100%`,
          clipPath: `polygon(0 0, ${width}% 0, ${width}% 100%, 0 100%)`,
          color: disabled ? "rgba(0,0,0,0.1)" : "white",
          opacity: disabled ? 0.5 : 1,
          background: disabled
            ? "rgba(0,0,0,0.3)"
            : "linear-gradient(90deg, rgba(99,102,240,1) 0%, rgba(168,85,247,1) 36%, rgba(236,72,153,1) 100%)",
        }}
      >
        {skillName}
      </div>
      <div
        className="h-6 text-black t-0 l-0 whitespace-nowrap"
        style={{
          opacity: disabled ? 0.5 : 1,
        }}
      >
        {skillName}
      </div>
    </div>
  );
};
