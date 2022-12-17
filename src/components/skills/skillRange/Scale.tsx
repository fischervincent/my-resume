export const Scale = ({
  nbTicks,
  unityShort = "yr",
  unityLong = "years",
  color = "rgba(0,0,0,0.5)",
}: {
  nbTicks: number;
  unityShort?: string;
  unityLong?: string;
  color?: string;
}) => {
  const Tick = (posX: number, text?: string) => (
    <div className="absolute" style={{ top: "-35px", left: `${posX}%` }}>
      <span
        className={`h-4 border-l-2 absolute top-[27px]`}
        style={{ borderColor: color, left: "calc(50% - 2px)" }}
      />
      <span className="absolute" style={{ transform: "translateX(-50%)" }}>
        {text ?? ""}
      </span>
    </div>
  );

  const firstTick = Tick(0);
  const lastTick = Tick(100, `${nbTicks}+ ${unityLong}`);

  const midTicks = [];
  for (let i = 1; i < nbTicks; i++) {
    midTicks.push(Tick(i * (100 / nbTicks), `${i}${unityShort}`));
  }

  const ticks = [firstTick, ...midTicks, lastTick];

  return (
    <div
      className="relative"
      style={{
        borderBottom: `1px solid ${color}`,
      }}
    >
      <span
        className="inline-block absolute right-0 -top-[6px] -rotate-45 p-[5px]"
        style={{
          border: `solid ${color}`,
          borderWidth: "0 2px 2px 0",
        }}
      />
      <div className="relative mr-6">
        <div className="relative whitespace-nowrap">{ticks}</div>
      </div>
    </div>
  );
};
