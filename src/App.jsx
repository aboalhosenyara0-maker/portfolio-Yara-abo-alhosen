import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './components/section/Home'
import About from './components/section/About'
import Contact from './components/section/Contact'
import Education from './components/section/Education'
import Projects from './components/section/Projects'
import Footer from './components/Footer/Footer'
import { motion } from "framer-motion"

function App() {

  const [activeProject, setActiveProject] = useState(null)

  const [mode, setMode] = useState(() => {
    try {
      const saved = localStorage.getItem("mode");
      return saved ? JSON.parse(saved) : false;
    } catch (e) {
      console.error("Error parsing mode from localStorage:", e);
      return false;
    }
  });

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(mode))

    if (mode) {
      document.body.classList.add("dark-mode")
    } else {
      document.body.classList.remove("dark-mode")
    }
  }, [mode])

  const sectionVariant = (direction = "left") => ({
    hidden: {
      opacity: 0,
      x: direction === "left" ? -80 : 80
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  });

  return (
    <div className={mode ? "dark-mode" : ""}>

      <NavBar
        setMode={setMode}
        mode={mode}
        Name="Yara"
      />

      {!activeProject && (
        <motion.div
          variants={sectionVariant("left")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Home des="Agency-quality Webflow websites with the personal touch of a freelancer." />
        </motion.div>
      )}

      {!activeProject && (
        <motion.div
          variants={sectionVariant("right")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <About />
        </motion.div>
      )}

      {!activeProject && (
        <motion.div
          variants={sectionVariant("left")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Education />
        </motion.div>
      )}

      <Projects
        activeProject={activeProject}
        setActiveProject={setActiveProject}
      />

      {!activeProject && (
        <motion.div
          variants={sectionVariant("right")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Contact />
        </motion.div>
      )}

      {!activeProject && <Footer />}

    </div>
  )
}

export default App
