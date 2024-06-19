import { useState } from "react";
import PropTypes from "prop-types";

function Game({setIsHiddenGame, array, setArray, isVictory, setIsVictory, message, setMessage}) {

  const [isHidden, setIsHidden] = useState(true);


  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const createArray = () => {
    setArray([
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
      ])
    const newArray = array.map((row) => [...row]);
    const row = getRandomInt(4);
    const column = getRandomInt(3);
    newArray[row][column] = 0;
    console.log(newArray);
    return newArray;
  };

  const findMine = (clicked) => {
    const content = clicked.textContent;
    if (content === "1") {
      return false;
    } else if (content === "0") {
      return true;
    }
  };
  const handleSearch = (ev) => {
    ev.preventDefault();
    const target = ev.target;
  //  console.log(target);
    const isMine = findMine(target);
   // console.log(isMine);
    if (isMine) {
      
      setMessage("Has ganado :). Haz click en Iniciar partida para jugar de nuevo");
      setIsVictory(true);
      target.classList.add("mine");
      setArray([
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
      ]);

     // setIsHidden(!isHidden);
    } else if (isMine === false) {
      target.classList.add("notmine");
      setMessage("Ahí no está.");
    }
  };

  const renderGame = (arr) => {
    return arr.map((item, i) => {
      return (
        <div key={i} className="div-row">
          <div className={`div-column js-column ${isVictory ? "victory" : ""} `} onClick={handleSearch}>
            {item[0]}
          </div>
          <div className={`div-column js-column ${isVictory ? "victory" : ""}`} onClick={handleSearch}>
            {item[1]}
          </div>
          <div className={`div-column js-column ${isVictory ? "victory" : ""}`} onClick={handleSearch}>
            {item[2]}
          </div>
        </div>
      );
    });
  };

  const handleGame = (ev) => {
    ev.preventDefault();
    setIsVictory(false);
    const newArray = createArray();
    setArray(newArray);
    //console.log(array);
    setIsHidden(false);
    renderGame(array);
    setMessage("Ánimo!")
  };

  const handleClose = (ev) =>{
    ev.preventDefault()
    setIsVictory(false);
    const newArray = createArray();
    setArray(newArray);
    //console.log(array);
    setIsHidden(false);
    renderGame(array);
    setMessage("Encuentra la mina!")
    setIsHiddenGame(true)
  }

  return (
    <section className="sectiongame">
        <div className="modal">
            <button className="modalCloseButton" onClick={handleClose}>x</button>
      <button className="btn-play" onClick={handleGame}>
        Iniciar partida
      </button>

      <p className="msg">{message}</p>
      <section className={`overfield ${isHidden ? "hidden" : ""}`}>
        {renderGame(array)}
      </section>
      </div>
    </section>
  );
}

Game.propTypes = {
    setIsHiddenGame: PropTypes.func,
    array: PropTypes.array,
     setArray: PropTypes.func,
     isVictory: PropTypes.bool,
     setIsVictory: PropTypes.func,
     message: PropTypes.string,
     setMessage: PropTypes.func,
  };

export default Game;
