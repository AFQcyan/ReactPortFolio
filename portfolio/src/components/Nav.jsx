import { React, Fragment } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

const Nav = (props) => {
  const { state, stateHandler } = props;

  return (
    <Fragment>
      <Container>
        <ul id="Nav">
          <li className="each-nav">ABOUT ME</li>
        </ul>
      </Container>
    </Fragment>
  );
};

export default Nav;
