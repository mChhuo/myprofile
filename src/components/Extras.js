import React from "react";

const Extras = () => {
  return (
    <div id="extra-curricular-section" className="section">
      <div className="underline title-box">
        <h1>Extracurricular</h1>
        <div>"You don't win alone. That's just how it is" - Tobio Kageyama</div>
      </div>
      <div className="experience-subsection">
        <h1>Volleyball</h1>
        <div className="location">
          <div className="location-name">
            <h4>Westside Volleyball Club</h4>
            2018 - Present
          </div>
          <div className="location-details">
            Experience being a captain for the Division 1 and 2 teams and
            representing the club in competitions. Currently represent the club
            for the Reserve Division, the 2nd highest level possible.
            Responsible for producing the club website to promote the club as
            well as manage club payments.
            <ul>
              <li>
                Placed 1st with my Division 1 team for SVL, a premier
                clubs-based competition, in 2019
              </li>
              <li>Placed 4th in the Reserve Division for SVL in 2020</li>
            </ul>
          </div>
        </div>
        <div className="location">
          <div className="location-name">
            <h4>Westside Junior Volleyball Coach</h4>
            2020 - Present
          </div>
          <div className="location-details">
            Co-coach the Junior Division and achieved bronze in the U18 Division
            2 team at SVL 2020. Have aspirations to achieve great results
            coaching the U18 Division 1 team for 2021.
          </div>
        </div>
        <div className="location">
          <div className="location-name">
            <h4>Hurlstone Volleyball Team</h4>
            2016
          </div>
          <div className="location-details">
            Captained the high school volleyball team and ended up being
            regional finalists
          </div>
        </div>
      </div>
      <div className="underline">&nbsp;</div>
      <div className="experience-subsection">
        <h1>Volunteering</h1>
        <div className="location">
          <div className="location-name">
            <h4>Moon Festival Cabramatta</h4>
            2017 - 2019
          </div>
          <div className="location-details">
            Demonstrated strong communication skills assisting thousands of
            people with directions. Also conducted surveys with the general
            public for future improvement of the event. Performed minor labour
            tasks such as moving equipment and cleaning up the area.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extras;
