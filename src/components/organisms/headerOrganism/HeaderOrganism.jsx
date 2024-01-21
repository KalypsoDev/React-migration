import { NavbarMolecule } from "../../molecules/NavbarMolecule/NavbarMolecule";

import "./headerOrganism.css"

export default function HeaderOrganism({ currentSection }) {
  return (
    <header>
      <div id="header__logo">
        <img className="logo" src="/assets/img/logo.svg" alt="Sync's logo" />
      </div>
      <NavbarMolecule currentSection={currentSection} />
    </header>
  );
}
