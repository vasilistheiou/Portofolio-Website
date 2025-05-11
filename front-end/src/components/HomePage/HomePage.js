import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import myImage from "../../Images/Me/Myself.jpg"
import CV from "./MyCV.pdf"

const HomePage = () => {


  return (
    <div className="homepage">
      <div className="intro">
        <h1>Hi,</h1>
        <h1>I'm <span className="name"> Vasilis</span></h1>
        <h4>A Passionate <strong>Machine Learning </strong>and <strong>Full Stack Developer</strong></h4>
        <Link to="/contact" className="contact-link">
          <button className="contact-button">Contact</button>
        </Link>
        <a href={CV} download="Theiou_CV.pdf" >
          <button className="contact-button" >CV</button>
        </a>

      </div>
      <div className="photo">
        <img src={myImage} alt="Vasilis" />
      </div>
  </div>
  );
};

export default HomePage;
