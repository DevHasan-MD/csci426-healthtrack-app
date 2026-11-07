import { useParams, useNavigate, Link } from "react-router-dom";
import { workouts } from "../data/workouts.js";

export default function WorkoutDetail({ addEntry }) {
  const { id } = useParams(); // dynamic route: /workouts/:id
  const navigate = useNavigate();
  const workout = workouts.find((w) => w.id === id);

  if (!workout) {
    return (
      <section className="wrap narrow">
        <h1>Workout not found</h1>
        <p>This routine doesn't exist. <Link to="/features">Browse the workout library</Link>.</p>
      </section>
    );
  }

  function finish() {
    addEntry("workout", workout.name, workout.minutes);
    navigate("/dashboard");
  }

  return (
    <section className="wrap narrow">
      <Link to="/features">Back to library</Link>
      <h1>{workout.name}</h1>
      <p className="lead">{workout.blurb}</p>
      <p className="meta">{workout.minutes} min · {workout.level} · about {workout.burn} kcal</p>
      <h2>Steps</h2>
      <ol className="steps">{workout.steps.map((s) => <li key={s}>{s}</li>)}</ol>
      <button className="btn" onClick={finish}>Finish and log {workout.minutes} min</button>
    </section>
  );
}
