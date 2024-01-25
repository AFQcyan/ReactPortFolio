import { React, Fragment, useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import playerImg from "../../resources/image/Game/Player.png";

const Player = (props) => {
  const { playerInfo } = props;

  return (
    <img
      src={playerImg}
      style={{
        left: playerInfo.playerPos + "px",
      }}
      alt="Player"
      title="Player"
    />
  );
};

export default Player;
