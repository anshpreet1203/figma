import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "./new.css";
import ScoreIndicator from './rating';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
// Ensure your CSS file exists and is correct

const Resume = () => {
    return (
        <div>
            <div className="resume">Resume</div>
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






                <div className="copyright">
                    All rights reserved <FontAwesomeIcon icon={faCopyright} /> 2024
                </div>
            </div>
        
    );
};

export default Resume;
