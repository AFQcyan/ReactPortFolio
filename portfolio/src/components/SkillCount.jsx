import { React, Fragment, useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import ParallaxObject from "./ParallaxObject";
import SkillDetail from "./SkillDetail";

const SkillCount = (props) => {
  const { skillIdx, setSkillIdx } = props;

  const clickButton = (e) => {
    setSkillIdx(e.target.dataset.idx);
  };

  const ruleCalc = (targetNum) => {
    if (targetNum >= 0) {
      return targetNum % 6;
    } else {
      return ((targetNum % 6) + 6) % 6;
    }
  };

  useEffect(() => {
    console.log("이 년은 돌아야 되는디?");
    Array.from(document.querySelectorAll("#skill-count input")).filter(
      (x) => x.dataset.idx === "0"
    )[0].checked = true;
  }, []);

  useEffect(() => {
    console.log(skillIdx);
    const currSlide = Array.from(
      document.querySelectorAll("#skill-count input")
    ).filter((x) => x.dataset.idx === ruleCalc(skillIdx).toString());
    currSlide[0].checked = true;
  }, [skillIdx]);

  return (
    <Fragment>
      <div id="skill-count" onChange={clickButton}>
        <input type="radio" id="slide1" name="slide" data-idx="0" />
        <label htmlFor="slide1"></label>
        <input type="radio" id="slide2" name="slide" data-idx="1" />
        <label htmlFor="slide2"></label>
        <input type="radio" id="slide3" name="slide" data-idx="2" />
        <label htmlFor="slide3"></label>
        <input type="radio" id="slide4" name="slide" data-idx="3" />
        <label htmlFor="slide4"></label>
        <input type="radio" id="slide5" name="slide" data-idx="4" />
        <label htmlFor="slide5"></label>
        <input type="radio" id="slide6" name="slide" data-idx="5" />
        <label htmlFor="slide6"></label>
      </div>
    </Fragment>
  );
};

export default SkillCount;
