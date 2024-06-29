import React from "react";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <section className="project-section ">
      <div className="projects">
        <div className="project-details">
          <div className="project project1">
            <div className="image-container image-1"></div>
            <h1>TripBidder-App</h1>
            <div className="btns-container">
              <Link
                to="https://github.com/rizwan-signon/tripBidder-react"
                className="links"
              >
                client
              </Link>
            </div>
            <p>our final year project still in development</p>
          </div>
          <div className="project project2">
            <div className="image-container image-2"></div>
            <h1>Fake_store Data</h1>

            <div className="btns-container">
              <Link
                to="https://github.com/rizwan-signon/DataFrom_FakeStoreApi"
                className="links"
              >
                visit
              </Link>
              <Link to="https://fake-data-puce.vercel.app/" className=" links">
                demo
              </Link>
            </div>
          </div>
          <div className=" project project3">
            <div className="image-container image-3"></div>
            <h1>Bankist-app</h1>

            <div className="btns-container">
              <Link
                to="https://github.com/rizwan-signon/banking-application.git"
                className=" links"
              >
                visit
              </Link>
              <Link
                to="https://rizwan-signon.github.io/banking-application/"
                className=" links"
              >
                demo
              </Link>
            </div>
          </div>
        </div>
        <h3>
          for more projects and skills you can visit my github account{" "}
          <Link
            to="https://github.com/rizwan-signon"
            className=" px-6 text-2xl"
          >
            visit
          </Link>
        </h3>
      </div>
    </section>
  );
};
export default Projects;
