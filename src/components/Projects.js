import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter(".project", "skewY", "deg"), // fast
    clamp = gsap.utils.clamp(-2, 2); // the skew is no more than 20

  ScrollTrigger.create({
    onUpdate: (self) => {
      let skew = clamp(self.getVelocity() / -3000);
      // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
      if (Math.abs(skew) > Math.abs(proxy.skew)) {
        proxy.skew = skew;
        gsap.to(proxy, { skew: 0, duration: 1.5, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew) });
      }
    }
  });

  // make the right edge "stick" to the scroll bar. force3D: true improves performance
  gsap.set(".project", { transformOrigin: "right left", force3D: true });

  // // Hover graphics for projects
  // const project = document.querySelectorAll('.project-container');
  // console.log(project)
  // project.forEach((p) => {
  //   // p.addEventListener("mouseenter", function(event) {
  //   //   event.target.style.opacity = "0.3";
  //   // })
  //   p.addEventListener("mouseleave", function(event) {
  //     event.target.style.opacity = "1";
  //   })
  // })

  return (
    <div id="project-section" className="section">
      <div className="underline title-box">
        <h1>Projects</h1>
        <div>A collection of things I've made</div>
      </div>
      <div id="project-grid">
        <div className="project-container">
          <div className="project">
            <h2>
              Volleyball Statistics
            </h2>
            <div>Work in progress</div>
            <div className="project-details">
              <h4>Technical Details:</h4>
              React, JavaScript, Django, SQL
              <br />
              <br />
              <h4>What I plan to learn:</h4>
              Django, sass styling
            </div>
          </div>
        </div>
        <div className="project-container">
          {/* <div className="opaque-overlay">
            testing testing 123
          </div> */}
          <div className="project">
            <h2>
              Film Finder
            </h2>
            <div>Capstone Project</div>
            <div className="project-details">
              <h4>Technical Details:</h4>
              React, Python, Flask, SQL, JavaScript
              <br />
              <br />
              <h4>What I learnt:</h4>
              React Context, React Reducer, Material-UI, GSAP
            </div>
          </div>
        </div>
        <div className="project-container">
          <div className="project">
            <h2>
              Number Guessing Game
            </h2>
            <div>React Native App</div>
            <div className="project-details">
              <h4>Technical Details:</h4>
              React Native, JavaScript
              <br />
              <br />
              <h4>What I learnt:</h4>
              React basics, React Native, JavaScript basics
            </div>
          </div>
        </div>
        <div className="project-container">
          <div className="project">
            <h2>
              Simple Goal Planner
            </h2>
            <div>React Native App</div>
            <div className="project-details">
              <h4>Technical Details:</h4>
              React Native, JavaScript
              <br />
              <br />
              <h4>What I learnt:</h4>
              React Native, React Hooks, React Components
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
