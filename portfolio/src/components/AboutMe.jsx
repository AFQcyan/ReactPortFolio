import { React, Fragment } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import myImage from "../resources/image/67CV7J6s7ZiV.png";

const AboutMe = (props) => {
  const { state, stateHandler } = props;

  const getPos = (e) => {
    console.log(window.scrollY);
  }

  const calcMyAge = () => {
    const todayDate = new Date();
    console.log(todayDate);
  }

  return (
    <Fragment>
      <div id="aboutContainer">
        <div className="myFace">
          <img src={myImage} alt="myFace" title="AFQcyan(박재형)의 개인캐릭터" />
        </div>        
        <div className="myInfo">
          <p>
            
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutMe;
