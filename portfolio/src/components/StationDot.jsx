import { React, Fragment, useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StationDot = (props) => {
  const { dotIdx, activeDot, wheelRef } = props;

  useEffect(() => {
    if (wheelRef.current) {
      const portCurr = wheelRef.current;

      portCurr.style.left = -100 * activeDot + "%";
      portCurr.style.transfrom = -100 * activeDot + "%";
    }
  }, [activeDot]);
  return (
    <div>
      <div>{dotIdx + 1}</div>
    </div>
  );
};

export default StationDot;
