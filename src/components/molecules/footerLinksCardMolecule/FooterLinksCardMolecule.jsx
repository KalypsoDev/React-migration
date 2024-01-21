import { FooterFeaturesCardAtom } from "../../atoms/cards/footerFeaturesCardAtom/FooterFeaturesCardAtom";
import { FooterSocialMediaCardAtom } from "../../atoms/cards/footerSocialMediaCardAtom/FooterSocialMediaCardAtom";
import footer from "../../../contents/footer.json";

export function FooterLinksCardMolecule() {
  return (
    <div id="footer__links">
      {footer.featuresLinks.map(({ title, items }) => (
        <FooterFeaturesCardAtom title={title} items={items} key={title} />
      ))}
      <div id="links__socialmedia">
        {footer.socialMediaLinks.map(({ href, icon, alt }) => (
          <FooterSocialMediaCardAtom
            href={href}
            icon={icon}
            alt={alt}
            key={alt}
          />
        ))}
      </div>
    </div>
  );
}
