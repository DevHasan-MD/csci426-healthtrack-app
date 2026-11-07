import Progress from "../components/Progress.jsx";
import { daysAgo } from "../utils.js";

export default function Dashboard({ entries, totals, goals, setGoals, addEntry, resetAll }) {
  // Exercise minutes for each of the last 7 days
  const week = [6, 5, 4, 3, 2, 1, 0].map((n) => {
    const date = daysAgo(n);
    const minutes = entries
      .filter((e) => e.date === date && e.kind === "workout")
      .reduce((total, e) => total + e.value, 0);
    const label = new Date(date + "T00:00").toLocaleDateString(undefined, { weekday: "short" });
    return { date, minutes, label };
  });
  const max = Math.max(goals.minutes, ...week.map((d) => d.minutes));

  function changeGoal(key, text, min, maxValue) {
    const num = Math.max(min, Math.min(maxValue, Number(text) || min));
    setGoals({ ...goals, [key]: num });
  }

  return (
    <section className="wrap">
      <h1>Dashboard</h1>
      <div className="grid2">
        <article className="panel">
          <h2>Today</h2>
          <Progress label="Calories" value={totals.calories} goal={goals.calories} unit="kcal" color="var(--sun)" />
          <Progress label="Exercise" value={totals.minutes} goal={goals.minutes} unit="min" color="var(--sea)" />
          <Progress label="Water" value={totals.water} goal={goals.water} unit="ml" color="var(--tide)" />
          <button className="btn small" onClick={() => addEntry("water", "Glass of water", 250)}>Add a glass of water</button>
        </article>

        <article className="panel">
          <h2>Exercise this week</h2>
          <div className="bars" role="img" aria-label="Exercise minutes for the last 7 days">
            {week.map((d) => (
              <div key={d.date} className="bar-col">
                <span className="bar-val">{d.minutes}</span>
                <div className="bar" style={{ height: `${(d.minutes / max) * 100}%` }} />
                <span className="bar-label">{d.label}</span>
              </div>
            ))}
          </div>
        </article>
      </div>

      <h2>Daily goals</h2>
      <div className="grid3">
        <label className="panel">Calories (kcal)
          <input type="number" value={goals.calories} onChange={(e) => changeGoal("calories", e.target.value, 500, 6000)} />
        </label>
        <label className="panel">Exercise (min)
          <input type="number" value={goals.minutes} onChange={(e) => changeGoal("minutes", e.target.value, 5, 300)} />
        </label>
        <label className="panel">Water (ml)
          <input type="number" value={goals.water} onChange={(e) => changeGoal("water", e.target.value, 250, 6000)} />
        </label>
      </div>
      <button className="ghost" onClick={() => window.confirm("Delete all logged data?") && resetAll()}>Reset all data</button>
    </section>
  );
}
