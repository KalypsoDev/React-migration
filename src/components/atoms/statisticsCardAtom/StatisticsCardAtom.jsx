import "./statisticsCardAtom.module.css"

export function StatisticsCardAtom({ idIcon, icon, value, label }) {
  return (
    <div className="card--colored card--grey">
      <div id={idIcon}>
        <i className={icon}/>
      </div>
      <h2>{value}</h2>
      <p>{label}</p>
    </div>
  );
}
