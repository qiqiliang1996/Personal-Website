import React from "react";
import Button from "./Button";
import "./HeroSection.css";
import "../App.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-cat2.mp4" autoPlay loop muted />
      {/* <h1>Hello, Welcome</h1> */}
      <p>Welcome to Qiqi and Chubby's World</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          path="/mycat"
        >
          MY SOCIAL MEDIA
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          path="/aboutme"
        >
          CHUBBY'S SOCIAL MEDIA <i class="far fa-thumbs-up"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
