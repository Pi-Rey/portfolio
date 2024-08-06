import Contact from "./Contact";
import Info from "./Info";
import PropTypes from "prop-types";
import Projects from "./Projects";
import Menu from "./Menu";
import Filter from "./Filter";
import poemLanding from "../images/poeta-landing.png";
import apiLanding from "../images/api-landing.png";
import circleUsage from "../images/circle_usage_internet.png";
import scoreScreenshoot from "../images/score-statistik.png";
import { useState } from "react";

function Landing({ isEnglish, changeLanguage }) {
  const projectsArray = [
    //array falso para probar
    {
      name: "¿Qué poema eres hoy?",
      desc: "¡Haz un pequeño test y recibe una recomendación poética!\n\nHTML5 - CSS3 - SASS - JAVASCRIPT ES6 - REACT JS",
      image: poemLanding,
      alt: "página de inicio de la web de poemas",
      url: "https://pi-rey.github.io/que-poeta-eres/#/",
      project: true,
      code: true,
      others: false,
      language: "spa",
    },
    {
      name: "API Rest",
      desc: "Levanta esta API REST en tu dispositivo y realiza operaciones CRUD previo registro.\n\nNODE.JS - EXPRESS.JS - JAVASCRIPT ES6- MYSQL - GIT - POSTMAN",
      image: apiLanding,
      alt: "interfaz básico de front-end para hacer CRUD a una API",
      url: "https://github.com/Pi-Rey/modulo-4-evaluacion-final-bpw-Pi-Rey",
      project: false,
      code: true,
      others: false,
      language: "spa",
    },
    {
      name: "Estadísticas de calificación académica",
      desc: "Programa en inglés.\nEste programa C++ calcula las calificaciones en función de las notas ingresadas ​​para varias materias.\n\nC++",
      image: scoreScreenshoot,
      alt: `Captura de pantalla de la consola mostrando el programa ejecutado`,
      url: "https://github.com/Pi-Rey/score_statistics",
      project: false,
      code: true,
      others: false,
      language: "spa",
    },
    {
      name: "Web accessibility and people with visual impairments",
      desc: "Artículo en inglés.\nEste artículo explora las perspectivas de personas con discapacidad visual sobre Internet y la accesibilidad web usando métodos de investigación cualitativa.",
      image: circleUsage,
      alt: `Esquema presente en la publicación. Representa el ciclo de uso del internet y tiene tres partes: "tecnologías de asistencia", "apoyo educativo" y "experiencia"`,
      url: "https://urn.kb.se/resolve?urn=urn:nbn:se:uu:diva-480510",
      project: false,
      code: false,
      others: true,
      language: "spa",
    },
    {
        name: "Which poem are you today?",
        desc: "Only available in spanish.\nTake a little test and receive a poetic recommendation!\nSpanish-speaking Women Edition.\n\nHTML5 - CSS3 - SASS - JAVASCRIPT ES6 - REACT JS",
        image: poemLanding,
        alt: "landing of the website",
        url: "https://pi-rey.github.io/que-poeta-eres/#/",
        project: true,
        code: true,
        others: false,
        language: "eng",
      },
      {
        name: "API Rest",
        desc: "Only available in spanish.\nLaunch this REST API on your device and perform CRUD operations after registration.\n\nNODE.JS - EXPRESS.JS - JAVASCRIPT ES6- MYSQL - GIT - POSTMAN",
        image: apiLanding,
        alt: "Basic front-end interface to perform CRUD to an API",
        url: "https://github.com/Pi-Rey/modulo-4-evaluacion-final-bpw-Pi-Rey",
        project: false,
        code: true,
        others: false,
        language: "eng",
      },
      {
        name: "Grade Calculator Program",
        desc: "This C++ program calculates grades based on credits entered for various subjects. It provides functionalities to input credits, convert credits to grades, display grades, and show statistics.\n\nC++",
        image: scoreScreenshoot,
        alt: `Screenshot of the console showing the program executed`,
        url: "https://github.com/Pi-Rey/score_statistics",
        project: false,
        code: true,
        others: false,
        language: "eng",
      },
      {
        name: "Web accessibility and people with visual impairments",
        desc: "This thesis aims to explore the perspectives of people with visual impairments about the internet and web accessibility qualitative research methods.",
        image: circleUsage,
        alt: `Diagram present in the publication. It represents the internet use cycle and has three parts: "assistive technologies", "educational support" and "experience"`,
        url: "https://urn.kb.se/resolve?urn=urn:nbn:se:uu:diva-480510",
        project: false,
        code: false,
        others: true,
        language: "eng",
      },
  ];
  const [inputType, setInputType] = useState("");

  const languageProjects = projectsArray.filter((project) => {
    return isEnglish ? project.language === 'eng' : project.language === 'spa';
  });

  const filteredProjects = languageProjects.filter((project) => {
    if (project[inputType] === true) {
      return true;
    } else if (!inputType) {
      return true;
    }
  });

  return (
    <section id="landing" className="section--background">
      <div className="section--container">
        <h1 className="section--container__name">Pilar Rey Rodríguez</h1>
        <h2 className="section--container__aka">
          a.k.a&nbsp;
          <a
            className="section--container__aka--github"
            href="https://github.com/Pi-Rey"
            target="_blank"
          >
            Pi-Rey <i className="fa-brands fa-github"></i>
          </a>
        </h2>
      </div>
      <Menu isEnglish={isEnglish} changeLanguage={changeLanguage} />
      <Info isEnglish={isEnglish} />
      <Filter
        setInputType={setInputType}
        inputType={inputType}
        isEnglish={isEnglish}
      />
      <Projects projectsArray={filteredProjects} isEnglish={isEnglish} />
      <Contact />
    </section>
  );
}

Landing.propTypes = {
  isEnglish: PropTypes.bool,

  changeLanguage: PropTypes.func,
};
export default Landing;
