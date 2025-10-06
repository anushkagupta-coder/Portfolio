import React from "react";
import { motion } from "framer-motion";

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
        backgroundColor: "#f0f4f8",
        color: "#212529",
      }}
    >
      {/* Left: Text */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        style={{ flex: "1 1 400px", maxWidth: "500px", padding: "20px" }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "20px",
            color: "#6C63FF",
            position: "relative",
          }}
        >
          About Me
          <span
            style={{
              position: "absolute",
              bottom: -5,
              left: 0,
              height: "4px",
              width: "60px",
              backgroundColor: "#7209b7",
              borderRadius: "2px",
            }}
          ></span>
        </h2>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.6", marginBottom: "20px" }}>
          Hi! I'm Anushka Gupta, a passionate Computer Engineering student who loves Coding.
          I enjoy creating interactive and user-friendly websites, learning new technologies, and building projects that solve real-world problems.
        </p>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.6", marginBottom: "20px" }}>
          My main focus is improving my skills in React, JavaScript, and to learn Cloud Computing and new technologies.
          I am constantly exploring new tools and techniques to enhance my coding abilities and bring creative ideas to life.
        </p>

        {/* Download Resume Button */}
        <motion.a
          href="/Internsip_Resume.pdf"//resume in public folder
          download
          whileHover={{ scale: 1.05, backgroundColor: "#7209b7" }}
          style={{
            display: "inline-block",
            padding: "12px 28px",
            backgroundColor: "#6C63FF",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "500",
            boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
            transition: "all 0.3s ease",
          }}
        >
          Download Resume
        </motion.a>
      </motion.div>

      {/* Right: Image */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        style={{
          flex: "1 1 300px",
          maxWidth: "400px",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <motion.img
          src=" " // Add your image path here
          alt="Anushka Gupta"
          whileHover={{ scale: 1.05 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "100%",
            maxWidth: "300px",
            borderRadius: "50%",
            boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
          }}
        />
      </motion.div>
    </section>
  );
};

export default About;
