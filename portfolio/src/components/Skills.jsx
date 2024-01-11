import { React, Fragment, useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

// 여긴 약간 슬라이드 식으로 e A b -> a B c -> b C d -> d E a 식으로,
// 슬라이드 식으로 + Parallax 을 쓰까면 되지 않을까?
const Skills = (props) => {
  const [skillIdx, setSKillIdx] = useState(0);

  return (
    <Fragment>
      <div id="skill-container"></div>
    </Fragment>
  );
};

export default Skills;
