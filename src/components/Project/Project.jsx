import React from "react";
import { useTranslation } from "react-i18next"; // Importando o hook para as traduções
import ProjectCard from "../Shapes/ProjectCard/ProjectCard";
import "./Project.css";
import photo1 from "./photo/photo1.jpg";
import photo2 from "./photo/photo2.jpg";
import photo4 from "./photo/photo4.jpg";
import photo5 from "./photo/photo5.jpg";
import photo6 from "./photo/photo6.jpg";

const Project = () => {
  const { t } = useTranslation(); // Usando o hook para obter as traduções

  return (
    <div className="projects-container">
      <ProjectCard
        image={photo4}
        title={t("suntech")} // Tradução dinâmica
        description={t("suntechDescription")} // Tradução dinâmica
        techStack={t("suntechTech")} // Tradução dinâmica
        link="https://github.com/Poliih/SunTech"
      />
      <ProjectCard
        image={photo2}
        title={t("recruitment")}
        description={t("recruitmentDescription")}
        techStack={t("recruitmentTech")}
        link="https://github.com/Poliih/recruitment"
      />
      <ProjectCard
        image={photo4}
        title={t("sensorReading")}
        description={t("sensorReadingDescription")}
        techStack={t("sensorReadingTech")}
        link="https://github.com/Poliih/TemperaturaUmidadeRS485Modbus"
      />
      <ProjectCard
        image={photo5}
        title={t("fuelControl")}
        description={t("fuelControlDescription")}
        techStack={t("fuelControlTech")}
        link="https://github.com/Poliih/Posto"
      />
      <ProjectCard
        image={photo1}
        title={t("dijkstra")}
        description={t("dijkstraDescription")}
        techStack={t("dijkstraTech")}
        link="https://github.com/Poliih/algoritmoDijkstra"
      />
      <ProjectCard
        image={photo6}
        title={t("binaryTree")}
        description={t("binaryTreeDescription")}
        techStack={t("binaryTreeTech")}
        link="https://github.com/Poliih/arvoreBinaria"
      />
    </div>
  );
};

export default Project;
