import React, { useEffect } from 'react'
import './components.css';
import ProfilePic from '../assets/picture-of-me.jpg';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Cover = () => {
  useEffect(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".cover-container",
        start: "top top",
        end: "+=2500",
        pin: true,
        scrub: 0.5,
      },
    });

    tl.set("#creative", { autoAlpha: 0 })
    tl.to('#creative', {
      autoAlpha: 1,
    })
      .from("#hardworking", {
        xPercent: -100,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.6
      })
      .from("#passionate", {
        xPercent: 100,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.6
      })
      .from("#motivated", {
        yPercent: 90,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.6
      })
  }, [])

  return (
    <>
      <section class="cover-container">
        <div id="cover">
          <div>
            <img id="profile-picture" src={ProfilePic} alt="a headshot of me" />
          </div>
          <div className="cover-text">
            Michael Chhuo
          </div>
          <div className="cover-text sub-text">
            My interactive resume
          </div>
          <div id="wrapper">
            <div id="creative" className="testimony">
              A creative full-stack developer
            </div>
            <div id="hardworking" className="testimony">
              Hardworking and independent
            </div>
            <div id="passionate" className="testimony">
              Passionate about development
            </div>
            <div id="motivated" className="testimony">
              Motivated to learn
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Cover
