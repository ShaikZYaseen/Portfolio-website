import React from "react";
import heroImg from "../assets/image (1).png";

import "./About.css";
function About() {
  return (
    <>
      <div className="about">
        <div className="about-content">
          <h1>About me</h1>
          <img className="img" src={heroImg} alt="pic" />
          <p>
            Hola! Iam Shaik.Yaseen, a full stack web developer and a third-year
            Computer Science student. I specialize in creating dynamic and
            responsive web applications. <br />
            <br />I enjoy solving complex problems and contributing to open
            source projects. My passion for web development drives me to
            constantly learn and improve my skills.  
            <br />
            <br />
            Seeking opportunities to apply my skills and expand my knowledge in the tech industry :)

            
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
