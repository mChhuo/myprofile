import React from 'react';
import './components.css';

const AboutMe = () => {
  return (
    <div id="about-me-section" className="section">
      <div className="underline title-box">
        <h1>Profile</h1>
        <div>Bachelors of Computer Science - UNSW graduate</div>
        <div>Someone who loves dogs, volleyball and all things coding.</div>
      </div>
      <div id="details">
        <div id="profile">
          <h1>About me</h1>
          I am an all-round developer with a passion for full-stack web development and programming. Hope to use my knowledge of back-end techniques, an interest in creative UI/UX as well as uses of algorithms in programming challengs. I enjoy working in a team and demonstrate a strong work ethic. Having been a tutor and currently a volleyball coach, I have developed great communication and interpersonal skills.

        </div>
        <div>
          <h1>Details</h1>
          <h3>Name:</h3>
          <div>
            Michael Chhuo
          </div>
          <br />
          <h3>Age:</h3>
          <div>
            22 years
          </div>
          <br />
          <h3>Email:</h3>
          <div>
            michaelchhuo10@hotmail.com
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
