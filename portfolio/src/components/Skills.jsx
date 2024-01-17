import { React, Fragment, useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import ParallaxObject from "./ParallaxObject";
import SkillCount from "./SkillCount";

// 여긴 약간 슬라이드 식으로 e A b -> a B c -> b C d -> d E a 식으로,
// 슬라이드 식으로 + Parallax 을 쓰까면 되지 않을까?
const Skills = (props) => {
  const [skillIdx, setSKillIdx] = useState(0);

  const wheelNumRef = useRef(null);
  const parallaxRef = useRef(null);
  const scrollingRef = useRef(false);
  const upDownRef = useRef(false);

  useEffect(() => {
    const isWheel = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const parallaxContainer = parallaxRef.current;

      if (parallaxContainer) {
        upDownRef.current = e.wheelDeltaY;
        if (!scrollingRef.current) {
          wheelNumRef.current =
            upDownRef.current > 0
              ? wheelNumRef.current - 1
              : wheelNumRef.current + 1;
          scrollingRef.current = true;
          clearTimeout(scrollingRef.current);
          scrollingRef.current = setTimeout(() => {
            scrollingRef.current = false;
          }, 750);
        }
      }

      setSKillIdx(wheelNumRef.current);
    };

    const parallaxContainer = parallaxRef.current;

    parallaxContainer.addEventListener(
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
    wheelNumRef.current = parseInt(skillIdx);
  }, [skillIdx]);
  // useEffect(() => {
  //   const wheelContainer = document.getElementById('skills-container');

  // })

  return (
    <Fragment>
      <div id="skill-container">
        <h1 className="eng">SKILLS</h1>
        <div id="parallax-container" ref={parallaxRef}>
          <SkillCount
            skillIdx={skillIdx}
            setSkillIdx={setSKillIdx}
          ></SkillCount>
          <div className="parallaxs">
            <ParallaxObject skillIdx={skillIdx}></ParallaxObject>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Skills;
