import { Link } from "react-router-dom";

export default function Home({ totals, addEntry }) {
  return (
    <>
      <section className="hero wrap">
        <div>
          <h1>Track your meals, workouts and water.</h1>
          <p className="lead">Log what you eat, how long you move and how much you drink, and see your totals add up as you go.</p>
          <div className="row">
            <Link className="btn" to="/log">Log today</Link>
            <Link className="btn ghost" to="/features">See features</Link>
          </div>
        </div>
        <div className="hero-box">
          <h2>Your totals</h2>
          <div className="stat"><span>Calories</span><strong>{totals.calories} kcal</strong></div>
          <div className="stat"><span>Exercise</span><strong>{totals.minutes} min</strong></div>
          <div className="stat"><span>Water</span><strong>{totals.water} ml</strong></div>
          <button className="btn small" onClick={() => addEntry("water", "Glass of water", 250)}>
            Try it: add a glass of water
          </button>
        </div>
      </section>

      <section className="wrap grid3">
        <article className="panel"><h3>Meals</h3><p>Record what you ate with its calories and see your total.</p></article>
        <article className="panel"><h3>Workouts</h3><p>Pick a guided routine or log your own session by minutes.</p></article>
        <article className="panel"><h3>Water</h3><p>One tap adds a glass. Keep track of how much you drink.</p></article>
      </section>
    </>
  );
}
