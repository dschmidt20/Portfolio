import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";

function Projects({ embedId }) {
  return (
    <div className="projects-wrapper">
      <div className="project">
        <h3>Put Me In, Coach</h3>
        <p>
          Accessed an external API of over 19,000 MLB players to gather data to
          allow for lineup creation across every era of baseball with percentile
          rankings, as well as a batter vs. pitcher simulation to experiment
          with who would have the advantage in a hypothetical matchup. Built
          custom algorithms using my knowledge and passion for the game of
          Baseball to show the most accurate potential outcomes in the
          simulation.
        </p>
        <li>
          Tech used: React, JavaScript, Rails, Active Record, PostgreSQL,
          BCrypt, Bootstrap, CSS
        </li>
        <li>
          Three-week solo project presented as capstone at completion of
          Flatiron Bootcamp
        </li>
        <div className="button-wrapper">
          <Button
            href="https://github.com/dschmidt20/Put-Me-In-Coach"
            style={{ padding: "30px", fontSize: "2vh" }}
          >
            Github
          </Button>
        </div>
        <div className="video-responsive">
          <iframe
            width="426.5"
            height="240"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </div>
      <div className="project">
        <h3>Housd</h3>
        <p>
          Created a place for landlords, homeowners, or property management to
          track and create appointments for the tasks at each property by
          partnering with service providers who use the site. Built two separate
          dashboards depending on if the user is a property owner or service
          provider.
        </p>
        <li>
          Tech used: React, JavaScript, Rails, Active Record, PostgreSQL,
          BCrypt, MaterialUI, CSS
        </li>
        <li>One-week (five-day) project with two other partners.</li>
      </div>
      <div className="button-wrapper">
        <Button
          href="https://github.com/glpierce/project-template-react-rails-api"
          style={{ padding: "30px", fontSize: "2vh" }}
        >
          Github
        </Button>
      </div>
      <div className="project">
        <h3>Beer Stuff</h3>
        <p>
          Established a place for beer consumers to share beers they’ve tried
          with other users. Allows a user to upvote beers or submit new ones to
          the site.
        </p>
        <li>Tech used: React, JavaScript, db.json, Ant Design, CSS</li>
        <li>One-week (five-day) project with one other partner.</li>
      </div>
      <div className="button-wrapper">
        <Button
          href="https://github.com/dschmidt20/React-Beer-Rater"
          style={{  padding: "30px", fontSize: "2vh" }}
        >
          Github
        </Button>
      </div>
    </div>
  );
}
Projects.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default Projects;
