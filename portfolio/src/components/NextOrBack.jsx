import { React, Fragment, useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NextOrBack = (props) => {
  const { jsonData, slideIndex, setSlideIndex, setIsIndexIncrease } = props;

  const backRef = useRef(null);
  const nextRef = useRef(null);

  const isImgChange = (isBackBtn) => {
    if (isBackBtn) {
      setSlideIndex(slideIndex === 0 ? 0 : slideIndex - 1);
      setIsIndexIncrease(false);
    } else {
      setSlideIndex(
        slideIndex === jsonData.imgLen - 1
          ? jsonData.imgLen - 1
          : slideIndex + 1
      );
      setIsIndexIncrease(true);
    }
  };

  return (
    <div id="next-or-back">
      <button
        className="back"
        onClick={() => {
          isImgChange(true);
        }}
      >
        <FontAwesomeIcon
          icon="fa-solid fa-arrow-left"
          style={{ color: "#74C0FC" }}
        />
      </button>
      <button
        className="next"
        onClick={() => {
          isImgChange(false);
        }}
      >
        <FontAwesomeIcon
          icon="fa-solid fa-arrow-right"
          style={{ color: "#222" }}
        />
      </button>
    </div>
  );
};
export default NextOrBack;
