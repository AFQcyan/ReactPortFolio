import { React, Fragment, useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import myImage from "../resources/image/67CV7J6s7ZiV.png";

const AboutMe = (props) => {
  const [age, setAge] = useState(() => {
    const birthDate = new Date("2006/11/23");
    const today = new Date();
    const isBirthPass =
      today.getMonth() - birthDate.getMonth() < 0 ||
      (today.getMonth() - birthDate.getMonth() === 0 &&
        today.getDate() - birthDate.getDate() < 0);

    return {
      koreaAge: today.getFullYear() - birthDate.getFullYear() + 1,
      realAge:
        today.getFullYear() - birthDate.getFullYear() - (isBirthPass ? 1 : 0),
    };
  });

  const getPos = (e) => {
    console.log(window.scrollY);
  };

  window.onload = function calcMyAge() {};

  return (
    <Fragment>
      <div id="aboutContainer">
        <div className="myFace">
          <img
            src={myImage}
            alt="myFace"
            title="AFQcyan(박재형)의 개인캐릭터"
          />
        </div>
        <div className="myInfo">
          <h1>
            안녕하세요. <u href="#">AFQcyan</u>
            <br />
            박재형입니다.
          </h1>
          <p>
            저는 2006년생으로 올해로 {age.koreaAge} 세, 만으로 {age.realAge} 세
            입니다. <br />
            풀스택 웹 개발자가 되는 것을 목표로 학습중입니다.
          </p>
          <div className="allTheInfos">
            <div className="text-info-container">
              <div className="info-icon">
                <i class="fa-solid fa-id-card"></i>
              </div>
              <div className="info-texts">
                <div className="info-main">
                  <h1>NAME</h1>
                </div>
                <div className="info-detail">박재형</div>
              </div>
            </div>
            <div className="text-info-container">
              <div className="info-icon">
                <i class="fa-solid fa-map-location-dot"></i>
              </div>
              <div className="info-texts">
                <div className="info-main">
                  <h1>ADDRESS</h1>
                </div>
                <div className="info-detail">경기도 광주</div>
              </div>
            </div>
            <div className="text-info-container">
              <div className="info-icon">
                <i class="fa-solid fa-thumbs-up"></i>
              </div>
              <div className="info-texts">
                <div className="info-main">
                  <h1>HOBBY</h1>
                </div>
                <div className="info-detail">독서 | 운동</div>
              </div>
            </div>
            <div className="text-info-container">
              <div className="info-icon">
                <i class="fa-solid fa-school"></i>
              </div>
              <div className="info-texts">
                <div className="info-main">
                  <h1>EDUCATE</h1>
                </div>
                <div className="info-detail">양영디지털고등학교 [재학중]</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutMe;
