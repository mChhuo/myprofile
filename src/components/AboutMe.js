import React from 'react';
import './components.css';

const AboutMe = () => {
  return (
    <div id="about-me-section" className="section">
      <div className="underline title-box">
        <h1>Profile</h1>
        <div>UNSW graduate</div>
        <div>Bachelors of Computer Science</div>
      </div>
      <div id="details">
        <div id="profile">
          <h1>About me</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non lectus id libero gravida lobortis. Nunc sed scelerisque turpis, non commodo lorem. In non risus odio. Quisque sagittis ipsum in ex elementum, in placerat felis luctus. Duis luctus ex non ligula lacinia hendrerit. Sed nisi nisi, maximus a auctor a, congue in nulla. In porttitor nisi libero, eu maximus ante finibus at. Vivamus posuere viverra posuere. Nulla pellentesque dapibus scelerisque. Vestibulum efficitur ultricies est, nec rhoncus arcu vehicula accumsan. Sed laoreet finibus purus, vitae tempor magna sodales sed. In sagittis lacus vel magna dignissim semper. Nulla cursus tortor eu nunc commodo dictum.
        </div>
        <div>
          <h1>Details</h1>
          <h3>Name:</h3>
          <div>
            Michael Chhuo
          </div>
          <h3>Age:</h3>
          <div>
            34 years
          </div>
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
