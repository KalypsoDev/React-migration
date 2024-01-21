export function HomeCardAtom({ idIcon, icon, titleIcon }) {
  return (
    <div className="card--colored">
      <div className="card--padding" id={`${idIcon}--background`}>
        <i className={icon} />
      </div>
      <h4>{titleIcon}</h4>
    </div>
  );
}
