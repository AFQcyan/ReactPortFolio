import { React, Fragment, useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import targetImg from "../resources/image/PortFolio/Insamgol/Insamgol1.png";

const PortFolioDetail = (props) => {
  const { jsonData } = props;

  const returnImgs = (imgAmount) => {
    let dmArr = [];

    const imgRoot = "../resources/image/PortFolio/";
    const ds = "/";

    let imgPath = imgRoot + jsonData.imgId;

    for (let i = 0; i < imgAmount; i++) {
      dmArr.push(1);
    }

    dmArr = dmArr.map((x, i) => {
      let imgSrc = imgPath + ds + (jsonData.imgId + (i + 1)) + ".png";
      console.log(imgSrc);

      return <img key={i} src={imgSrc} alt={jsonData.imgId} />;
    });

    return dmArr;
  };

  return (
    <Fragment>
      <div className="portfolio-detail">
        <div className="img-side">{returnImgs(jsonData.imgLen)}</div>
        <div className="txt-side"></div>
      </div>
    </Fragment>
  );
};
export default PortFolioDetail;
