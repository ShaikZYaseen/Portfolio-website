import React from 'react';
import githubLight from '../assets/github-light.svg';
import "./ProjectCard.css"

function ProjectCard({ src, link, h3, p ,github}) {
  return (
    <a href={link} target="_blank">
      <div className="imgg"><img className="hover" src={src} alt={`${h3} logo`} /></div>
      
      <h3>{h3}  <a target='main'  id='project-card-github' href={github}><img src={githubLight} alt="Github icon" /></a></h3>
      <p>{p}</p>
    </a>
  );
}

export default ProjectCard;
