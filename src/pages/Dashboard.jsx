const units = { meal: "kcal", workout: "min", water: "ml" };

export default function Dashboard({ entries, totals }) {
  return (
    <section className="wrap">
      <h1>Dashboard</h1>
      <div className="grid3">
        <article className="panel"><p className="meta">Calories</p><p className="big">{totals.calories} kcal</p></article>
        <article className="panel"><p className="meta">Exercise</p><p className="big">{totals.minutes} min</p></article>
        <article className="panel"><p className="meta">Water</p><p className="big">{totals.water} ml</p></article>
      </div>

      <h2>Everything you logged</h2>
      {entries.length === 0 ? (
        <p className="empty">Nothing logged yet. Go to the Log page to add a meal, workout or glass of water.</p>
      ) : (
        <ul className="list">
          {entries.map((e) => (
            <li key={e.id}>
              <span>{e.label}</span>
              <span className="meta">{e.value} {units[e.kind]}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
