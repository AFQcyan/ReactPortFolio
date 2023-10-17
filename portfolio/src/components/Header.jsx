import { React, Fragment } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
// components
import Nav from "./Nav";
const Header = (props) => {
  const { state, stateHandler } = props;

  return (
    <Fragment>
      <Container className="Main mainContainer">
        <Col xs={12}></Col>
      </Container>
      <Container className="Nav mainContainer">
        <Col xs={12} id="logoImg"></Col>
        <Col xs={{ span: 8, offset: 2 }}>
          <Nav state={state} stateHandler={stateHandler}></Nav>
        </Col>
      </Container>
    </Fragment>
  );
};

export default Header;
