import { useEffect, useState } from 'react'
import './Education.css'
import icon2 from '../../assets/icon2.png'
import icon from '../../assets/icon.png'

const Education = () => {
    const [showBtn , setshowBtn] = useState(false)
    useEffect(() => {
    const scroll = () => {
        const section = document.getElementById("education")
        if (!section) return

        if (window.scrollY >= section.offsetTop - 200) {
            setshowBtn(true)
        } else {
            setshowBtn(false)
        }
    }

    window.addEventListener("scroll", scroll)
    return () => window.removeEventListener("scroll", scroll)
    }, [])
    return (
        <section id="education">
        <div className="title">
            <p className='p1'>Education and Experience</p>
            <h2>Education & Experience</h2>
        </div>
        <div className="circle1"/>
        <div className="circle2"/>
        <div className="circle3"/>
        <div className="experience"> 
            <div className="experience-1">
                <div className="line1">
                    <div className="circl">
                        <div className="circl1"/>
                    </div>
                    <div className="circl2">
                        <div className="circl3"/>
                    </div>
                </div>
                <div className="info1">
                    <h3>Education</h3>
                    <p>Bachelor’s Degree in Information Engineering — Computer Technology
                    Damascus University, Graduated (2022 – 2023)
                    Developed a strong foundation in data structures and web technologies.</p>
                </div>
                <div className="info1">
                    <h3>Skills/Specializations</h3>
                    <p>Frontend Development : HTML, CSS, JavaScript, React.js, Tailwind CSS, Bootstrap.</p>
                </div>
            </div>
            <div className="experience-2">
                <div className="line2">
                    <div className="circl4">
                        <div className="circl5"/>
                    </div>
                    <div className="circl6">
                        <div className="circl7"/>
                    </div>
                </div>
                <div className="info1">
                    <h3>Education</h3>
                    <p>Frontend Developer Intern — Vica Web Solution (October 2025 - March 2026).</p>
                </div>
                <div className="info1">
                    <h3>Skills/Specializations</h3>
                    <p>
                    React Developer
                    Dived into React, learning components, hooks, React Router, and state management while building real-world projects.
                    </p>
                </div>
            </div>
        </div>
        <div className="circle4"/>
        <div className="circle5"/>
        <div className="circle6"/>
        <button
        className={`back-to-top ${showBtn ? "show" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
        <div className="icon"><img src={icon} alt="" /></div>
        </button>
        <div id="contact">
        <div className="box1"></div>
        <div className="box2">
            <div className="line">
                <div className="line1"></div>
            </div>
            <h2>Try me out, risk free!</h2>
            <p>If you’re not happy with the design after the first draft,
                I’ll refund your deposit, no questions asked</p>
                <div className="content">
                    <a href="#Contact">Contact<img src={icon2} alt="" /></a>
                </div>
        </div>
        </div>
        </section>
    )
}

export default Education
