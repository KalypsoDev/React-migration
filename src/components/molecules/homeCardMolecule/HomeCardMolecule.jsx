import { HomeCardAtom } from "../../atoms/cards/homeCardAtom/HomeCardAtom";
import statistics from "../../../contents/statistics.json";

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
