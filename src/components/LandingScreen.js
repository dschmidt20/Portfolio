import React from "react";
import AnimatedText from "react-animated-text-content";
import { Button } from "antd";
import resume from "/Users/daniel/Development/code/Projects/portfolio/src/Updated resume.pdf";

function LandingScreen() {
  return (
    <div className="landing-screen">
      <h1>
        {" "}
        <AnimatedText
          type="words" // animate words or chars
          animation={{
            x: "200px",
            y: "-20px",
            scale: 1.1,
            ease: "ease-in-out",
          }}
          // animationType="float"
          interval={0.06}
          duration={1.8}
          tag="p"
          className="animated-h1"
          // includeWhiteSpaces
          threshold={0.1}
          style={{ height: "1em" }}
          rootMargin="0%"
        >
          Daniel Schmidt
        </AnimatedText>
      </h1>
      <h2>
        <AnimatedText
          type="words" // animate words or chars
          animation={{
            x: "-200px",
            y: "20px",
            scale: 1.1,
            ease: "ease-in-out",
          }}
          // animationType="float"
          interval={0.16}
          duration={1.8}
          tag="p"
          style={{ height: ".75em" }}
          className="animated-h2"
          // includeWhiteSpaces
          threshold={0.1}
          rootMargin="0%"
        >
          Full Stack Software Engineer
        </AnimatedText>
      </h2>
      <div style={{ display: "block", paddingBottom: "150px" }}>
        <a href="https://www.linkedin.com/in/daniel-m-schmidt/">
          <img
            className="social"
            alt="linkedin"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
          />
        </a>
        <a href="https://github.com/dschmidt20">
          <img
            className="social"
            alt="github"
            style={{ paddingLeft: "10px" }}
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          />
        </a>
        <a href={resume} target="_blank">
          <img
            className="social"
            alt="resume"
            style={{ paddingLeft: "0px" }}
            src="https://www.freeiconspng.com/uploads/resume-icon-png-2.png"
          />
        </a>
      </div>
    </div>
  );
}

export default LandingScreen;
