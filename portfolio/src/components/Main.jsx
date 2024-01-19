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
  return (
    <Fragment>
      <div id="indexContainer">
        <div id="aboutMe">
          <div className="followingObj">
            <img src={giveUp} alt="포기하지 않는 열정!" />
            <div className="objInner style" style={{ left: "68%", top: "24%" }}>
              <div>
                <i className="fas fa-graduation-cap"></i>
                <span>교내 전공심화동아리에서 2년간 활동</span>
              </div>
            </div>
            <div className="objInner style" style={{ left: "12%", top: "67%" }}>
              <div>
                <i class="fa-solid fa-check-to-slot"></i>
                <span>초1 ~ 고2까지 1년 제외 전 학년 반장/부반장 당선</span>
              </div>
            </div>
          </div>
          <div className="followingObj">
            <img src={target} alt="문제의 핵심을 파악하는 능력!" />

            <div className="objInner style" style={{ left: "70%", top: "70%" }}>
              <div>
                <i class="fas fa-trophy"></i>
                <span>교내 창의 알고리즘 대회 3년 연속 수상</span>
              </div>
            </div>
            <div className="objInner style" style={{ left: "14%", top: "16%" }}>
              <div>
                <i class="fa-solid fa-chalkboard-user"></i>
                <span>교내 중학생 체험프로그램 2년간 진행</span>
              </div>
            </div>
          </div>
          <div className="followingObj">
            <img src={poten} alt="계속하여 성장중인 잠재력을 가진자!" />

            <div className="objInner style" style={{ left: "23%", top: "23%" }}>
              <div>
                <i class="fas fa-trophy"></i>
                <span>평균 내신등급 1.5</span>
              </div>
            </div>
            <div className="objInner style" style={{ left: "64%", top: "75%" }}>
              <div>
                <i class="fas fa-code"></i>
                <span>전공 교과우수상(1위) 매 학기 수상</span>
              </div>
            </div>
          </div>
          <div className="followingObj">
            <img src={challange} alt="새로운 것을 거부하지 않는자!" />

            <div className="objInner style" style={{ left: "68%", top: "24%" }}>
              <div>
                <i class="fa-solid fa-music"></i>
                <span>1년간 작곡활동 경험있음</span>
              </div>
            </div>
            <div className="objInner style" style={{ left: "16%", top: "66%" }}>
              <div>
                <i class="fa-solid fa-clapperboard"></i>
                <span>2년간 게임유튜브 촬영/편집 경험있음</span>
              </div>
            </div>
          </div>
          <div className="followingObj">
            <img src={expert} alt="한분야의 전문가가 되고 싶은자!" />

            <div className="objInner style" style={{ left: "54%", top: "19%" }}>
              <div>
                <i class="fa-solid fa-code-merge"></i>
                <span>개발자 SNS 를 통해 풀스택 신기술 학습중</span>
              </div>
            </div>
            <div className="objInner style" style={{ left: "25%", top: "75%" }}>
              <div>
                <i class="fa-solid fa-sack-dollar"></i>
                <span>실제 운영되고 있는 사이트 외주 경험 있음</span>
              </div>
            </div>
          </div>
          <div className="followingObj">
            <img src={planning} alt="나를 더 나은 사람으로 발전시키는!" />

            <div className="objInner style" style={{ left: "67%", top: "17%" }}>
              <div>
                <i class="fa-regular fa-clock"></i>
                <span>하루 루틴을 지키며 나를 만들어가는중!</span>
              </div>
            </div>
            <div className="objInner style" style={{ left: "17%", top: "68%" }}>
              <div>
                <i class="fa-solid fa-book"></i>
                <span>일기와 독서로 글쓰고 읽는 습관을 기르는 중</span>
              </div>
            </div>
          </div>
          <div className="textContainer">
            <h3>안녕하세요.</h3>
            <div id="changeText">
              <p>끊임없이 질주하는</p>
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
      </div>
    </Fragment>
  );
};

export default Main;
