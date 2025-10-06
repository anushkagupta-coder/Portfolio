import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #6C63FF, #FF6584)", color: "white", textAlign: "center", padding: "0 20px" }}>
      
      <div>
        <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>Hi, I'm Anushka Gupta 👋</h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>I'm a Computer Engineering student </p>
        
        {/* Buttons or links to projects/contact */}
        <div style={{ marginBottom: "20px" }}>
          <a href="projects" style={{ marginRight: "10px", padding: "10px 20px", borderRadius: "8px", backgroundColor: "white", color: "#6C63FF", fontWeight: "bold", textDecoration: "none", transition: "0.3s" }}>My Projects</a>
          <a href="contact" style={{ padding: "10px 20px", borderRadius: "8px", border: "2px solid white", color: "white", fontWeight: "bold", textDecoration: "none", transition: "0.3s" }}>Contact Me</a>
        </div>

        {/* Social icons */}
        <div style={{ fontSize: "1.5rem", display: "flex", justifyContent: "center", gap: "20px" }}>
          <a href="https://github.com/anushkagupta-coder" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/anushka-gupta-aa9b40286/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="anushka612004@gmail.com"><FaEnvelope /></a>
        </div>
      </div>

    </section>
  );
};

export default Home;
