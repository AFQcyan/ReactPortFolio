import { React, Fragment } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
const Main = (props) => {
  const { state, stateHandler } = props;

  return (
    <Fragment>
      <div id="indexContainer">
        <div className="textContainer">
          <h3>안녕하세요.</h3>
          <h1 id="changeText">
            <span>성장하는 개발자</span>
            <span>포기하지 않는 도전자</span>
            <span>문제해결력을 가진 </span>
            <span></span>
          </h1>
          <h2>
            <b>박재형</b>입니다.
          </h2>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
