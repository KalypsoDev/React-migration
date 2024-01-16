export function GenericButton({href, classButton, icon, textButton}) {
  return (
    <a href={href}>
      <button className={classButton}>
        <i className={icon}></i>{textButton}
      </button>
    </a>
  );
}
