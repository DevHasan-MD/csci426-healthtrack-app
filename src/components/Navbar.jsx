import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [["/", "Home"], ["/features", "Features"], ["/dashboard", "Dashboard"], ["/log", "Log"], ["/about", "About"], ["/contact", "Contact"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <NavLink to="/" className="logo" onClick={() => setOpen(false)}>HealthTrack</NavLink>
      <button className="menu-btn" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
      <nav className={open ? "links open" : "links"}>
        {links.map(([to, label]) => (
          <NavLink key={to} to={to} end={to === "/"} onClick={() => setOpen(false)}>{label}</NavLink>
        ))}
      </nav>
    </header>
  );
}
