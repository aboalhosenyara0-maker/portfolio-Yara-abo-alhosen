
import { useEffect, useState } from 'react';
import './Projects.css'
import Footer from '../Footer/Footer';
import trippy from '../../assets/Trippy.png'
import interview from '../../assets/interview.png'
import icon5 from '../../assets/icon5.png'
import icon4 from '../../assets/icon4.png'
import flora from '../../assets/flora.png'
import Crazy from '../../assets/Crazy.png'
import Dashboard from '../../assets/Dashboard.png'
import Edupress from '../../assets/Edupress.png'
import FullScreenDashboard from '../../assets/FullScreenDashboard.png'
import FullScreenEdupress from '../../assets/FullScreenEdupress.jpeg'
import FullScreenFlora from '../../assets/FullScreenFlora.jpeg'
import FullScreenTrippy from '../../assets/FullScreenTrippy.jpeg'
import exit from '../../assets/exit.png'
import icon3 from '../../assets/icon3.png'
import full from '../../assets/full.png'

const Projects = ({ activeProject, setActiveProject }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const isMobile = window.innerWidth <= 992;
    const CARD_WIDTH = 390;
    const nextProject = () => {
        setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    };
    const prevProject = () => {
        setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };
    useEffect(() => {
    if (activeProject) {
        window.scrollTo({
        top: 0, 
        behavior: "smooth"
        });
    }
}, [activeProject]);



    const projects = [
        {
        img:flora,
        fullscren:FullScreenFlora,
        icon:full,
        icon2:icon5,
        title:"Flora",
        dec:"HTML, CSS, Responsive Design",
        link:"https://aboalhosenyara0-maker.github.io/flora/",
        icon3:icon4,
        date:"11/8/2025",
        details:"Flora is a front-end landing page for a plant shop . It features a modern, aesthetic design with calming colors. Built using HTML and CSS, it highlights key sections like product and categories . There is a smooth user experience with basic layout responsiveness.",
        link2:"https://github.com/aboalhosenyara0-maker/flora",
        Basic:"Basic Languages : ",
        Languages:" HTML, CSS"
        },

        {
        img:Crazy,
        fullscren:Crazy,
        icon:full,
        icon2:icon5,
        title:"Crazy",
        dec:"JavaScript, CSS ",
        link:"https://aboalhosenyara0-maker.github.io/Crazy-project/",
        icon3:icon4,
        date:"29-12-2025",
        details:"An online shoe store focused on browsing experience and product search,The project was developed using JavaScript and CSS,The design aims to provide a simple and fast shopping experience that helps users find their desired products efficiently.",
        link2:"https://github.com/aboalhosenyara0-maker/Crazy-project",
        Basic:"Basic Languages : ",
        Languages:"JavaScript,Css"
        },
        {
        img:trippy,
        fullscren:FullScreenTrippy,
        icon:full,
        icon2:icon5,
        title:"Trippy",
        dec:"React.js, CSS ",
        link:" https://aboalhosenyara0-maker.github.io/Trippy-project/",
        icon3:icon4,
        date:"30-1-2026",
        link2:"https://github.com/aboalhosenyara0-maker/Trippy-project",
        details:"Trippy is a multi-page React application, using React Router to manage page-level navigation with smooth transitions.",
        Basic:"Basic Languages : ",
        Languages:" React Router DOM ",
        Framework:"Framework : ",
        Framework2:"React"
        },
        {
        img:Dashboard,
        fullscren:FullScreenDashboard,
        icon:full,
        icon2:icon5,
        title:"Dashboard",
        dec:"React.js, api",
        link:"https://aboalhosenyara0-maker.github.io/Dashboard-project/",
        icon3:icon4,
        date:"16-3-2026",
        link2:"https://github.com/aboalhosenyara0-maker/Dashboard-project",
        details:"A responsive admin dashboard built with React, connected to a Laravel API. Supports full CRUD operations with a clean and modern UI, Reusable components .",
        Basic:"Basic Languages :",
        Languages:"Html5 , Css3 , Javascript, React.js",
        Framework:"Framework : ",
        Framework2:"React"
        },
        {
        img:Edupress,
        fullscren:FullScreenEdupress,
        icon:full,
        icon2:icon5,
        title:"EduPress",
        dec:"Html, Css",
        link:" https://aboalhosenyara0-maker.github.io/EduPress-project/",
        icon3:icon4,
        date:"28-12-2025",
        link2:"https://github.com/aboalhosenyara0-maker/EduPress-project",
        details:"EduPress is a front-end website template designed for educational institutions or online learning platforms. The layout includes sections for courses, teachers, student testimonials, and call-to-action banners. It is built with HTML and CSS, showcasing structured content and a clean layout.",
        Basic:"Basic Languages : ",
        Languages:"HTML, CSS"
        },
        {
        img:interview,
        fullscren:interview,
        icon:full,
        icon2:icon5,
        title:"Interview",
        dec:"React.js",
        link:"https://aboalhosenyara0-maker.github.io/interview-project/",
        icon3:icon4,
        date:"10-1-2026",
        link2:"https://github.com/aboalhosenyara0-maker/interview-project",
        details:"A responsive blog website built with HTML, CSS3, JavaScript, and React. Features a newsletter subscription, dynamic blog post grid, and login/signup pages with a clean modern layout.",
        Basic:"Basic Languages : " ,
        Languages:"HTML, CSS3, JavaScript, and React"
        }
    ]
    
    return (
    <section id="projects">
    {/*  تفاصيل المشروع */}
    {activeProject && (
        <div className="project-modal">
            <button onClick={() => setActiveProject(null)}> <img src={exit} alt="" /> </button>
            <div className="projectImg"> 
                <img src={activeProject.img} alt="" />
            </div> <div className="description">
                <div className="title"> 
                    <div className="parent"> <div className="dec"> 
                            <h1>{activeProject.title}</h1> 
                            <p>{activeProject.date}</p> 
                        </div> 
                        <div>
                            <a href={activeProject.link}>
                                <img src={activeProject.icon3}/>
                            </a>
                        </div> 
                    </div> 
                    <div className="decProject"> 
                        <p>{activeProject.details}</p> 
                        <p className='Languages'><span>{activeProject.Basic}</span>{activeProject.Languages}</p>
                        <p className='Languages'><span>{activeProject.Framework}</span>{activeProject.Framework2}</p>
                        <a href={activeProject.link2}>
                            <button>Github Repo</button> 
                        </a>
                    </div> 
                </div> 
            </div> 
            <div className="line"/>
        </div>
    )}
    <div className="Portfolio">
        <div className="content">
        <p>Portfolio</p>
        <h1>My Creative Works Latest <span>Projects</span></h1>
        </div>
        {activeProject&&(
        <div className="slid">
            <button className='left' onClick={prevProject}>‹</button>
            <button className='right' onClick={nextProject}>›</button>
        </div>
        )}
        {!activeProject&&(
            <button className="Github" onClick={() => window.open("https://github.com/aboalhosenyara0-maker")}>
            <p>View Github </p>
        <img src={icon3} alt="" />
        </button>
        )}
    </div>
    {!activeProject && (
        <div className="projects-grid">
        {projects.map((project, index) => (
            <div className="project-card" key={index}>
            <div className="img">
                <img src={project.img} alt="" />
                <div className="overlay">
                <div className="icons">
                    <a href={project.fullscren}>
                    <img src={project.icon} alt="" />
                    </a>
                    <img
                    src={project.icon2}
                    onClick={() => {
                    if (isMobile) return;
                    setActiveProject(project);
                }}
                    />
                </div>
                </div>
            </div>
            <div className="content">
                <div className="dec">
                <h3>{project.title}</h3>
                <p>{project.dec}</p>
                </div>
                <a href={project.link}>
                <img src={project.icon3}/>
                </a>
            </div>
            </div>
        ))}
        </div>
        )}
        
        {activeProject && (
            <div className="slider-viewport">
            <div 
            className='project-flex'
            style={{
                transform: `translateX(-${currentIndex * CARD_WIDTH}px)`,
                transition: "transform 0.5s ease"
                
            }}
            >
                {projects.map((project, index) => (
            <div className="project-card" key={index}>
            <div className="img" >
                <img src={project.img} alt="" />
                <div className="overlay">
                <div className="icons">
                    <a href={project.fullscren}>
                    <img src={project.icon} alt="" />
                    </a>
                    <img
                    src={project.icon2}
                    onClick={() => {
                        setActiveProject(project)
                    }}
                    />
                </div>
                </div>
            </div>
            <div className="content">
                <div className="dec">
                <h3>{project.title}</h3>
                <p>{project.dec}</p>
                </div>
                <a href={project.link}>
                <img src={project.icon3}/>
                </a>
            </div>
            </div>
        ))}
            </div>
            <div className="line"/>
            </div>
            
        )}
        <div className='foter'>
            
            {activeProject && <Footer/>}
        </div>
        
    </section>

    )
}

export default Projects
