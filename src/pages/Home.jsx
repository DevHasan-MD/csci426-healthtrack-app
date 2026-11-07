import { Link } from "react-router-dom";
import Progress from "../components/Progress.jsx";

export default function Home({ totals, goals, addEntry }) {
  return (
    <>
      <section className="hero wrap">
        <div>
          <h1>Close your three goals every day.</h1>
          <p className="lead">Log meals, workouts and water in seconds. Watch calories, exercise and hydration fill up as your day goes on.</p>
          <div className="row">
            <Link className="btn" to="/log">Log today</Link>
            <Link className="btn ghost" to="/features">See features</Link>
          </div>
        </div>
        <div className="hero-box">
          <h2>Today</h2>
          <Progress label="Calories" value={totals.calories} goal={goals.calories} unit="kcal" color="var(--sun)" />
          <Progress label="Exercise" value={totals.minutes} goal={goals.minutes} unit="min" color="var(--sea)" />
          <Progress label="Water" value={totals.water} goal={goals.water} unit="ml" color="var(--tide)" />
          <button className="btn small" onClick={() => addEntry("water", "Glass of water", 250)}>
            Try it: add a glass of water
          </button>
        </div>
      </section>

      <section className="wrap grid3">
        <article className="panel"><h3>Meals</h3><p>Record what you ate with its calories and see your daily total.</p></article>
        <article className="panel"><h3>Workouts</h3><p>Pick a guided routine or log your own session by minutes.</p></article>
        <article className="panel"><h3>Water</h3><p>One tap adds a glass. Reach your goal before dinner.</p></article>
      </section>
    </>
  );
}
