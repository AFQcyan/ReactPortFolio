import { React, Fragment, useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import ReactHtmlParser from "react-html-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// component

import PortFolioImage from "./PortFolioImage";
import NextOrBack from "./NextOrBack";
import Indicator from "./Indicator";

const portFolioContext = require.context(
  "../resources/image/PortFolio/",
  true,
  /\.(png)$/
);

const PortFolioDetail = (props) => {
  const { jsonData } = props;

  const [slideIndex, setSlideIndex] = useState(0);
  const [isIndexIncrease, setIsIndexIncrease] = useState(null);
  const [nextSlideIndex, setNextSlideIndex] = useState(null);

  const [isDetailState, setIsDetailState] = useState(0);

  const detailRef = useRef(null);
  const imgRef = useRef(null);
  const txtBodyRef = useRef(null);

  const txtPartScriptRef = useRef(null);
  const txtPartInfoRef = useRef(null);
  const stateChangeBtnRef = useRef(null);

  useEffect(() => {
    console.log(slideIndex, isIndexIncrease, nextSlideIndex);
  }, [slideIndex, isIndexIncrease, nextSlideIndex]);

  const returnImgs = (imgKey) => {
    const imgFiles = portFolioContext.keys().filter((x) => {
      return x.split("/")[1] === imgKey;
    });

    const dmArr = imgFiles
      .sort((a, b) => {
        return (
          parseInt(a.split("/")[2].split(".")[0].split("-")[1]) -
          parseInt(b.split("/")[2].split(".")[0].split("-")[1])
        );
      })
      .map((imgFile, i) => {
        // const imgPath = imgFile.replace("./", "");
        const imgSrc = portFolioContext(imgFile);
        const imgId = imgFile.replace("./", "").replace(".png", "");
        return (
          <PortFolioImage
            imgSrc={imgSrc}
            altTitle={imgId}
            showIndex={i}
            slideIndex={slideIndex}
          />
        );
      });

    return dmArr;
  };

  useEffect(() => {
    const iRef = imgRef.current;
    if (iRef) {
      const imgs = Array.from(
        Array.from(iRef.childNodes).filter((x) => {
          return x.className === "show-img";
        })[0].childNodes
      ).filter((x) => {
        return x.tagName === "IMG";
      });
      imgs.forEach((x, i) => {
        if (i === slideIndex) {
          x.style.opacity = 1;
          x.style.scale = "100%";
          x.style.left = "0%";
          x.style.rotate = "0deg";
        } else if (i < slideIndex) {
          x.style.opacity = 0;
          x.style.scale = "150%";
          x.style.left = "20%";
          x.style.rotate = "-5deg";
        } else {
          x.style.opacity = 0;
          x.style.scale = "50%";
          x.style.left = "-20%";
          x.style.rotate = "5deg";
        }
      });
    }
  }, [slideIndex, isIndexIncrease]);
  useEffect(() => {
    switch (isDetailState) {
      case 0:
        txtPartInfoRef.current.style.transform =
          "translate3D(0%, 0%, 0px) rotateY(180deg)";
        txtPartInfoRef.current.style.padding = "0";
        txtPartScriptRef.current.style.transform =
          "translate3D(0%, 0%, 0px) rotateY(360deg)";
        txtPartScriptRef.current.style.padding = "0rem 1rem";
        break;
      case 1:
        txtPartInfoRef.current.style.transform =
          "translate3D(0%, 0%, 0px) rotateY(0deg)";
        txtPartInfoRef.current.style.padding = "0rem 1rem";
        txtPartScriptRef.current.style.transform =
          "translate3D(0%, 0%, 0px) rotateY(180deg)";
        txtPartScriptRef.current.style.padding = "0";
        break;
      default:
    }
  }, [isDetailState]);

  return (
    <Fragment>
      <div className="portfolio-detail" ref={detailRef}>
        <div className="img-side" ref={imgRef}>
          <div className="show-img">
            <NextOrBack
              jsonData={jsonData}
              slideIndex={slideIndex}
              nextSlideIndex={nextSlideIndex}
              setSlideIndex={setSlideIndex}
              setIsIndexIncrease={setIsIndexIncrease}
              setNextSlideIndex={setNextSlideIndex}
            />
            {returnImgs(jsonData.imgId)}
          </div>
          <Indicator currIdx={slideIndex} maxLen={jsonData.imgLen} />
        </div>
        <div className="txt-side">
          <div className="txt-header">
            <h1>{jsonData.name}</h1>
            <p>
              {jsonData.startDate}
              {jsonData.startDate === jsonData.endDate
                ? ""
                : " - " + jsonData.endDate}{" "}
              &nbsp;&nbsp;&nbsp;
              <span>|</span>&nbsp;&nbsp;&nbsp;
              {jsonData.type}
            </p>
          </div>
          <button
            className="txt-body"
            ref={txtBodyRef}
            onClick={() => {
              setIsDetailState(Math.abs(isDetailState - 1));
            }}
          >
            {/* <span>
              <FontAwesomeIcon icon="fa-solid fa-rotate-right" spin />
            </span> */}
            <div className="part-one" ref={txtPartScriptRef}>
              <p>{ReactHtmlParser(jsonData.script)}</p>
            </div>
            <div className="part-two" ref={txtPartInfoRef}>
              <h2>주 기능</h2>
              <p>{jsonData.main}</p>
              <h5>
                <FontAwesomeIcon icon="fa-brands fa-github" size="1x" />
                <a href={jsonData.github}>{jsonData.github}</a>
              </h5>
              <h5>
                <FontAwesomeIcon icon="fa-solid fa-link" />
                <a href={jsonData.github}>{jsonData.github}</a>
              </h5>
              <div className="lang-detail">
                <div>
                  <h4>Front-end</h4>
                  <p>{jsonData.front}</p>
                </div>
                <div>
                  <h4>Back-end</h4>
                  <p>{jsonData.back}</p>
                </div>
                <div>
                  <h4>DATABASE</h4>
                  <p>{jsonData.database}</p>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </Fragment>
  );
};
export default PortFolioDetail;
