import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", flexDirection: "column", 
    justifyContent: "flex-start", background: "linear-gradient(135deg, #47b7d9ff)", 
    color: "white", textAlign: "center", padding: "0px 20px", }}>
      
      <div>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>Hi, I'm Anushka Gupta</h1>
        <p style={{ fontSize: "1.7rem", marginBottom: "20px" }}>I'm a Computer Engineering student </p>
        
        {/* Buttons or links to projects/contact */}
        <div style={{ marginBottom: "20px" }}>
          <a href="projects" style={{ marginRight: "10px", padding: "10px 20px", borderRadius: "8px", backgroundColor: "white", color: "#101278ff", fontWeight: "bold", textDecoration: "none", transition: "0.3s" }}>My Projects</a>
          <a href="contact" style={{ padding: "10px 20px", borderRadius: "8px", border: "2px solid white", color: "white", fontWeight: "bold", textDecoration: "none", transition: "0.3s" }}>Contact Me</a>
        </div>

        {/* Social icons */}
        <div style={{ fontSize: "1.5rem", display: "flex", justifyContent: "center", gap: "20px" }}>
          <a href="https://github.com/anushkagupta-coder" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/anushka-gupta-aa9b40286/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="anushka612004@gmail.com"><FaEnvelope /></a>
        </div>

        <div className="left-card">
            <h2> Skills </h2>
            <p> Full-stack developer | React | Node.js | MySQL,MongoDB |Git </p>
        </div>

        <div className="right-card">
            
            <p>3rd Year student CGPA - 9.62 </p>
                <p>2027 Graduate Looking for industrial experience 
                and exposure in IT industry </p>
        </div>

      </div>

    </section>
  );
};

export default Home;
