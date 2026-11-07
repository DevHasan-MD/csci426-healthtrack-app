import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Features from "./pages/Features.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Log from "./pages/Log.jsx";
import WorkoutDetail from "./pages/WorkoutDetail.jsx";
import Contact from "./pages/Contact.jsx";
import { todayStr } from "./utils.js";

const defaultGoals = { calories: 2200, minutes: 45, water: 2000 };

export default function App() {
  // All app data lives here and is passed to pages as props
  const [entries, setEntries] = useState(() => JSON.parse(localStorage.getItem("ht-entries") || "[]"));
  const [goals, setGoals] = useState(() => JSON.parse(localStorage.getItem("ht-goals") || JSON.stringify(defaultGoals)));

  // Save to localStorage whenever the data changes
  useEffect(() => {
    localStorage.setItem("ht-entries", JSON.stringify(entries));
  }, [entries]);
  useEffect(() => {
    localStorage.setItem("ht-goals", JSON.stringify(goals));
  }, [goals]);

  function addEntry(kind, label, value) {
    setEntries([{ id: Date.now(), date: todayStr(), kind, label, value }, ...entries]);
  }

  function deleteEntry(id) {
    setEntries(entries.filter((e) => e.id !== id));
  }

  function resetAll() {
    setEntries([]);
    setGoals(defaultGoals);
  }

  // Today's totals
  const todays = entries.filter((e) => e.date === todayStr());
  const sum = (kind) => todays.filter((e) => e.kind === kind).reduce((total, e) => total + e.value, 0);
  const totals = { calories: sum("meal"), minutes: sum("workout"), water: sum("water") };

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home totals={totals} goals={goals} addEntry={addEntry} />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/dashboard" element={<Dashboard entries={entries} totals={totals} goals={goals} setGoals={setGoals} addEntry={addEntry} resetAll={resetAll} />} />
          <Route path="/log" element={<Log entries={entries} addEntry={addEntry} deleteEntry={deleteEntry} />} />
          <Route path="/workouts/:id" element={<WorkoutDetail addEntry={addEntry} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<section className="wrap"><h1>Page not found</h1><p>Use the menu to get back on track.</p></section>} />
        </Routes>
      </main>
      <footer className="footer">HealthTrack · For CSCI426 · </footer>
    </>
  );
}
