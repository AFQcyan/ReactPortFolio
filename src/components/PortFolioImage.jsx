import { React, Fragment, useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PortFolioImage = (props) => {
  const { imgSrc, altTitle, showIndex } = props;

  return <img src={imgSrc} alt={altTitle} />;
};

export default PortFolioImage;
