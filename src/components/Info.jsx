import ukFlag from "../images/UK-Flag.png";
import esFlag from "../images/Spain-Flag.png";
import skullGif from "../images/skull2.gif";
import womanLoom from "../images/mujer_telar.jpg"; //TODO: elige una mejor xd
import PropTypes from "prop-types";
import { useState } from "react";

function Info({ isEnglish, changeLanguage }) {
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

  const handleLanguage = (ev) => {
    ev.preventDefault();
    changeLanguage();
  };

  return (
    <section className="info--background">
      <div
        className={`divflag ${isEnglish ? "hiddenlanguage" : ""}`}
        
      >
        <img className="info--flag uk" src={ukFlag} alt="UK's flag" onClick={handleLanguage} />
      </div>
      <div
        className={`divflag ${isEnglish ? "" : "hiddenlanguage"}`}
        
      >
        <img className="info--flag es" src={esFlag} alt="Bandera de España" onClick={handleLanguage}/>
      </div>
      <article className={`info--article ${isEnglish ? "hiddenlanguage" : ""}`}>
        <h3 className="info--article__title" onMouseOver={handleOver1}>
          ¿Quién soy?
        </h3>
        <p className={`info--article__paragraph ${isHidden1 ? "hidden" : ""}`}>
          Aunque siempre es complicado contestar a esa pregunta, puedo decir con
          total seguridad que soy alguien que tiene una confianza absoluta en
          que he nacido para programar.
        </p>
        <p
          className={`info--article__paragraph--p ${
            isHidden1 && isHidden2 ? "" : "hidden"
          }`}
        >
          <img src={skullGif} alt="gif de una calavera fumando" />
        </p>
        <h3 className="info--article__title" onMouseOver={handleOver2}>
          Tecnologías trabajadas
        </h3>
        <p className={`info--article__paragraph ${isHidden2 ? "hidden" : ""}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi
          culpa quo, reprehenderit molestiae sequi odio eius facilis temporibus,
          fugiat adipisci, sint tenetur mollitia. Mollitia, ex facere?
          Provident, at repellendus!
        </p>
      </article>

      <article className={`info--article ${isEnglish ? "" : "hiddenlanguage"}`}>
        <h3 className="info--article__title" onMouseOver={handleOver1}>
          Who am I?
        </h3>
        <p className={`info--article__paragraph ${isHidden1 ? "hidden" : ""}`}>
          Although it is always difficult to answer that question, I can say
          with complete confidence that I am someone who has absolute confidence
          that I was born to program.
        </p>
        <p
          className={`info--article__paragraph--p ${
            isHidden1 && isHidden2 ? "" : "hidden"
          }`}
        >
          <img src={skullGif} alt="gif de una calavera fumando" />
        </p>
        <h3 className="info--article__title" onMouseOver={handleOver2}>
          ENGLISH!
        </h3>
        <p className={`info--article__paragraph ${isHidden2 ? "hidden" : ""}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi
          culpa quo, reprehenderit molestiae sequi odio eius facilis temporibus,
          fugiat adipisci, sint tenetur mollitia. Mollitia, ex facere?
          Provident, at repellendus!
        </p>
      </article>
    </section>
  );
}

Info.propTypes = {
  isEnglish: PropTypes.bool,
  setIsEnglish: PropTypes.func,
  changeLanguage: PropTypes.func,
};

export default Info;
