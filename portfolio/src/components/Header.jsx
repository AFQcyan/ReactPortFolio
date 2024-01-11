import { React, Fragment } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
// components
import Nav from "./Nav";
import Main from "./Main";
import AboutMe from "./AboutMe";
import MoveToMenu from "./MoveToMenu";
import Skills from "./Skills";
import ParallaxObject from "./ParallaxObject";
const Header = (props) => {
  const { state, stateHandler } = props;
  return (
    <Fragment>
      <MoveToMenu
        state={state}
        stateHandler={stateHandler}
        nav={Nav}
      ></MoveToMenu>
      <Container className="ViewPortContainer">
        <Container className="Nav mainContainer">
          <Col xs={12} id="logoImg"></Col>
          <Col xs={{ span: 8, offset: 2 }}>
            <Nav state={state} stateHandler={stateHandler}></Nav>
            {/* <Nav></Nav> */}
          </Col>
        </Container>
        <Container className="Main mainContainer">
          <Main state={state} stateHandler={stateHandler}></Main>
        </Container>
        <Container className="Contents AboutMe mainContainer">
          <AboutMe state={state} stateHandler={stateHandler}>
            <ParallaxObject
              state={state}
              stateHandler={stateHandler}
            ></ParallaxObject>
          </AboutMe>
        </Container>
        <Container className="Contents Skills mainContainer">
          <Skills></Skills>
        </Container>
        <Container className="Contents A mainContainer">
          <p>C</p>
        </Container>
        <Container className="Contents A mainContainer">
          <p>D</p>
        </Container>
        <Container className="Contents A mainContainer">
          <p>E</p>
        </Container>
        <Container className="Contents A mainContainer">
          <p>F</p>
        </Container>
        <Container className="Contents A mainContainer">
          <p>G</p>
        </Container>
      </Container>
    </Fragment>
  );
};

export default Header;
