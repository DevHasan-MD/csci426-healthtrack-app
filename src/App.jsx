import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Features from "./pages/Features.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Log from "./pages/Log.jsx";
import WorkoutDetail from "./pages/WorkoutDetail.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  // All app data lives here and is passed to the pages as props
  const [entries, setEntries] = useState([]);

  function addEntry(kind, label, value) {
    setEntries([{ id: Date.now(), kind, label, value }, ...entries]);
  }

  function deleteEntry(id) {
    setEntries(entries.filter((e) => e.id !== id));
  }

  // Totals: add up the values of one kind of entry
  const sum = (kind) => entries.filter((e) => e.kind === kind).reduce((total, e) => total + e.value, 0);
  const totals = { calories: sum("meal"), minutes: sum("workout"), water: sum("water") };

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home totals={totals} addEntry={addEntry} />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/dashboard" element={<Dashboard entries={entries} totals={totals} />} />
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
