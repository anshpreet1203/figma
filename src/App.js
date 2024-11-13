import React, { useState, useRef } from "react";
import Carousel from "react-bootstrap/Carousel"; // Import Carousel
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
// Ensure your CSS file exists and is correct

const App = () => {
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
      {/* HEADER */}
      <header>
        <div className="first-container">
          <div className="navbar">
            <div className="dev">Software Engineer</div>

            {/* Hamburger icon that appears on small screens */}
            <div className="hamburger" onClick={toggleMenu}>
              &#9776; {/* Unicode for hamburger icon */}
            </div>

            {/* Tabs for the navbar, which are conditionally shown based on screen size and state */}
            <div className={`tabs ${isOpen ? "open" : ""}`}>
              <ul className="tab-btn">
                <li onClick={() => scrollToSection(homeRef)}>Home</li>
                <li onClick={() => scrollToSection(projectsRef)}>Services</li>
                {/* <li onClick={() => scrollToSection(projectsRef)}>Projects</li> */}
                <li onClick={() => scrollToSection(aboutRef)}>About Us</li>
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

          <div className="parent" ref={homeRef}>
            <div className="info">
              <div className="name">DEV SINDHWANI</div>
              <div className="text">
                I'm a Software Developer with expertise in Vue.js, React.js,
                PHP, Laravel, CodeIgniter, Kotlin, and Flutter. I specialize in
                building user-focused applications that streamline processes and
                enhance efficiency. Passionate about using technology to solve
                complex problems, I’m dedicated to delivering clean, efficient
                code and innovative solutions with real impact.
              </div>
              <a
                href="tel:7428040855"
                className="num"
                style={{ textDecoration: "none", color: "rgb(15, 62, 46)" }}
              >
                <div className="contact-us">
                  Contact Us
                  <img src="/arrow.png" alt="arw" className="arw-1"></img>
                </div>
              </a>
            </div>

            <div className="photos">
              <img
                src="/mobile.png"
                className="mobile nav-photo"
                alt="mob"
              ></img>
              <img
                src="/border.png"
                className="border-1 nav-photo"
                alt="mob"
              ></img>
            </div>
          </div>
        </div>
      </header>

      {/* BRANDS */}

      <div className='brands'>
        <img src='/Brands.jpg' alt='logo' className='logos' ></img>
      </div>


     

      {/* PROJECTS */}
      <div className="project" ref={projectsRef}>
        Services
      </div>
      <div className="second-container">
        <div className="content">
          <div className="title-pjt">Web Design And Development</div>
          <div className="text-pjt">
            I create websites that look great and work smoothly, helping your
            business make a strong online impact. Whether you need a brand-new
            site, an online store, or an upgrade for your current website, I’m
            here to make it happen.
          </div>
          <div className="visit">
            Visit Us<img src="/arrow.png" className="arrow" alt="arw"></img>
          </div>
        </div>

        <img src="/cell.png" alt="cell" className="cell"></img>
      </div>

      <div className="second-container">
        <img src="/cell.png" alt="cell" className="cell"></img>
        <div className="content">
          <div className="title-pjt"> Mobile App Design And Development</div>
          <div className="text-pjt">
            I specialize in developing mobile apps that are easy to use,
            visually engaging, and built to meet your specific needs. From
            concept to launch, I work with you to create apps that enhance your
            business and reach your audience effectively.
          </div>
          <div className="visit">
            Visit Us<img src="/arrow.png" className="arrow" alt="arw"></img>
          </div>
        </div>
      </div>

      {/* MORE PROJECTS WITH CAROUSEL */}
      <div className="project">Some More Projects</div>
      <div className="carousel-container">
        <Carousel indicators={false} controls={true}>
          <Carousel.Item>
            <div className="carousel-item-wrapper">
              <div className="small-card">
                <img src="/img.jpg" alt="Slide 1" className="card-image" />
                <h3>First Project</h3>
                <p>Project details for the first project.</p>
              </div>
              <div className="small-card">
                <img src="/img.jpg" alt="Slide 2" className="card-image" />
                <h3>Second Project</h3>
                <p>Project details for the second project.</p>
              </div>
              <div className="small-card">
                <img src="/img.jpg" alt="Slide 3" className="card-image" />
                <h3>Third Project</h3>
                <p>Project details for the third project.</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-item-wrapper">
              <div className="small-card">
                <img src="/img.jpg" alt="Slide 4" className="card-image" />
                <h3>Fourth Project</h3>
                <p>Project details for the fourth project.</p>
              </div>
              <div className="small-card">
                <img src="/img.jpg" alt="Slide 5" className="card-image" />
                <h3>Fifth Project</h3>
                <p>Project details for the fifth project.</p>
              </div>
              <div className="small-card">
                <img src="/img.jpg" alt="Slide 6" className="card-image" />
                <h3>Sixth Project</h3>
                <p>Project details for the sixth project.</p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* ABOUT */}
      <div className="project" ref={aboutRef}>
        About
      </div>
      <div className="third-container">
        <div className="abt-content">
          <div className="txt-abt">
            We are a team of skilled software developers with a deep expertise
            in modern web and mobile technologies, including Vue.js, React.js,
            PHP, Laravel, CodeIgniter, Kotlin, and Flutter. Our passion lies in
            creating user-focused applications that simplify workflows, optimize
            processes, and add tangible value to our clients' operations.
          </div>
        </div>

        <img src="/cell.png" alt="cell" className="img-abt"></img>
      </div>

      {/* DISCUSSION */}
      <div className="fourth-container" ref={discussRef}>
        <div className="discuss">Let's Discuss About Your Project</div>
        <a
          href="tel:7428040855"
          className="num"
          style={{ textDecoration: "none" }}
        >
          <div className="contact">
            Contact Us
            <img src="/arrow.png" alt="arw" className="arw-1"></img>
          </div>
        </a>
      </div>
      {/*FOOTER */}
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

export default App;
