import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // Importando o hook para traduções
import "./ProjectCard.css";

const ProjectCard = ({ image, title, description, techStack, link }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation(); // Hook de tradução

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
            {isExpanded ? t("read_less") : t("read_more")} {/* Tradução dinâmica */}
          </span>
        </div>
        <p className="project-tech">{t("technology")}: {techStack}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
            {t("view_code")}
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
