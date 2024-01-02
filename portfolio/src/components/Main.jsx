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
            <span>포기하지 않는</span>
            <span>문제의 핵심을 파악하는</span>
            <span>폭발하는 잠재력을 지닌</span>
            <span>도전을 두려워 하지 않는</span>
            <span>전문가가 되고 싶은</span>
            <span>자기관리를 철저히 하는</span>
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
