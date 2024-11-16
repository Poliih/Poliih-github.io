import React from "react";
import { useTranslation } from "react-i18next";
import "./Header.css";

export default function Header() {
  const { t } = useTranslation(); 

  return (
    <div className="header">
      <div className="group-1">
        <p className="about1">{t("about")}</p>
        <p className="projects">{t("projects")}</p>
        <p className="contact">{t("contact")}</p>
      </div>
    </div>
  );
}
