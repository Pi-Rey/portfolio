import { useState } from "react";
import PropTypes from "prop-types";
import ukFlag from "../images/UK-Flag.png";
import esFlag from "../images/Spain-Flag.png";

function Menu({ changeLanguage, isEnglish }) {
  const [isHiddenMenu, setIsHiddenMenu] = useState(true);

  const handleMenu = (ev) => {
    ev.preventDefault();
    setIsHiddenMenu(!isHiddenMenu);
  };
  const handleLanguage = (ev) => {
    ev.preventDefault();
    changeLanguage();
  };
  return (
    <section className="menu">
        
      <div className="menu--title" >
      <p className={` ${isEnglish ? "hiddenlanguage" : ""}`} onClick={handleMenu}> &#9776; Menú</p>
      <p className={`${isEnglish ? "" : "hiddenlanguage"}`} onClick={handleMenu}> &#9776; Menu</p>
        <div className={`divflag ${isEnglish ? "hiddenlanguage" : ""}`}>
          <img
            className="info--flag uk"
            src={ukFlag}
            alt="UK's flag"
            onClick={handleLanguage}
          />
        </div>
        <div className={`divflag ${isEnglish ? "" : "hiddenlanguage"}`}>
          <img
            className="info--flag es"
            src={esFlag}
            alt="Bandera de España"
            onClick={handleLanguage}
          />
        </div>
        
      </div>

      <nav className={`menu--nav ${isEnglish ? "hiddenlanguage" : ""}  ${isHiddenMenu ? "hidden" : ""}`}>
        <ul className="menu--ul">
          <li>Portada</li>
          <li>Info</li>
          <li>Proyectos</li>
          <li>Pausa recreativa</li>
          <li>Contacto</li>
        </ul>
      </nav>
      <nav className={`menu--nav ${isEnglish ? "" : "hiddenlanguage"} ${isHiddenMenu ? "hidden" : ""}`}>
        <ul className="menu--ul">
          <li>Home</li>
          <li>Info</li>
          <li>Projects</li>
          <li>A silly little game</li>
          <li>Contact</li>
        </ul>
      </nav>
    </section>
  );
}

Menu.propTypes = {
  isEnglish: PropTypes.bool,
  changeLanguage: PropTypes.func,
};
export default Menu;
