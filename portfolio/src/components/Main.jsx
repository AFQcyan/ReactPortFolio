import { React, Fragment } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import giveUp from "../resources/image/giveUp.jpg";
import target from "../resources/image/target.jpg";
import poten from "../resources/image/poten.jpg";
import challange from "../resources/image/challange.jpg";
import expert from "../resources/image/expert.jpg";
import planning from "../resources/image/planning.jpg";
const Main = (props) => {
  const { state, stateHandler } = props;

  return (
    <Fragment>
      <div id="indexContainer">
        <div id="aboutMe">
          <div className="followingObj">
            <img src={giveUp} alt="포기하지 않는 열정!" />
            <div className="objInner style" style={{ left: "68%", top: "24%" }}>
              <p>
                <i class="fa-solid fa-fire"></i>&nbsp;교내 전공심화동아리에서
                2년간 활동
              </p>
            </div>
          </div>
          <div className="followingObj">
            <img src={target} alt="문제의 핵심을 파악하는 능력!" />

            <div className="objInner style" style={{ left: "68%", top: "24%" }}>
              <p>교내 전공심화동아리에서 2년간 활동</p>
            </div>
          </div>
          <div className="followingObj">
            <img src={poten} alt="계속하여 성장중인 잠재력을 가진자!" />

            <div className="objInner style" style={{ left: "68%", top: "24%" }}>
              <p>교내 전공심화동아리에서 2년간 활동</p>
            </div>
          </div>
          <div className="followingObj">
            <img src={challange} alt="새로운 것을 거부하지 않는자!" />

            <div className="objInner style" style={{ left: "68%", top: "24%" }}>
              <p>교내 전공심화동아리에서 2년간 활동</p>
            </div>
          </div>
          <div className="followingObj">
            <img src={expert} alt="한분야의 전문가가 되고 싶은자!" />

            <div className="objInner style" style={{ left: "68%", top: "24%" }}>
              <p>교내 전공심화동아리에서 2년간 활동</p>
            </div>
          </div>
          <div className="followingObj">
            <img src={planning} alt="나를 더 나은 사람으로 발전시키는!" />

            <div className="objInner style" style={{ left: "68%", top: "24%" }}>
              <p>교내 전공심화동아리에서 2년간 활동</p>
            </div>
          </div>
          <div className="textContainer">
            <h3>안녕하세요.</h3>
            <div id="changeText">
              <p>포기하지 않는</p>
              <p>문제의 핵심을 파악하는</p>
              <p>폭발하는 잠재력을 지닌</p>
              <p>도전을 두려워 하지 않는</p>
              <p>전문가가 되고 싶은</p>
              <p>자기관리를 철저히 하는</p>
            </div>
            <h2>
              <b>박재형</b>입니다.
            </h2>
          </div>
        </div>
        <div id="contents"></div>
      </div>
    </Fragment>
  );
};

export default Main;
