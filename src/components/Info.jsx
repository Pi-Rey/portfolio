import womanLoom from "../images/mujer_telar.jpg"; //TODO: elige una mejor xd
import PropTypes from "prop-types";
import { useState } from "react";

function Info({ isEnglish }) {
  //mirar el código de Aida para ver cómo hizo lo de mostrar el texto poco a poco.
  const [isHidden1, setIsHidden1] = useState(true);
  const [isHidden2, setIsHidden2] = useState(true);

  const handleOver1 = () => {
    if (isHidden1) {
      setIsHidden1(false);
      setIsHidden2(true);
    } else setIsHidden1(true);
  };

  const handleOver2 = () => {
    if (isHidden2) {
      setIsHidden2(false);
      setIsHidden1(true);
    } else setIsHidden2(true);
  };

  return (
    <section id="info" className="info--background">
      <article className={`info--article ${isEnglish ? "hiddenlanguage" : ""}`}>
        <h3 className="info--article__title" onMouseOver={handleOver1}>
          ¿Quién soy?
        </h3>
        <h3 className="info--article__title" onMouseOver={handleOver2}>
          competencias técnicas
        </h3>
        <p className={`info--article__paragraph ${isHidden1 ? "hidden" : ""}`}>
          <span className="emphasis">Desarrolladora Junior Full-Stack.</span>
          <br />
          Soy una humanista digital que en los últimos años se ha volcado a la
          programación, con amplios como el aprendizaje automático o la
          accesibilidad web.
        </p>
        {/* <p
          className={`info--article__paragraph--p ${
            isHidden1 && isHidden2 ? "" : "hidden"
          }`}
        >
          <img src={womanLoom} alt="imagen de una mujer usando un telar" />
        </p> */}

        <p className={`info--article__paragraph ${isHidden2 ? "hidden" : ""}`}>
          <span className="emphasis">
            HTML5, CSS3, SASS, JavaScript ES6 y React JS
          </span>{" "}
          para el desarrollo front-end. Para el desarrollo back-end: emplea{" "}
          <span className="emphasis">Node.js, Express.js y MySQL.</span> Además,
          conocimientos en programación en <span className="emphasis">C++</span>{" "}
          y en <span className="emphasis">Python</span> enfocado a las Ciencias
          Sociales y Humanidades. También he investigado sobre{" "}
          <span className="emphasis">accesibilidad web</span> y personas con
          discapacidad visual.
        </p>
      </article>

      <article className={`info--article ${isEnglish ? "" : "hiddenlanguage"}`}>
        <h3 className="info--article__title" onMouseOver={handleOver1}>
          Who am I?
        </h3>
        <h3 className="info--article__title" onMouseOver={handleOver2}>
          tech skills
        </h3>
        <p className={`info--article__paragraph ${isHidden1 ? "hidden" : ""}`}>
          <span className="emphasis">Junior Full-Stack Developer.</span>
          <br />I am a digital humanist who in recent years has turned to
          programming with broad interests such as machine learning or web
          accessibility.
        </p>
        {/* <p
          className={`info--article__paragraph--p ${
            isHidden1 && isHidden2 ? "" : "hidden"
          }`}
        >
          <img src={womanLoom} alt="photo of a woman using a loom" />
        </p> */}

        <p className={`info--article__paragraph ${isHidden2 ? "hidden" : ""}`}>
          <span className="emphasis">
            HTML5, CSS3, SASS, JavaScript ES6 and React JS
          </span>{" "}
          for front-end development. For back-end development:{" "}
          <span className="emphasis">Node.js, Express.js and MySQL.</span> In
          addition, knowledge of programming in{" "}
          <span className="emphasis">C++</span> and in{" "}
          <span className="emphasis">Python</span> focused on the Social
          Sciences and Humanities. I have also researched about{" "}
          <span className="emphasis">web accessibility</span> and people with
          visual impairments.
        </p>
      </article>
    </section>
  );
}

Info.propTypes = {
  isEnglish: PropTypes.bool,
};

export default Info;
