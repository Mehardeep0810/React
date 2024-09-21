/* eslint-disable react/prop-types */
// ProjectCard.js (React component)

import React, { useState } from 'react';
import '../components/ProjectCard.css';

const ProjectCard = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  return (
    <figure className="project-card">
      <img src={project.image} alt={project.title} />
      <figcaption>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <button className='btn' onClick={toggleDetails}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        {showDetails && (
          <div className="technology-details">
            <h4>Technologies Used:</h4>
            <ul>
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        )}
      </figcaption>
    </figure>
  );
};

export default ProjectCard;
