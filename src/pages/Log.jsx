import { useState } from "react";

const kinds = {
  meal: { title: "Meal", unit: "kcal", placeholder: "Oatmeal with banana" },
  workout: { title: "Workout", unit: "min", placeholder: "Evening walk" },
  water: { title: "Water", unit: "ml", placeholder: "Bottle of water" }
};

export default function Log({ entries, addEntry, deleteEntry }) {
  const [kind, setKind] = useState("meal");
  const [label, setLabel] = useState("");
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [saved, setSaved] = useState("");

  function submit(e) {
    e.preventDefault();
    const num = Number(value);
    if (!label.trim()) return setError("Enter a name for this entry.");
    if (!num || num <= 0 || num > 10000) return setError(`Enter a ${kinds[kind].unit} amount between 1 and 10000.`);
    addEntry(kind, label.trim(), num);
    setSaved(`${label.trim()} saved`);
    setLabel("");
    setValue("");
    setError("");
  }

  function pick(k) {
    setKind(k);
    setError("");
    setSaved("");
  }

  return (
    <section className="wrap narrow">
      <h1>Log an entry</h1>
      <div className="row">
        {Object.keys(kinds).map((k) => (
          <button key={k} className={kind === k ? "chip active" : "chip"} onClick={() => pick(k)}>{kinds[k].title}</button>
        ))}
      </div>

      <form className="panel form" onSubmit={submit} noValidate>
        <label>Name
          <input value={label} onChange={(e) => setLabel(e.target.value)} placeholder={kinds[kind].placeholder} />
        </label>
        <label>Amount ({kinds[kind].unit})
          <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
        </label>
        {error && <p className="error" role="alert">{error}</p>}
        {saved && <p className="ok" role="status">{saved}</p>}
        <button className="btn" type="submit">Save entry</button>
      </form>

      <h2>Recent entries</h2>
      {entries.length === 0 ? (
        <p className="empty">Nothing logged yet. Add your first meal, workout or glass of water above.</p>
      ) : (
        <ul className="list">
          {entries.slice(0, 8).map((e) => (
            <li key={e.id}>
              <span>{e.label} <span className="meta">{e.value} {kinds[e.kind].unit} · {e.date}</span></span>
              <button className="ghost small" onClick={() => deleteEntry(e.id)} aria-label={`Delete ${e.label}`}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
