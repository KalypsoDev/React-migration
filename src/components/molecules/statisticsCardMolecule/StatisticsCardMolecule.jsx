import { StatisticsCardAtom } from "../../atoms/cards/statisticsCardAtom/StatisticsCardAtom";
import statistics from "../../../contents/statistics.json";
import "./statisticsCardMolecule.module.css";

export function StatisticsCardMolecule() {
  return (
    <div id="statistics__cards">
      {statistics.map(({ idIcon, icon, value, label }) => (
        <StatisticsCardAtom
          idIcon={idIcon}
          icon={icon}
          value={value}
          label={label}
          key={icon}
        />
      ))}
    </div>
  );
}
