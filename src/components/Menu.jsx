import { useState } from "react";
import PropTypes from "prop-types";
import ukFlag from "../images/UK-Flag.png";
import esFlag from "../images/Spain-Flag.png";
import Game from "./Game";

//TODO: aria-hidden="true" en todo lo que no es la ventana modal al clickar en ella para no liar a los screen-readers https://github.com/gdkraus/accessible-modal-dialog?tab=readme-ov-file
function Menu({ changeLanguage, isEnglish }) {
  const [isHiddenMenu, setIsHiddenMenu] = useState(true);
  const [isHiddenGame, setIsHiddenGame] = useState(true);
  const [array, setArray] = useState([
    
  ]);
  
  const [message, setMessage] = useState("");
  const [isVictory, setIsVictory] = useState(false)

  const handleMenu = (ev) => {
    ev.preventDefault();
    setIsHiddenMenu(!isHiddenMenu);
  };
  const handleLanguage = (ev) => {
    ev.preventDefault();
    changeLanguage();
  };

  const doScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenGame = (ev) => {
    ev.preventDefault();
    setMessage("Mucha suerte!");
    setIsVictory(false);
    setArray([
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ]);
    setIsHiddenGame(!isHiddenGame)
  }
  return (
    <>
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
          <li onClick={() => doScroll("landing")}>Portada</li>
          <li onClick={() => doScroll("info")}>Info</li>
          <li onClick={() => doScroll("projects")}>Proyectos</li>
          <li className="littlegame" onClick={handleOpenGame}> Pausa para un juego</li>
          <li onClick={() => doScroll("contact")}>Contacto</li>
        </ul>
      </nav>
      <nav className={`menu--nav ${isEnglish ? "" : "hiddenlanguage"} ${isHiddenMenu ? "hidden" : ""}`}>
        <ul className="menu--ul">
          <li onClick={() => doScroll("landing")}>Home</li>
          <li onClick={() => doScroll("info")}>Info</li>
          <li onClick={() => doScroll("projects")}>Projects</li>
          <li className="littlegame" onClick={handleOpenGame}>A silly little game</li>
          <li onClick={() => doScroll("contact")}>Contact</li>
        </ul>
      </nav>
    </section>
    <section className={`${isHiddenGame ? "hidden" : ""}`}>
        < Game setIsHiddenGame={setIsHiddenGame} array={array} setArray={setArray} isVictory={isVictory} setIsVictory={setIsVictory} message={message} setMessage={setMessage} />
    </section>
    </>
  );
}

Menu.propTypes = {
  isEnglish: PropTypes.bool,
  changeLanguage: PropTypes.func,
};
export default Menu;
