import { React, Fragment, useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Indicator = (props) => {
  const { currIdx, maxLen } = props;

  const indiRef = useRef(null);

  useEffect(() => {
    if (indiRef.current) {
      const curr = indiRef.current;

      Array.from(curr.childNodes).forEach((x, i) => {
        if (i === currIdx) {
          x.style.backgroundColor = "#222";
          x.style.border = "2px solid white";
          x.style.scale = "200%";
        } else {
          x.style.backgroundColor = "#fff";
          x.style.border = "2px solid rgba(0,0,0,0)";
          x.style.scale = "100%";
        }
      });
    }
  }, [currIdx]);

  const returnIndicateDot = () => {
    let dmArr = [];
    for (let i = 0; i < maxLen; i++) {
      dmArr.push(<div key={i}></div>);
    }
    return dmArr;
  };

  return (
    <div id="indicator" ref={indiRef}>
      {returnIndicateDot(currIdx, maxLen)}
    </div>
  );
};

export default Indicator;
