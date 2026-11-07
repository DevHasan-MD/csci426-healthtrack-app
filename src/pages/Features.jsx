import { useState } from "react";
import { Link } from "react-router-dom";
import { workouts } from "../data/workouts.js";

export default function Features() {
  const [level, setLevel] = useState("All");
  const [query, setQuery] = useState("");

  const shown = workouts.filter(
    (w) => (level === "All" || w.level === level) && w.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="wrap">
      <h1>Features</h1>
      <div className="grid3">
        <article className="panel"><h3>Daily progress</h3><p>Calories, exercise and water, each with its own goal.</p></article>
        <article className="panel"><h3>Weekly chart</h3><p>See how many exercise minutes you logged in the last 7 days.</p></article>
        <article className="panel"><h3>Private by design</h3><p>Data is saved in your browser. No account needed.</p></article>
      </div>

      <h2>Workout library</h2>
      <div className="row filters">
        <input aria-label="Search workouts" placeholder="Search workouts" value={query} onChange={(e) => setQuery(e.target.value)} />
        {["All", "Beginner", "Intermediate"].map((l) => (
          <button key={l} className={level === l ? "chip active" : "chip"} onClick={() => setLevel(l)}>{l}</button>
        ))}
      </div>

      {shown.length === 0 ? (
        <p className="empty">No workouts match. Clear the search or pick another level.</p>
      ) : (
        <div className="grid2">
          {shown.map((w) => (
            <Link key={w.id} to={`/workouts/${w.id}`} className="panel link-card">
              <h3>{w.name}</h3>
              <p>{w.blurb}</p>
              <p className="meta">{w.minutes} min · {w.level} · about {w.burn} kcal</p>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
