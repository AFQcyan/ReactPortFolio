import { React, Fragment, useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import jsonData from "../resources/json/portfolio-info.json";

// component
import StationDot from "../components/StationDot";
import PortFolioDetail from "./PortFolioDetail";
import MoveDot from "./MoveDots";

const PortFolio = (props) => {
  const { setMouseRotateDeg } = props;

  const [activeDot, setActiveDot] = useState(0);

  const [moveDotState, setMoveDotState] = useState(0);

  const portFolioRef = useRef(null);
  const upDownRef = useRef(null);
  const scrollingRef = useRef(null);
  const wheelNumRef = useRef(0);

  useEffect(() => {
    const isWheel = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const portCont = portFolioRef.current;

      if (portCont) {
        upDownRef.current = e.wheelDeltaY;
        // console.log(wheelNumRef.current);
        if (
          !scrollingRef.current &&
          !(
            (wheelNumRef.current === 0 && upDownRef.current > 0) ||
            (wheelNumRef.current === jsonData.portfolios.length - 1 &&
              upDownRef.current < 0)
          )
        ) {
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
          setMoveDotState(1);
          scrollingRef.current = setTimeout(() => {
            scrollingRef.current = false;
            setMoveDotState(0);
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

  const returnDot = (portFolioNum) => {
    let dmArr = [];
    for (let i = 0; i < portFolioNum; i++) {
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

  const returnDetails = (portFolioNum) => {
    let dmArr = [];
    for (let i = 0; i < portFolioNum; i++) {
      dmArr.push(1);
    }

    let sortedJson = jsonData.portfolios;
    sortedJson.sort((a, b) => {
      return b.endDate - a.endDate;
    });

    dmArr = dmArr.map((x, i) => {
      return <PortFolioDetail key={i} jsonData={sortedJson[i]} />;
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
          <MoveDot moveDotState={moveDotState} />
          <div
            id="portfolio-detail-container"
            ref={portFolioRef}
            style={{ "--portfolio-amount": jsonData.portfolios.length }}
          >
            <div id="portfolio-details">
              {returnDetails(jsonData.portfolios.length)}
            </div>
            <div id="station-line">{returnDot(jsonData.portfolios.length)}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PortFolio;
