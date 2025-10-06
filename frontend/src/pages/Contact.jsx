import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  // Variants for social icons
  const iconVariants = {
    hover: { scale: 1.2, rotate: 10, transition: { duration: 0.3 } },
    float: {
      y: [0, -10, 0],
      transition: { repeat: Infinity, duration: 3, ease: "easeInOut" },
    },
  };

  return (
    <section style={{ padding: "60px 0", textAlign: "center", backgroundColor: "#f0f4f8" }}>
      {/* Animated Title */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ fontSize: "2rem", marginBottom: "40px", color: "#6C63FF" }}
      >
        Get in Touch
      </motion.h2>

      {/* Social Icons */}
      <div
        style={{
          fontSize: "3rem",
          display: "flex",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        <motion.a
          href="https://github.com/anushkagupta-coder"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#333" }}
          variants={iconVariants}
          whileHover="hover"
          animate="float"
        >
          <FaGithub />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/anushka-gupta-aa9b40286/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#0077B5" }}
          variants={iconVariants}
          whileHover="hover"
          animate="float"
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          href="mailto:anushka612004@gmail.com"
          style={{ color: "#D44638" }}
          variants={iconVariants}
          whileHover="hover"
          animate="float"
        >
          <FaEnvelope />
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
