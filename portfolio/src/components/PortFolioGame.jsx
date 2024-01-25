import { React, Fragment, useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Player from "./Game/Player";

const PortFolioGame = (props) => {
  const { setMouseIsBan } = props;
  const [gameState, setGameState] = useState(false);
  const [playerInfo, setPlayerInfo] = useState({
    playerPos: 0,
    playerSpeed: 1,
  });

  const portRef = useRef(null);
  const gameStartContainer = useRef(null);

  const onGameStart = (e) => {
    const current = gameStartContainer.current;
    if (current) {
      current.style.scale = "175%";
      current.style.opacity = "0%";
    }
    setTimeout(() => {
      setGameState(1);
      current.style.scale = "100%";
      current.style.opacity = 1;
    }, 750);
  };

  const renderComponent = (typeState) => {
    switch (typeState) {
      case 0:
        return (
          <div ref={gameStartContainer}>
            <h1>DO YOU WANT TO SEE MY PORTFOLIO?</h1>
            <div className="btn-row">
              <button onClick={onGameStart}>START GAME</button>
            </div>
          </div>
        );
      case 1:
        return (
          <div>
            <div id="portfolio-show-container"></div>
            <div id="game-container">
              <div id="inner-game-container">
                <Player playerInfo={playerInfo}></Player>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div>
            <h1>Error!</h1>
          </div>
        );
    }
  };

  useEffect(() => {
    setGameState(0);
  }, []);

  useEffect(() => {
    if (gameState >= 1 && portRef.current) {
      const curr = portRef.current;
      curr.addEventListener("wheel", (e) => {
        e.stopPropagation();
        e.preventDefault();
      });
      curr.addEventListener("mouseover", (e) => {
        setMouseIsBan(true);
      });

      curr.addEventListener("mouseout", (e) => {
        setMouseIsBan(false);
      });
    }
  }, [gameState]);

  return (
    <Fragment>
      <div id="portfolio-container" ref={portRef}>
        {renderComponent(gameState)}
      </div>
    </Fragment>
  );
};

export default PortFolioGame;
