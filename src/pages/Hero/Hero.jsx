import React from "react";
import { useNavigate } from "react-router-dom";
import "./hero.css";

const Hero = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleRegisterClick = () => {
    navigate("/signUp");
  };

  return (
    <div>
      <div id="hero">
        <div id="hero-containt">
          <div id="hero-top">
            <p id="hero_title">
              Your most affordable and reliable delivery laundry service provider
            </p>
            <div className="buttons">
              <button id="hero_button" onClick={handleRegisterClick}>Join us</button>
              <button id="hero-login-button" onClick={handleLoginClick}>Login</button>
            </div>
          </div>
          <br/>
          <div id="hero-bottom">
            <h1 id="hero_tagline">
              Flexibility, Reliability and Scale The Answer is Sparkle Drop
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
