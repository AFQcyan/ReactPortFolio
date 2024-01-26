import { React, Fragment, useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EachCell from "./Game/GameCell";

const PortFolioGame = (props) => {
  const { setMouseIsBan, viewWidth, currentPage } = props;
  const [gameState, setGameState] = useState(false);
  const [playerPos, setPlayerPos] = useState({
    posX: 0,
    posY: 0,
  });

  const portRef = useRef(null);
  const gameStartContainer = useRef(null);

  const bossRef = useRef(null);
  const playRef = useRef(null);
  const statRef = useRef(null);

  const tableRef = useRef(null);

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
      document.addEventListener("mousemove", (e) => {
        e.stopPropagation();
        document.querySelector("#mouse-track-img").style.opacity = 0;
      });
      window.addEventListener("keydown", (e) => {
        if (e.key === "a") {
          console.log("a!");
        }
      });
    }

    const tableCurr = tableRef.current;
    if (tableCurr) {
      tableCurr.style.height = tableCurr.clientWidth + "px";
    }
  }, [gameState]);

  useEffect(() => {
    const tableCurr = tableRef.current;
    if (tableCurr) {
      tableCurr.style.height = tableCurr.clientWidth + "px";
    }
  }, [viewWidth]);

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
            <div>
              <h1>DO YOU WANT TO SEE MY PORTFOLIO?</h1>
              <div className="btn-row">
                <button onClick={onGameStart}>START GAME</button>
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div>
            <div id="boss-is-here-container" ref={bossRef}></div>
            <div id="game-container" ref={playRef}>
              <table ref={tableRef} border={1}>
                <tbody>
                  <TableDOM />
                </tbody>
              </table>
            </div>
            <div id="stat-container" ref={statRef}></div>
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

  const TableDOM = () => {
    let dmArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    dmArr = dmArr.map((x, i) => {
      return (
        <tr>
          <RowDOM key={i} index={i} />
        </tr>
      );
    });

    return dmArr;
  };

  const RowDOM = (props) => {
    let dmArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    dmArr = dmArr.map((x, i) => {
      const { index } = props;
      return (
        <td>
          <EachCell
            playerPos={playerPos}
            key={i}
            charPosX={i}
            charPosY={index}
          />
        </td>
      );
    });

    return dmArr;
  };

  return (
    <Fragment>
      <div id="portfolio-container" ref={portRef}>
        {renderComponent(gameState)}
      </div>
    </Fragment>
  );
};

export default PortFolioGame;
