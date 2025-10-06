import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section style={{ padding: "60px 0", textAlign: "center" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "30px" }}>Get in Touch</h2>

      <div
        style={{
          fontSize: "3rem",
          display: "flex",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {/* GitHub */}
        <a
          href="https://github.com/anushkagupta-coder"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#333" }}
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/anushka-gupta-aa9b40286/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#0077B5" }}
        >
          <FaLinkedin />
        </a>

        {/* Email */}
        <a href="mailto:anushka612004@gmail.com" style={{ color: "#D44638" }}>
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};

export default Contact;
