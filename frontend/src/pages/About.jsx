import React from "react";
 

const About = () => {
  return (
    <section
      id="about"
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 20px",
        backgroundColor: "#f8f9fa",
        color: "#212529",
      }}
    >
      {/* Left: Text */}
      <div style={{ flex: "1 1 400px", maxWidth: "500px", padding: "20px" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#6C63FF" }}>About Me</h2>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.6", marginBottom: "20px" }}>
          Hi! I'm Anushka Gupta, a passionate Computer Engineering student who loves web development. I enjoy creating interactive and user-friendly websites, learning new technologies, and building projects that solve real-world problems.
        </p>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.6", marginBottom: "20px" }}>
          My main focus is improving my skills in React, JavaScript, and modern web development practices. I am constantly exploring new tools and techniques to enhance my coding abilities and bring creative ideas to life.
        </p>

        {/* Download Resume Button */}
        <a
          href="/Internship Resume pdf.pdf" // file in public folder
          download
          style={{
            display: "inline-block",
            padding: "10px 25px",
            backgroundColor: "#6C63FF",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "500",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
          onMouseOut={(e) => e.target.style.transform = "scale(1)"}
        >
          Download Resume
        </a>
      </div>

      {/* Right: Image */}
      <div style={{ flex: "1 1 300px", maxWidth: "400px", padding: "20px", textAlign: "center" }}>
        <img
          src=" "
          alt="Anushka Gupta"
          style={{
            width: "100%",
            maxWidth: "300px",
            borderRadius: "50%",
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
          }}
        />
      </div>
    </section>
  );
};

export default About;
