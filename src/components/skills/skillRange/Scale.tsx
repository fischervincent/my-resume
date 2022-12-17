import { useState } from "react";

export const Scale = ({
  nbTicks,
  unityShort = "yr",
  unityLong = "years",
  color = "rgba(0,0,0,0.5)",
  onFilterChange,
}: {
  nbTicks: number;
  unityShort?: string;
  unityLong?: string;
  color?: string;
  onFilterChange: (filter: number) => void;
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

  const [filterValue, setFilterValue] = useState(nbTicks * 12);
  const onFilterInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(Number(ev.currentTarget.value));
    onFilterChange(nbTicks * 12 - Number(ev.currentTarget.value));
  };

  return (
    <div className="relative mb-4">
      <input
        type="range"
        className="absolute w-full h-full -left-2 pr-[9px] z-50"
        style={{ direction: "rtl" }}
        min={0}
        max={nbTicks * 12}
        step={6}
        value={filterValue}
        onChange={onFilterInputChange}
      />
      <span
        className="inline-block absolute -top-[6px] right-[8px] -rotate-45 p-[7px]"
        style={{
          border: `solid #0B5CC8`,
          borderWidth: "0 3px 3px 0",
        }}
      />
      <div className="relative mr-6">
        <div className="relative whitespace-nowrap">{ticks}</div>
      </div>
    </div>
  );
};
