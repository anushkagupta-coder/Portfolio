import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px", background: "#f2f2f2" }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/projects">Project</Link>
    </nav>
  );
};

export default Navbar





