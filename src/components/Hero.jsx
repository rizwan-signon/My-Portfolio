import React from "react";
import myPic from "../assets/Images/Rizwan.png";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="left">
          <h1 className="title">Hi myself Rizwan Hameed</h1>
          <h1 className="highlight"> A web developer</h1>
          <p>
            Recently graduated from Kohat University Of Science And Technology
            as a Software Engineer.
          </p>
          <div className="contact-btns">
            <button className="btns">
              <a href="mailto:rizwan.signon@gmail.com">contact</a>
            </button>
            <button className="btns">
              <a href="/my-Resume.pdf" download>
                Downloud CV
              </a>
            </button>
          </div>
        </div>
        <div className="right">
          <img src={myPic} alt="not found" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
