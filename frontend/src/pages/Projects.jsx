import React from 'react'

const Projects = () => {
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
  <h2 style={{ marginBottom: "40px", color: "#6C63FF" }}>My Projects</h2>

  {/* Project 1 */}
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "20px",
      maxWidth: "1000px",
      marginBottom: "50px",
      flexWrap: "wrap", // important for mobile
    }}
  >
    {/* Left side: Image */}
    <div style={{ flex: "1 1 400px" }}>
      <img
        src="https://via.placeholder.com/400x250"
        alt="Project 1"
        style={{ width: "100%", borderRadius: "10px" }}
      />
    </div>

    {/* Right side: Description */}
    <div style={{ flex: "1 1 400px" }}>
      <h3>Restaurant Booking App</h3>
      <p>
        This is a restaurant booking platform I built using React and Node.js, I also connected backend MongoDB  [MERN]  .
        Users can reserve tables,Further I will add seat availability and email confirmation.
      </p>
      <a
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
      </a>
    </div>
  </div>

  {/* Project 2 */}
<div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    maxWidth: "1000px",
    marginBottom: "50px",
    flexWrap: "wrap", // important for mobile
  }}
>
  {/* Left side: Image */}
  <div style={{ flex: "1 1 400px" }}>
    <img
      src="https://via.placeholder.com/400x250"
      alt="Think Board Notepad"
      style={{ width: "100%", borderRadius: "10px" }}
    />
  </div>

  {/* Right side: Description */}
  <div style={{ flex: "1 1 400px" }}>
    <h3>Think Board Notepad</h3>
    <p>
      Think Board is a simple and efficient online notepad application built using React and localStorage.
      It allows users to create, edit, and delete notes with a clean and responsive UI.
      Future updates will include cloud sync and user authentication.
    </p>
    <a
      href="https://github.com/anushkagupta-coder/think-board-notepad"
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
    </a>
  </div>
</div>

</section>

  )
}

export default Projects
