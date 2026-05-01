import './About.css'
import { motion } from "framer-motion";
import circle from '../../assets/circle.png'

const About = () => {
    return (
        <section id="about">
        <div className="circle">
            <img src={circle} alt="" />
        </div>
        <div className="about-me">
            <h2>About Me </h2>
            <p>Get to know more about me, my background, and what drives me to 
                create amazing digital expreiences.
            </p>
            <div className="skill-1">
                <h3>HTML5</h3>
                <motion.div
                className="line-1"
                style={{ transformOrigin: "left" }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1 }}
                />
                    <div className="circle-1">
                        <div className="number">
                            <p>95%</p></div>
                        </div>
                <div className="gray"/>
            </div>
            <div className="skill-2">
                <h3>CSS3</h3>
                <motion.div
                className="line-2"
                style={{ transformOrigin: "left" }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1 }}
                />
                <div className="circle-2">
                    <div className="number">
                        <p>90%</p></div>
                    </div>
                <div className="gray"/>
                
                
            </div>
            <div className="skill-3">
                <h3>Javascript</h3>
                <motion.div
                className="line-3"
                style={{ transformOrigin: "left" }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1 }}
                />
                <div className="circle-3">
                    <div className="number">
                        <p>90%</p></div>
                    </div>
                <div className="gray"/>
            </div>
            <div className="skill-4">
                <h3>React</h3>
                <motion.div
                className="line-4"
                style={{ transformOrigin: "left" }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1 }}
                />
                <div className="circle-4">
                    <div className="number">
                        <p>95%</p></div>
                    </div>
                <div className="gray"/>
            </div>
        </div>
        </section>
    )
}

export default About
