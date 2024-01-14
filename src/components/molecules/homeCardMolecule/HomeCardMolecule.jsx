import { HomeCardAtom } from "../../atoms/homeCardAtom/HomeCardAtom";
import statistics from "../../../contents/statistics.json";
import "./homeCardMolecule.module.css";

export function HomeCardMolecule() {
  return (
    <div id="home__cards">
      {statistics.map(({ idIcon, icon, titleIcon }) => (
        <HomeCardAtom
          idIcon={idIcon}
          icon={icon}
          titleIcon={titleIcon}
          key={icon}
        />
      ))}
    </div>
  );
}
