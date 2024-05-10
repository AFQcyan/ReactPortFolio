import { React, Fragment, useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ParallaxObject from "./ParallaxObject";

const SkillCount = (props) => {
  const { skillIdx, setSkillIdx } = props;

  const stateChangeBtn = useRef(null);

  const clickButton = (e) => {
    setSkillIdx(() => {
      const idxNum = parseInt(e.target.dataset.idx);
      return 6 + (skillIdx - (skillIdx % 6)) - (6 - idxNum);
    });
  };

  // stateChangeBtn.addEventListener()

  const ruleCalc = (targetNum) => {
    if (targetNum >= 0) {
      return targetNum % 6;
    } else {
      return ((targetNum % 6) + 6) % 6;
    }
  };

  useEffect(() => {
    Array.from(document.querySelectorAll("#skill-count input")).filter(
      (x) => x.dataset.idx === "0"
    )[0].checked = true;
  }, []);

  useEffect(() => {
    const currSlide = Array.from(
      document.querySelectorAll("#skill-count input")
    ).filter((x) => parseInt(x.dataset.idx) === ruleCalc(skillIdx));
    currSlide[0].checked = true;
  }, [skillIdx]);

  return (
    <Fragment>
      <div id="skill-count">
        <input
          type="radio"
          id="slide1"
          name="slide"
          data-idx="0"
          onClick={clickButton}
        />
        <div>
          <label htmlFor="slide1">
            <div className="slide-text">
              <p>Front</p>
            </div>
            <div className="slide-icon">
              <FontAwesomeIcon
                icon="fa-solid fa-caret-right"
                style={{ color: "#FFD43B" }}
              />
            </div>
          </label>
        </div>
        <input
          type="radio"
          id="slide2"
          name="slide"
          data-idx="1"
          onClick={clickButton}
        />
        <div>
          <label htmlFor="slide2">
            <div className="slide-text">
              <p>Back-end</p>
            </div>
            <div className="slide-icon">
              <FontAwesomeIcon
                icon="fa-solid fa-caret-right"
                style={{ color: "#FFD43B" }}
              />
            </div>
          </label>
        </div>
        <input
          type="radio"
          id="slide3"
          name="slide"
          data-idx="2"
          onClick={clickButton}
        />
        <div>
          <label htmlFor="slide3">
            <div className="slide-text">
              <p>Server</p>
            </div>
            <div className="slide-icon">
              <FontAwesomeIcon
                icon="fa-solid fa-caret-right"
                style={{ color: "#FFD43B" }}
              />
            </div>
          </label>
        </div>
        <input
          type="radio"
          id="slide4"
          name="slide"
          data-idx="3"
          onClick={clickButton}
        />
        <div>
          <label htmlFor="slide4">
            <div className="slide-text">
              <p>IDE</p>
            </div>
            <div className="slide-icon">
              <FontAwesomeIcon
                icon="fa-solid fa-caret-right"
                style={{ color: "#FFD43B" }}
              />
            </div>
          </label>
        </div>
        <input
          type="radio"
          id="slide5"
          name="slide"
          data-idx="4"
          onClick={clickButton}
        />
        <div>
          <label htmlFor="slide5">
            <div className="slide-text">
              <p>Tool</p>
            </div>
            <div className="slide-icon">
              <FontAwesomeIcon
                icon="fa-solid fa-caret-right"
                style={{ color: "#FFD43B" }}
              />
            </div>
          </label>
        </div>
        <input
          type="radio"
          id="slide6"
          name="slide"
          data-idx="5"
          onClick={clickButton}
        />
        <div>
          <label htmlFor="slide6">
            <div className="slide-text">
              <p>Cerf</p>
            </div>
            <div className="slide-icon">
              <FontAwesomeIcon
                icon="fa-solid fa-caret-right"
                style={{ color: "#FFD43B" }}
              />
            </div>
          </label>
        </div>
      </div>
    </Fragment>
  );
};

export default SkillCount;
