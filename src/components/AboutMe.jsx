import React from "react";
import logo from "../assets/Images/logo.png";
import { FaReact, FaGithubSquare } from "react-icons/fa";
import { SiAffinitydesigner } from "react-icons/si";

export default function AboutMe() {
  return (
    <div className="about-me">
      <section>
        <div className="aboutme-image">
          <img className="aboutme-image" src={logo} alt="not found" />
        </div>
        <div className="skills">
          <div className="container front-end">
            <FaReact className="icons" />
            <p>
              I develop responsive and interactive websites using various
              libraries and frameworks. I have experience with
              React,Tailwind,MaterialUI. I write clean and maintainable code
              with HTML, CSS, and JavaScript. I collaborate with designers and
              back-end developers to deliver high-quality projects and integrate
              their APIs.
            </p>
          </div>
          <div className="container collaborate">
            <FaGithubSquare className="icons" />
            <p>
              I use GitHub to manage and share code efficiently. I contribute to
              projects by creating and reviewing pull requests. I communicate
              with team members through issues and comments. I keep the project
              organized by using branches
            </p>
          </div>
          <div className="container design">
            <SiAffinitydesigner className="icons" />
            <p>
              I design user interfaces that are clean and easy to use. I work
              with team members to gather feedback and make improvements. I
              create mockups and prototypes to visualize ideas. I ensure designs
              are consistent and user-friendly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
