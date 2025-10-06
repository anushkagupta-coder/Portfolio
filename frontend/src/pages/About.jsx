import React from 'react'
import {motion} from 'framer-motion'


const About = () => {
  return (
    <div>
    <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}>
        Hi, I’m Anushka Gupta 👋
    </motion.h1>

    </div>
  )
}

export default About


