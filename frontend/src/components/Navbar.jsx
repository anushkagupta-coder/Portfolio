import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 50px",
      background: "linear-gradient(90deg, #809bce)",
      color: "white",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
    }}>
      
      {/* Logo / Name */}
      <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
        PORTFOLIO
      </div>
      
      {/* Links */}
      <div style={{ display: "flex", gap: "25px", fontWeight: "500" }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/projects" style={linkStyle}>Projects</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </div>
    </nav>
  );
};

// Hover effect style
const linkStyle = {
  color: "white",
  textDecoration: "none",
  transition: "all 0.3s ease",
  position: "relative",
};

export default Navbar;
