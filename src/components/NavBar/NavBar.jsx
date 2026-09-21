import { useState, useEffect } from "react";
import "./NavBar.css";

import moon from "../../assets/moon.png";
import bars from "../../assets/bars.svg";
import sun from "../../assets/Sun.png";

const NavBar = ({ Name, mode, setMode }) => {
    const [show, setShow] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const navItem = [
        { id: 1, content: "Home", link: "#home" },
        { id: 2, content: "About me", link: "#about" },
        { id: 3, content: "Education", link: "#education" },
        { id: 4, content: "Projects", link: "#projects" },
        { id: 5, content: "Contact", link: "#Contact" },
    ];

    useEffect(() => {
    const sections = navItem.map(item =>
        document.querySelector(item.link)
    );

    const onScroll = () => {
        let current = "home";

        sections.forEach(section => {
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
            current = section.id;
        }
        });

        setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
}, []);

    return (
        <nav>
        <h4>{Name}</h4>

        <ul className={`nav-menu ${show ? "show" : ""}`}>
            {navItem.map((item) => (
            <li
                key={item.id}
                className={
                activeSection === item.link.slice(1)
                    ? "active"
                    : ""
                }
            >
                <a href={item.link}>{item.content}</a>
            </li>
            ))}
        </ul>

        <div className="bars">
            <button onClick={() => setMode(!mode)}>
            <img src={mode ? sun : moon} alt="" />
            </button>

            <button
            className="icon"
            onClick={() => setShow(!show)}
            >
            <img src={bars} alt="" />
            </button>
            
        </div>
        </nav>
    );
};

export default NavBar;