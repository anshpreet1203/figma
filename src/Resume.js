import React, { useState, useRef } from "react";
import {  Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "./new.css";
import ScoreIndicator from './rating';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputerMouse } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import App from "./App";

// Ensure your CSS file exists and is correct

const Resume = () => {

    const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

    const homeRef = useRef(null);
    const projectsRef = useRef(null);
    const aboutRef = useRef(null);
    const discussRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle dropdown
    };



    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        
        <div>

            
            <div className='resume-container'>

                <div className="navbar2">
                <div className="dev">Software Engineer</div>

                {/* Hamburger icon that appears on small screens */}
                <div className="hamburger" onClick={toggleMenu}>
                    &#9776; {/* Unicode for hamburger icon */}
                </div>

                {/* Tabs for the navbar, which are conditionally shown based on screen size and state */}
                <div className={`tabs ${isOpen ? "open" : ""}`}>
                    <ul className="tab-btn">
                            <li onClick={() => scrollToSection(homeRef)}><Link to="/" onClick={() => setIsOpen(false)} className="link">Home</Link></li>
                            <li onClick={() => scrollToSection(projectsRef)}><Link to="/" onClick={() => setIsOpen(false)} className="link">Services</Link></li>
                        <li><Link to="/resume" onClick={() => setIsOpen(false)} className="link">Resume</Link></li>

                            <li onClick={() => scrollToSection(aboutRef)}><Link to="/" onClick={() => setIsOpen(false)} className="link">About Us</Link></li>
                        <li
                            onClick={() => scrollToSection(discussRef)}
                            className="contact-li"
                        >
                            Contact Us
                        </li>
                    </ul>
                </div>



                <div
                    className="contact-nav"
                    onClick={() => scrollToSection(discussRef)}
                >
                    <a
                        href="tel:7428040855"
                        style={{ textDecoration: "none", color: "rgb(15, 62, 46)" }}
                    >
                        Contact Us
                    </a>
                    <img src="/arrow.png" alt="arw" className="arw-1"></img>
                </div>
                </div>

            <div className="resume">Resume
                <FontAwesomeIcon icon={faComputerMouse} className="mouse"/>
            </div>
            </div>


            <div className="project">About Me</div>
                <div className="res-container">
                    <div className="res-text">Productive full-stack developer, with 4+ years of experience building and maintaining responsive websites across different sectors. Constantly received high user experience scores for every web development project. I am a keen learner who keeps an eye on modern technology so my work reflects the new trends like dynamic content, beautiful designs, and load speed effecting.</div>

                    <div className="res-info">
                        <div className="label"><span className="res-name">Name:</span>ajay</div>
                        <div className="label"><span className="res-name">Age:</span>ajay</div>
                        <div className="label"><span className="res-name">Job:</span>ajay</div>
                        <div className="label"><span className="res-name">Citizenship:</span>ajay</div>
                        <div className="label"><span className="res-name">Residence:</span>ajay</div>
                        <div className="label"><span className="res-name">Email:</span>ajay</div>
                    </div>
                </div>

                <div className="timeline-container">
                    <div className="exp-container">
                        <div className="Year">2021-Present</div>
                        <div className="designation">Software Engineer</div>
                        <div className="time-info">I work as a Senior software developer at Brandshark in Bangalore, A company that provides exceptional IT services and products. I have gotten the opportunity to get involved with various exciting projects like Trustayur, Lanceark, and Third Wave Coffee.</div>

                        <div className="Year">2021-Present</div>
                        <div className="designation">Software Engineer</div>
                        <div className="time-info">I work as a Senior software developer at Brandshark in Bangalore, A company that provides exceptional IT services and products. I have gotten the opportunity to get involved with various exciting projects like Trustayur, Lanceark, and Third Wave Coffee.</div>

                        <div className="Year">2019</div>
                        <div className="designation">Freelancer</div>
                        <div className="time-info">I work as a Senior software developer at Brandshark in Bangalore, A company that provides exceptional IT services and products. I have gotten the opportunity to get involved with various exciting projects like Trustayur, Lanceark, and Third Wave Coffee.</div>

                    </div>

                    <div className="exp-container">
                        <div className="Year">2021-Present</div>
                        <div className="designation">Software Engineer</div>
                        <div className="time-info">I work as a Senior software developer at Brandshark in Bangalore, A company that provides exceptional IT services and products. I have gotten the opportunity to get involved with various exciting projects like Trustayur, Lanceark, and Third Wave Coffee.</div>

                        <div className="Year">2021-Present</div>
                        <div className="designation">Software Engineer</div>
                        <div className="time-info">I work as a Senior software developer at Brandshark in Bangalore, A company that provides exceptional IT services and products. I have gotten the opportunity to get involved with various exciting projects like Trustayur, Lanceark, and Third Wave Coffee.</div>

                        <div className="Year">2019</div>
                        <div className="designation">Freelancer</div>
                        <div className="time-info">I work as a Senior software developer at Brandshark in Bangalore, A company that provides exceptional IT services and products. I have gotten the opportunity to get involved with various exciting projects like Trustayur, Lanceark, and Third Wave Coffee.</div>

                    </div>

                </div>

            <div className="project">Skills</div>
                {/*ratings*/}
                <div className="rating-container">
                    <div className="lang-container">
                        <div className="lang">HTML
                            <ScoreIndicator score={7} />
                        </div>

                        <div className="lang">HTML
                            <ScoreIndicator score={7} />
                        </div>

                        <div className="lang">HTML
                            <ScoreIndicator score={7} />
                        </div>

                        <div className="lang">HTML
                            <ScoreIndicator score={7} />
                        </div>

                        <div className="lang">HTML
                            <ScoreIndicator score={7} />
                        </div>

                        <div className="lang">HTML
                            <ScoreIndicator score={7} />
                        </div>

                        <div className="lang">HTML
                            <ScoreIndicator score={7} />
                        </div>

                        <div className="lang">HTML
                            <ScoreIndicator score={7} />
                        </div>

                        <div className="lang">HTML
                            <ScoreIndicator score={7} />
                        </div>

                    </div>
                </div>

                {/**KNOWLEDGEE */}
                <div className="project">Knowledge</div>
                <div className="know-container">
                    <div className="devlop"> <FontAwesomeIcon icon={faCheck} className="tick" />Website Development</div>

                    <div className="devlop"> <FontAwesomeIcon icon={faCheck} className="tick" />Website Development</div>

                    <div className="devlop"> <FontAwesomeIcon icon={faCheck} className="tick" />Website Development</div>

                    <div className="devlop"> <FontAwesomeIcon icon={faCheck} className="tick" />Website Development</div>

                    <div className="devlop"> <FontAwesomeIcon icon={faCheck} className="tick" />Website Development</div>

                    <div className="devlop"> <FontAwesomeIcon icon={faCheck} className="tick" />Website Development</div>

                </div>

                {/**My services */}
            <div className="project">Services</div>
                <div className="ser-container">
                    <div className="service">
                        <div className="front">Front-end</div>
                        <div className="f-abt">
                            Front-end web development enhances the look and touches of your website through a graphical user interface.
                        </div>
                    </div>

                    <div className="service">
                        <div className="front">Front-end</div>
                        <div className="f-abt">
                            Front-end web development enhances the look and touches of your website through a graphical user interface.
                        </div>
                    </div>

                    <div className="service">
                        <div className="front">Front-end</div>
                        <div className="f-abt">
                            Front-end web development enhances the look and touches of your website through a graphical user interface.
                        </div>
                    </div>

                    <div className="service">
                        <div className="front">Front-end</div>
                        <div className="f-abt">
                            Front-end web development enhances the look and touches of your website through a graphical user interface.
                        </div>
                    </div>
                </div>






            <div className="footer-container">
                <div className="footer">
                    <div className="linkedin">
                        <a
                            href="https://www.linkedin.com/in/dev-sindhwani-297b481b1/"
                            style={{ color: "black", textDecoration: "none" }}
                            target="__blank"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />{" "}
                            <span className="text-f">Linkedin</span>
                        </a>
                    </div>
                    <div className="Email">
                        <a
                            href="mailto:dev16sindh@gmail.com"
                            style={{ color: "black", textDecoration: "none" }}
                            target="__blank"
                        >
                            <FontAwesomeIcon icon={faEnvelope} />{" "}
                            <span className="text-f">dev16sindh@gmail.com</span>
                        </a>
                    </div>
                    <div className="Git">
                        <a
                            href="https://github.com/dev1662"
                            style={{ color: "black", textDecoration: "none" }}
                            target="__blank"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                            <span className="text-f">Github</span>
                        </a>
                    </div>
                </div>


                <div className="copyright">
                    All rights reserved <FontAwesomeIcon icon={faCopyright} /> 2024
                </div>
            </div>
            </div>
        
    );
};

export default Resume;
