import { React, Fragment, useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GameCell = (props) => {
  const { playerPos, charPosX, charPosY } = props;

  const cellRef = useRef(null);

  useEffect(() => {
    if (playerPos.posX === charPosX) {
      cellRef.current.className = "selected";
    } else {
      cellRef.current.className = "";
    }
  }, [playerPos]);
  return <div ref={cellRef}></div>;
};

export default GameCell;
