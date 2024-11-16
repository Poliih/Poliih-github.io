import React, { useState } from "react";
import "./ProjectCard.css";

const ProjectCard = ({ image, title, description, techStack, link }) => {
  const [isExpanded, setIsExpanded] = useState(false); // Controle do estado de expansão

  const handleToggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className={`project-overlay ${isExpanded ? "expanded" : ""}`}>
        <h2 className="project-title">{title}</h2>
        <div className="project-description-container">
          <p className={`project-description ${isExpanded ? "expanded" : ""}`}>
            {description}
          </p>
          <span
            className="read-more-btn"
            onClick={handleToggleExpand}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </span>
        </div>
        <p className="project-tech">Tech: {techStack}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
            View Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
