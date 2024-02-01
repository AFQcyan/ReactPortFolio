import { React, Fragment, useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NextOrBack = (props) => {
  const {
    jsonData,
    slideIndex,
    nextSlideIndex,
    setSlideIndex,
    setIsIndexIncrease,
    setNextSlideIndex,
  } = props;

  let imgAnime = useRef(null);

  const imgGoing = useRef(false);

  const isImgChange = (isBackBtn) => {
    if (
      !imgGoing.current &&
      !(
        (slideIndex === 0 && isBackBtn) ||
        (slideIndex === jsonData.imgLen - 1 && !isBackBtn)
      )
    ) {
      if (isBackBtn) {
        // setNextSlideIndex(slideIndex === 0 && nextSlideIndex === 1 ? 1 : slideIndex);
        setNextSlideIndex(slideIndex + nextSlideIndex <= 1 ? 1 : slideIndex);
        setSlideIndex(slideIndex === 0 ? 0 : slideIndex - 1);
        setIsIndexIncrease(false);
      } else {
        setNextSlideIndex(
          slideIndex + nextSlideIndex >= (jsonData.imgLen - 1) * 2 - 1
            ? jsonData.imgLen - 2
            : slideIndex
        );
        setSlideIndex(
          slideIndex === jsonData.imgLen - 1
            ? jsonData.imgLen - 1
            : slideIndex + 1
        );
        setIsIndexIncrease(true);
      }
      imgGoing.current = true;
      clearTimeout(imgAnime.current);
      imgAnime.current = setInterval(() => {
        imgGoing.current = false;
      }, 750);
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
