import React from "react";
import "./components.css";

const Experiences = () => {
  return (
    <div id="experience-section" className="section">
      <div className="underline title-box">
        <h1>Experiences</h1>
        <div>
          "Choose a job you love, and you will never have to work a day in your
          life." - Confucius
        </div>
      </div>
      <div className="experience-subsection">
        <h2>Education</h2>
        <div className="location">
          <div className="location-name">
            <h4>University of New South Wales</h4>
            2017 - 2020
          </div>
          <div className="location-details">
            During my time at UNSW I was allowed to explore and choose subjects
            that interested me. Here I discovered my passion for all things
            coding and development, finding great enjoyment with Web-development
            and Python development as well as more theoretical topics such as
            algorithms.
          </div>
        </div>
        <div className="location">
          <div className="location-name">
            <h4>Hurlstone Agricultural High School</h4>
            2016
          </div>
          <div className="location-details">
            Extension 1 &amp; 2 Mathematics, Standard English, Physics, Biology,
            Agriculture
          </div>
        </div>
      </div>
      <div className="underline">&nbsp;</div>
      {/* Careers */}
      <div className="experience-subsection">
        <h2>Professional Employment</h2>
        <div className="location">
          <div className="location-name">
            <h4>SVNSW Volleyball Coach</h4>
            July 2020 - Present
          </div>
          <div className="location-details">
            Introduced volleyball to primary and high school students whilst
            having to adapt training programs to various skill levels.
            <br />
            Selected to coach in the Volleyball Australia Junior Development
            Program which produces international quality players as well as the
            next generation of club players.
          </div>
        </div>
        <div className="location">
          <div className="location-name">
            <h4>State Election - Data Entry</h4>
            March 2019 - April 2019
          </div>
          <div className="location-details">
            Screened and selected by Adecco recruitment agency. Impressed team
            leaders who noted my ability to learn quickly and work efficiently.
          </div>
        </div>
        <div className="location">
          <div className="location-name">
            <h4>ABC College</h4>
            2017 - 2018
          </div>
          <div className="location-details">
            Tutored K-6 students in all key areas of learning. Tutored high
            school students in mathematics, keeping in line with the NESA
            syllabus. Able to tailor to student's needs and allowing them to
            achieve an improvement of 10% in their exams.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
