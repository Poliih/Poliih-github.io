import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          greeting: "Hii! My name is",
          name: "Poliana Rodrigues",
          linkedin: "Linkedin",
          download_cv: "Download CV",
          github: "GitHub",
          email: "Email",
          about: "About",
          projects: "Projects",
          contact: "Contact",
          suntech: "SunTech - AI",
          suntechDescription: "A solar energy consumption forecasting and allocation system developed for the thesis titled 'Artificial Intelligence in Distributed Solar Energy Generation: Allocation Analysis.'",
          suntechTech: "Python, React, TensorFlow, Flask, SQLAlchemy, MySQL, MUI, Chart.js",
          recruitment: "Recruitment System ",
          recruitmentDescription: "This project is a recruitment system that enables the creation, viewing, editing, and deletion of job openings, as well as candidates' applications for these positions.",
          recruitmentTech: "Spring Boot - Java, Angular, Postgresql",
          sensorReading: "Sensor Reading",
          sensorReadingDescription: "A project designed to read temperature and humidity data from a Modbus.",
          sensorReadingTech: "Python, Minimalmodbus",
          fuelControl: "Control System",
          fuelControlDescription: "A project designed to manage fuel inventory, allowing refilling, vehicle fueling, and stock monitoring with encapsulated Java methods.",
          fuelControlTech: "Java",
          dijkstra: "Dijkstra Algorithm",
          dijkstraDescription: "A project developed to find the optimal route using Dijkstra's algorithm, helping app drivers to minimize fuel costs based on historical data.",
          dijkstraTech: "C",
          binaryTree: "Binary Tree",
          binaryTreeDescription: "A project that implements a binary tree with ordered insertion based on the digits of the RA number, performing a pre-order traversal to print the visited nodes.",
          binaryTreeTech: "C, Data Structures",
          infoTitle: "<Software Engineer />",  // Adicionando título da seção
          infoText: "I am a technology enthusiast and self-taught developer. Throughout my journey, I quickly learned to adapt to various tools and technologies, always with the goal of solving complex problems efficiently. I enjoy working in teams, seeking innovative solutions to everyday challenges.",
          hardSkills: "Hard Skills",  // Adicionando título de Hard Skills
        },
      },
      pt: {
        translation: {
          greeting: "Oi! Meu nome é",
          name: "Poliana Rodrigues",
          linkedin: "LinkedIn",
          download_cv: "Baixar CV",
          github: "GitHub",
          email: "E-mail",
          about: "Sobre",
          projects: "Projetos",
          contact: "Contato",
          suntech: "SunTech - IA",
          suntechDescription: "Um sistema de previsão e alocação de consumo de energia solar desenvolvido para a tese intitulada 'Inteligência Artificial na Geração Distribuída de Energia Solar: Análise de Rateio.'",
          suntechTech: "Python, React, TensorFlow, Flask, SQLAlchemy, MySQL, MUI, Chart.js",
          recruitment: "Sist. de Recrutamento",
          recruitmentDescription: "Este projeto é um sistema de recrutamento que permite a criação, visualização, edição e exclusão de vagas de emprego, assim como as candidaturas dos candidatos.",
          recruitmentTech: "Spring Boot - Java, Angular, Postgresql",
          sensorReading: "Leitura de Sensor",
          sensorReadingDescription: "Um projeto desenvolvido para ler dados de temperatura e umidade de um Modbus.",
          sensorReadingTech: "Python, Minimalmodbus",
          fuelControl: "Sist. de Combustível",
          fuelControlDescription: "Um projeto desenvolvido para gerenciar o estoque de combustível, permitindo reabastecimento, abastecimento de veículos e monitoramento de estoque com métodos Java encapsulados.",
          fuelControlTech: "Java",
          dijkstra: "Algoritmo de Dijkstra",
          dijkstraDescription: "Um projeto desenvolvido para encontrar a rota ideal usando o algoritmo de Dijkstra, ajudando motoristas de aplicativo a minimizar custos de combustível com base em dados históricos.",
          dijkstraTech: "C",
          binaryTree: "Árvore Binária",
          binaryTreeDescription: "Um projeto que implementa uma árvore binária com inserção ordenada baseada nos dígitos do número RA, realizando uma travessia em pré-ordem para imprimir os nós visitados.",
          binaryTreeTech: "C, Estruturas de Dados",
          infoTitle: "<Engenheira de Software />",  // Título traduzido
          infoText: "Sou uma apaixonada por tecnologia e desenvolvedora autodidata. Ao longo da minha jornada, aprendi rapidamente a me adaptar às mais diversas ferramentas e tecnologias, sempre com o objetivo de resolver problemas complexos de forma eficiente. Gosto de trabalhar em equipe, buscando soluções inovadoras para desafios do dia a dia.",
          hardSkills: "Hard Skills",  // Traduzindo título de Hard Skills
        },
      },
    },
    lng: 'pt', // Define o idioma padrão como português
    fallbackLng: 'pt', // Caso não encontre o idioma, usa o português
  });

export default i18n;