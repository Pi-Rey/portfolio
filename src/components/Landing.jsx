import Contact from "./Contact";
import Info from "./Info";
import PropTypes from "prop-types";
import Projects from "./Projects";
import Menu from "./Menu";
import Filter from "./Filter";
import poemLanding from "../images/poeta-landing.png";
import apiLanding from "../images/api-landing.png";
import circleUsage from "../images/circle_usage_internet.png";
import { useState } from "react";

function Landing({ isEnglish, changeLanguage }) {
  const projectsArray = [
    //array falso para probar
    {
      name: "¿Qué poema eres hoy?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste optio nemo eos earum officia sunt non aut dolorem adipisci quia, quam perferendis quaerat quae fugiat, quasi vitae corporis voluptatum delectus.",
      image: poemLanding,
      alt: "página de inicio de la web de poemas",
      url: "https://pi-rey.github.io/que-poeta-eres/#/",
      project: true,
      code: true,
      others: false,
    },
    {
      name: "API Rest",
      desc: " Veniam eveniet ut laboriosam tempore temporibus ab molestiae quae adipisci. Adipisci, laborum ipsum. Asperiores, autem? Suscipit officia nisi quam magnam, velit commodi doloremque deserunt, harum minus hic sapiente optio temporibus!",
      image: apiLanding,
      alt: "front-end básico para hacer CRUD a una API",
      url: "https://github.com/Pi-Rey/modulo-4-evaluacion-final-bpw-Pi-Rey",
      project: false,
      code: true,
      others: false,
    },
    {
      name: "Web accessibility and people with visual impairments",
      desc: "  Officia est maxime cumque soluta laborum doloribus atque quo perspiciatis illo vel ipsa quasi animi iure, suscipit saepe facilis aperiam voluptatem amet provident odit sint. Quos, natus! A, ut voluptates!",
      image: circleUsage,
      alt: `Esquema presente en la publicación. Representa el ciclo de uso del internet y tiene tres partes: "assistive technologies", "educational support" y "experience"`,
      url: "https://urn.kb.se/resolve?urn=urn:nbn:se:uu:diva-480510",
      project: false,
      code: false,
      others: true,
    },
    // {
    //     name: "proyecto3",
    //     desc: " Minima sit reprehenderit porro nostrum officia odio voluptates tempora, possimus numquam, cum consequuntur vitae magni cumque exercitationem quibusdam beatae sint in, alias facere dolore! Aliquid quia nulla amet deserunt illum.",
    //     image:
    //       "https://images.ctfassets.net/i01duvb6kq77/11DmQUt3xqifmn8Q9ut9HK/0a12c8a1780c666060acfa1366de2df7/Europeana.eu-2022711-urn_repox_ist_utl_pt_MH_385980-1467cf3f9bb9381f607a6cb8f842c308.jpg?w=1100&q=80&fm=webp",
    //     alt: "dsfwgrwggw",
    //     project: false,
    //     code: false,
    //     others: true,
    //   },
  ];
  const [inputType, setInputType] = useState("");

  //resetear el valor del input
  // const reset = () => {
  //     setInputType("");
  //   };

  const filteredProjects = projectsArray.filter((project) => {
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
      <Filter setInputType={setInputType} inputType={inputType} />
      <Projects projectsArray={filteredProjects} />
      <Contact />
    </section>
  );
}

Landing.propTypes = {
  isEnglish: PropTypes.bool,

  changeLanguage: PropTypes.func,
};
export default Landing;
