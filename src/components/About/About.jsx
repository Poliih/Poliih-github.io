import React from "react";
import './About.css';
import Button1 from "../Shapes/Button1/Button1";
import Button2 from "../Shapes/Button2/Button2";
import { useTranslation } from "react-i18next"; 

function About() {
  const { t } = useTranslation();

  return (
    <div className="about2">
      <p className="about-text">
        {t("greeting")} <br />
        <span className="highlight">{t("name")}</span>
      </p>
      <div className="about-buttons">
        <a href="https://www.linkedin.com/in/poliih-rodrigues" target="_blank" rel="noopener noreferrer">
            <Button1 text={t("linkedin")} />
        </a>
        <a href="/About/CurriculoPoliana-2025.pdf" download>
            <Button2 text={t("download_cv")} />
        </a>
      </div>
    </div>
  );
}

export default About;
