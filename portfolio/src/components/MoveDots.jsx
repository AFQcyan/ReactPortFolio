import { React, Fragment, useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MoveDot = (props) => {
  const { moveDotState } = props;

  const moveDotRef = useRef(null);

  useEffect(() => {
    if (moveDotRef.current) {
      const curr = moveDotRef.current;
      switch (moveDotState) {
        case 0:
          curr.style.scale = "120%";
          curr.style.backgroundColor = "rgba(0,0,0,0)";

          break;
        case 1:
          curr.style.scale = "25%";
          curr.style.backgroundColor = "white";
          break;
        default:
          curr.style.scale = "100%";
      }
    }
  }, [moveDotState]);
  return <div id="move-dot" ref={moveDotRef}></div>;
};

export default MoveDot;
