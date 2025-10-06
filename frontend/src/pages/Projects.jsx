import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  // Animation variants
  const projectVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="projects"
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "50px 20px",
        backgroundColor: "#f8f9fa",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ marginBottom: "40px", color: "#6C63FF" }}
      >
        My Projects
      </motion.h2>

      {/* Project 1 */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={projectVariant}
        transition={{ duration: 0.8 }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          maxWidth: "1000px",
          marginBottom: "50px",
          flexWrap: "wrap",
        }}
      >
        {/* Left side: Image */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{ flex: "1 1 400px" }}
        >
          <img
            src="https://via.placeholder.com/400x250"
            alt="Project 1"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </motion.div>

        {/* Right side: Description */}
        <motion.div
          whileHover={{ x: 5 }}
          style={{ flex: "1 1 400px" }}
        >
          <h3>Restaurant Booking App</h3>
          <p>
            This is a restaurant booking platform I built using React and Node.js, connected to MongoDB [MERN].
            Users can reserve tables. Future updates will include seat availability and email confirmation.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://github.com/anushkagupta-coder/restaurant-booking"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              marginTop: "10px",
              padding: "8px 16px",
              backgroundColor: "#6C63FF",
              color: "white",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            View Code
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Project 2 */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={projectVariant}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          maxWidth: "1000px",
          marginBottom: "50px",
          flexWrap: "wrap",
        }}
      >
        {/* Left side: Image */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{ flex: "1 1 400px" }}
        >
          <img
            src="https://via.placeholder.com/400x250"
            alt="Think Board Notepad"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </motion.div>

        {/* Right side: Description */}
        <motion.div
          whileHover={{ x: 5 }}
          style={{ flex: "1 1 400px" }}
        >
          <h3>Think Board Notepad</h3>
          <p>
            Think Board is a simple online notepad app built using React and localStorage.
            Users can create, edit, and delete notes with a clean UI.
            Future updates will include cloud sync and user authentication.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://github.com/anushkagupta-coder/MERN"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              marginTop: "10px",
              padding: "8px 16px",
              backgroundColor: "#6C63FF",
              color: "white",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            View Code
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
