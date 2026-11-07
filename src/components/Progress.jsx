// A simple progress bar: props are label, value, goal, unit and color
export default function Progress({ label, value, goal, unit, color }) {
  const percent = Math.min((value / goal) * 100, 100);
  return (
    <div className="progress">
      <div className="progress-top">
        <span>{label}</span>
        <span>{value} / {goal} {unit}</span>
      </div>
      <div className="track" role="progressbar" aria-valuenow={Math.round(percent)} aria-valuemin="0" aria-valuemax="100" aria-label={label}>
        <div className="fill" style={{ width: `${percent}%`, background: color }} />
      </div>
    </div>
  );
}
