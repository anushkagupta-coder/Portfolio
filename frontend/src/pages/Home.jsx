import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, } from "react-icons/fa";
import {SiLeetcode} from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
import About from "./About";
const Home = () => {
  return (
    <>
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        // background: "linear-gradient(135deg, #a2d2ff, #cdb4db, #ffc8dd)",
        color: "#333",
        textAlign: "center",
        padding: "40px 20px",
        overflow: "hidden",
      }}
    >


        <motion.h1
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ fontSize: "3rem", marginBottom: "20px" }}
        >
          Hi, I'm{" "}
          <span style={{ color: "#0077b6", fontWeight: "700" }}>
            <Typewriter
              words={["Anushka Gupta", "a Full-Stack Developer"]}
              loop={0} // 0 = infinite
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </motion.h1>
        


      {/* Floating gradient animation background */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(270deg, #a2d2ff, #ffc8dd, #bde0fe)",
          backgroundSize: "600% 600%",
          zIndex: 0,
          opacity: 0.4,
        }}
      />

      <div style={{ zIndex: 1 }}>
        {/* Name Animation */}
        <motion.h1
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ fontSize: "3rem", marginBottom: "10px"}}
        >
          Hi, I'm <span style={{ color: "#0077b6" }}>Anushka Gupta</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          style={{ fontSize: "1.5rem", marginBottom: "25px" }}
        >
          A passionate <span style={{ color: "#7209b7" }}>Computer Engineering</span> student 🚀
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          style={{ marginBottom: "30px", display: "flex", justifyContent: "center", gap: "15px" }}
        >
          <a
            href="projects"
            style={{
              padding: "12px 25px",
              borderRadius: "10px",
              backgroundColor: "#ffffff",
              color: "#0077b6",
              fontWeight: "bold",
              textDecoration: "none",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            My Projects
          </a>
          <a
            href="contact"
            style={{
              padding: "12px 25px",
              borderRadius: "10px",
              border: "2px solid white",
              color: "white",
              fontWeight: "bold",
              textDecoration: "none",
              background: "#0077b6",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            Contact Me
          </a>
        </motion.div>

        {/* Floating Social Icons */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          style={{ fontSize: "1.8rem", display: "flex", justifyContent: "center", gap: "25px" }}
        >
          <a href="https://github.com/anushkagupta-coder" target="_blank" rel="noreferrer" style={{ color: "#333" }}>
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/anushka-gupta-aa9b40286/" target="_blank" rel="noreferrer" style={{ color: "#0077b6" }}>
            <FaLinkedin />
          </a>
          <a href="mailto:anushka612004@gmail.com" style={{ color: "#d62828" }}>
            <FaEnvelope />
          </a>
          <a href="https://leetcode.com/u/anushkagupta123/" style={{ color: "#151414" }}>
            <SiLeetcode /> 
          </a>
        </motion.div>

        {/* Cards Section */}
        <div
          style={{
            marginTop: "60px",
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {/* Left Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              background: "white",
              color: "#333",
              padding: "25px",
              borderRadius: "15px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
              width: "280px",
            }}
          >
            <h2 style={{ color: "#0077b6" }}>Skills</h2>
            <p>Full-stack Developer | React | Node.js | MongoDB | MySQL | GitHub |DSA |Next and Supabase</p>
          </motion.div>

          {/* Right Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              background: "white",
              color: "#333",
              padding: "25px",
              borderRadius: "15px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
              width: "280px",
            }}
          >
            <h2 style={{ color: "#7209b7" }}>About Me</h2>
            <p>175+ Leetcode questions | CGPA 9.62 | Aspiring Engineer seeking industrial exposure 💼</p>
          </motion.div>
        </div>
      </div>
    </section>
    <About/>
    </>
  );
};

export default Home;
