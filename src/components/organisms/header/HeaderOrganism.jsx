import { NavbarMolecule } from "../../molecules/NavbarMolecule/NavbarMolecule";

export default function HeaderOrganism() {
  return (
    <header>
      <div id="header__logo">
        <img className="logo" src="/assets/img/logo.svg" alt="Sync's logo" />
      </div>
      <NavbarMolecule/>
    </header>
  );
}
