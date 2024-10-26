import React, { useState ,useRef} from 'react';
import Carousel from 'react-bootstrap/Carousel'; // Import Carousel
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap CSS
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
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
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div>
      {/* HEADER */}
      <header>
        <div className="first-container">
          <div className="navbar">
            <div className="dev">--Developer</div>

            {/* Hamburger icon that appears on small screens */}
            <div className="hamburger" onClick={toggleMenu}>
              &#9776; {/* Unicode for hamburger icon */}
            </div>

            {/* Tabs for the navbar, which are conditionally shown based on screen size and state */}
            <div className={`tabs ${isOpen ? 'open' : ''}`}>
              <ul className="tab-btn">
                <li onClick={() => scrollToSection(homeRef)}>Home</li>
                <li onClick={() => scrollToSection(projectsRef)}>Projects</li>
                <li onClick={() => scrollToSection(aboutRef)}>About Us</li>
                <li onClick={() => scrollToSection(discussRef)} className="contact-li">Contact Us</li>
              </ul>
            </div>
            <div className="contact-nav" onClick={() => scrollToSection(discussRef)}>Contact Us</div>
          </div>

         <div className="parent" ref={homeRef}>

          <div className="info">
            <div className="name">&lt;DEV SINDHWANI&gt;</div>
            <div className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore excepturi et voluptas sequi numquam, aspernatur consequatur aperiam, adipisci nobis laudantium omnis quibusdam vel ducimus eius totam animi obcaecati ullam! Commodi!
            </div>
            <div className="contact-us">Contact Us</div>
          </div>

          <div className='photos'>
          <img src='/mobile.png' className='mobile nav-photo' alt='mob'></img>
          <img src='/border.png' className='border-1 nav-photo' alt='mob'></img>
          </div>
         </div>

        </div>
      </header>

      {/* BRANDS */}

      <div className='brands'>
        <img src='/Brands.jpg' alt='logo' className='logos' ></img>
      </div>

      {/* PROJECTS */}
      <div className="project" ref={projectsRef}>Projects</div>
      <div className="second-container">
        <div className="content">
          <div className="title-pjt">Web Design And Development</div>
          <div className="text-pjt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, error obcaecati earum porro omnis aperiam vitae assumenda illum amet, nihil id neque, saepe quia consequuntur dolorem ex temporibus? Sapiente, enim?
          </div>
           <div className='visit'>Visit Us<img src='/arrow.png' className='arrow'></img></div>
        </div>

        <img src='/cell.png' alt='cell' className='cell'></img>
      </div>

      <div className="second-container">
        <img src='/cell.png' alt='cell' className='cell'></img>
        <div className="content">
          <div className="title-pjt">Web Design And Development</div>
          <div className="text-pjt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, error obcaecati earum porro omnis aperiam vitae assumenda illum amet, nihil id neque, saepe quia consequuntur dolorem ex temporibus? Sapiente, enim?
          </div>
          <div className='visit'>Visit Us<img src='/arrow.png' className='arrow'></img></div>
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
      <div className="project" ref={aboutRef}>About</div>
      <div className="third-container">
        <div className="abt-content">
          <div className="txt-abt">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptates officia fugiat atque harum cumque, officiis autem corporis eveniet ducimus quod, molestiae, earum sed? Voluptate fugiat qui tempora similique doloribus!
          </div>
        </div>

        <img src='/cell.png' alt='cell' className='img-abt'></img>
      </div>

      {/* DISCUSSION */}
      <div className="fourth-container" ref={discussRef}>
        <div className="discuss">Let's Discuss About Your Project</div>
        <div className="contact">Contact Us</div>
      </div>
      {/*FOOTER */}
      <div className='footer-container'>
      <div className='footer'>
        <div className='linkedin'><FontAwesomeIcon icon={faLinkedin} /> <span className='text-f'>Linkedin</span></div>
        <div className='Email'><FontAwesomeIcon icon={faEnvelope} /> <span className='text-f'>EMAIL@gmail.com</span></div>
        <div className='Git'><FontAwesomeIcon icon={faGithub} /><span className='text-f'>GITHUB</span></div>
      </div>

      <div className='copyright'>All rights reserved  <FontAwesomeIcon icon={faCopyright} /> 2024</div>
      </div>

    </div>

    
  );
};

export default App;
