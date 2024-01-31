import { React, Fragment, useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// component

import PortFolioImage from "./PortFolioImage";
import NextOrBack from "./NextOrBack";

const portFolioContext = require.context(
  "../resources/image/PortFolio/",
  true,
  /\.(png)$/
);

const PortFolioDetail = (props) => {
  const { jsonData } = props;

  const [slideIndex, setSlideIndex] = useState(0);
  const [isIndexIncrease, setIsIndexIncrease] = useState(null);

  const detailRef = useRef(null);
  const imgRef = useRef(null);

  // useEffect(() => {
  //   console.log(portFolioContext.keys());
  // }, []);

  useEffect(() => {
    console.log(slideIndex, isIndexIncrease);
  }, [slideIndex, isIndexIncrease]);

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
      const imgs = Array.from(iRef.childNodes).filter((x) => {
        return x.tagName === "IMG";
      });
      imgs.forEach((x, i) => {
        if (i !== slideIndex) {
          x.style.opacity = 0;
        } else {
          x.style.opacity = 1;
        }
      });
    }
  }, [slideIndex]);

  return (
    <Fragment>
      <div className="portfolio-detail" ref={detailRef}>
        <div className="img-side" ref={imgRef}>
          <NextOrBack
            jsonData={jsonData}
            slideIndex={slideIndex}
            setSlideIndex={setSlideIndex}
            setIsIndexIncrease={setIsIndexIncrease}
          />
          {returnImgs(jsonData.imgId)}
        </div>
        <div className="txt-side"></div>
      </div>
    </Fragment>
  );
};
export default PortFolioDetail;
