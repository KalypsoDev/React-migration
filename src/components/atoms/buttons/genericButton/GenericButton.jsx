export function GenericButton({href, classButton, idButton, icon, textButton}) {
  return (
    <a href={href}>
      <button id={idButton} className={classButton}>
        {
            icon !== undefined && <i className={icon}></i>
        }
        {textButton}
      </button>
    </a>
  );
}
