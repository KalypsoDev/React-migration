export function FooterSocialMediaCardAtom({ href, icon, alt }) {
  return (
      <a href={href}>
        <i className={icon} alt={alt}></i>
      </a>
  );
}
