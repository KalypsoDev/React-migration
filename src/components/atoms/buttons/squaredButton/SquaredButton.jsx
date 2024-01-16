export function SquaredButton({idButton, icon, idIcon, textButton}) {
  return (
    <button id={idButton}>
      <i
        className={icon}
        aria-hidden="true"
        id={idIcon}
      ></i>
      <b>{textButton}</b>
    </button>
  );
}
