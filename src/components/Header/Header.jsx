import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Header.css";

export default function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="group-1">
        {/* Links para as seções da página */}
        <a href="#about" className="about1">{t("about")}</a>
        <a href="#projects" className="projects">{t("projects")}</a>
        <a href="#contact" className="contact">{t("contact")}</a>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {/* Links no menu mobile */}
          <a href="#about" className="about1">{t("about")}</a>
          <a href="#projects" className="projects">{t("projects")}</a>
          <a href="#contact" className="contact">{t("contact")}</a>
        </div>
      )}
    </div>
  );
}
