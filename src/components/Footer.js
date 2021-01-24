import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
      <div id="footer" className="section">
        <h1>Contact</h1>
        <div id="links">
          <div>
            <FontAwesomeIcon icon={faLinkedin} size='lg' />
            &nbsp;
            <a href="www.linkedin.com/in/michael-chhuo" target="_blank">www.linkedin.com/in/michael-chhuo</a>
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} size='lg'/>
            &nbsp;
            <a href="michaelchhuo10@hotmail.com" target="_blank">michaelchhuo10@hotmail.com</a>
          </div>
          <div>
            <FontAwesomeIcon icon={faGithub} size='lg'/>
            &nbsp;
            <a href="https://github.com/mChhuo" target="_blank">https://github.com/mChhuo</a>
          </div>
        </div>
      </div>
  )
}

export default Footer
