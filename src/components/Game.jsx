import { useState } from "react";

function Game() {
  const [array, setArray] = useState([
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ]);
  const [isHidden, setIsHidden] = useState(true);
  const [message, setMessage] = useState("");
  const [isVictory, setIsVictory] = useState(false)

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const createArray = () => {

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
  };

  return (
    <section>
      <button className="btn-play" onClick={handleGame}>
        Iniciar partida
      </button>

      <p className="msg">{message}</p>
      <section className={`overfield ${isHidden ? "hidden" : ""}`}>
        {renderGame(array)}
      </section>
    </section>
  );
}

export default Game;
