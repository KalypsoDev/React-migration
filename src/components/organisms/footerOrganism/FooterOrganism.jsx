import { FooterLinksCardMolecule } from "../../molecules/footerLinksCardMolecule/FooterLinksCardMolecule";

import "./footerOrganism.css";

export default function FooterOrganism() {
  return (
    <footer>
      <FooterLinksCardMolecule />
      <div id="footer__copyright">
        <p>Copyright © 2020 Inovatik - All rights reserved</p>
      </div>
    </footer>
  );
}
