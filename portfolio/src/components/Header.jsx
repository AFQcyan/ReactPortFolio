import { React, Fragment } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
// components
import Nav from "./Nav";
import Main from "./Main";
const Header = (props) => {
  const { state, stateHandler } = props;
  return (
    <Fragment>
      <Container className="ViewPortContainer">
        <Container className="Main mainContainer">
          <Main state={state} stateHandler={stateHandler}></Main>
        </Container>
        <Container className="Nav mainContainer">
          <Col xs={12} id="logoImg"></Col>
          <Col xs={{ span: 8, offset: 2 }}>
            <Nav state={state} stateHandler={stateHandler}></Nav>
            {/* <Nav></Nav> */}
          </Col>
        </Container>
      </Container>
    </Fragment>
  );
};

export default Header;
