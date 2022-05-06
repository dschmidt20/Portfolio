import React from "react";
import headshot from "../images/headshot.JPG";

function About() {
  return (
    <div className="about-wrapper" data-section="about">
      <div className="about-body">
        <p>
          Hey! I'm Daniel, and I am a Full Stack Software Engineer from San
          Diego, CA. After spending 8 years building a career in retail, I
          pivoted to follow an old passion of mine - technology.
        </p>
        <p>
          I am constantly learning and developing my skills to be sure I'm
          always able to find more efficient solutions to problems.
        </p>
        <p>
        My retail experience developed my ability to work efficiently in both solo and team settings, as well as a keen eye for layout and organization.
        </p>
      </div>{" "}
      <div className="about-img">
        <img className="headshot" src={headshot} alt="headshot"></img>
      </div>
    </div>
  );
}

export default About;
