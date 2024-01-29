import { React, Fragment, useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import jsonData from "../resources/json/portfolio-info.json";

// component

import StationDot from "../components/StationDot";
const PortFolio = (props) => {
  const { setMouseRotateDeg } = props;

  const [activeDot, setActiveDot] = useState(0);

  const portFolioRef = useRef(null);
  const upDownRef = useRef(null);
  const scrollingRef = useRef(null);
  const wheelNumRef = useRef(null);

  useEffect(() => {
    console.log(jsonData.length);
  }, []);

  useEffect(() => {
    const isWheel = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const portCont = portFolioRef.current;

      if (portCont) {
        upDownRef.current = e.wheelDeltaY;
        if (!scrollingRef.current) {
          wheelNumRef.current =
            upDownRef.current > 0
              ? wheelNumRef.current - 1
              : wheelNumRef.current + 1;
          wheelNumRef.current =
            wheelNumRef.current < 0
              ? 0
              : wheelNumRef.current >= jsonData.portfolios.length
              ? jsonData.portfolios.length - 1
              : wheelNumRef.current;
          console.log(wheelNumRef.current);
          scrollingRef.current = true;
          clearTimeout(scrollingRef.current);
          scrollingRef.current = setTimeout(() => {
            scrollingRef.current = false;
          }, 1250);
        }
      }
      setActiveDot(wheelNumRef.current);
    };

    portFolioRef.current.addEventListener(
      "wheel",
      // (e) => {
      //   e.preventDefault();
      //   e.stopPropagation();
      //   clearTimeout(wheelTimeout);
      //   if (e.wheelDeltaY > 0) {
      //     setSKillIdx(skillIdx - 1);
      //   } else {
      //     setSKillIdx(skillIdx + 1);
      //   }
      // },
      isWheel,
      { passive: false }
    );
  });

  useEffect(() => {
    portFolioRef.current.addEventListener("mouseover", (e) => {
      setMouseRotateDeg(-90);
    });

    portFolioRef.current.addEventListener("mouseout", (e) => {
      setMouseRotateDeg(0);
    });
  });

  const returnDot = (portfolioNum) => {
    let dmArr = [];
    for (let i = 0; i < portfolioNum; i++) {
      dmArr.push(1);
    }
    dmArr = dmArr.map((x, i) => {
      return (
        <StationDot
          key={i}
          dotIdx={i}
          activeDot={activeDot}
          wheelRef={portFolioRef}
          maxPortLen={jsonData.portfolios.length}
        />
      );
    });
    return dmArr;
  };

  return (
    <Fragment>
      <div id="portfolio-container">
        <h1>
          <FontAwesomeIcon icon="fa-regular fa-folder-open" />
          <br />
          MY PORTFOLIO
        </h1>
        <div id="portfolio-choose-container">
          <div
            id="portfolio-detail-container"
            ref={portFolioRef}
            style={{ "--portfolio-amount": jsonData.portfolios.length }}
          >
            <h1>안녕하세요~~~~~~</h1>
            <div id="station-line">{returnDot(jsonData.portfolios.length)}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PortFolio;
