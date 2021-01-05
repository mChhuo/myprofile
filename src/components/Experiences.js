import React from 'react'
import './components.css';

const Experiences = () => {
  return (
    <div id="experience-section" className="section">
      <div className="underline title-box">
        <h1>Experiences</h1>
        <div>"Choose a job you love, and you will never have to work a day in your life." - Confucius</div>
      </div>
      <div id="education" className="underline">
        <h1>Education</h1>
        <div className="school">
          <div className="school-name">
            <h4>University of New South Wales</h4>
            2017 - 2020
          </div>
          <div className="school-details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non lectus id libero gravida lobortis. Nunc sed scelerisque turpis, non commodo lorem. In non risus odio. Quisque sagittis ipsum in ex elementum, in placerat felis luctus.
          </div>
        </div>
        <div className="school">
          <div className="school-name">
            <h4>Hurlstone Agricultural High School</h4>
            2011 - 2016
          </div>
          <div className="school-details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non lectus id libero gravida lobortis. Nunc sed scelerisque turpis, non commodo lorem. In non risus odio. Quisque sagittis ipsum in ex elementum, in placerat felis luctus.
          </div>
        </div>
      </div>
      <div id="careers">

      </div>
    </div>
  )
}

export default Experiences
