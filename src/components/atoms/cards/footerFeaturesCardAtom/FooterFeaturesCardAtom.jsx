export function FooterFeaturesCardAtom({ title, items }) {
  return (
    <div className="links__cards">
      <h3>{title}</h3>
      <ul>
        {items.map(({ icon, href, text }) => (
          <li key={text}>
            {icon && (
              <a href={href}>
                <i className={icon} />
              </a>
            )}
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}
