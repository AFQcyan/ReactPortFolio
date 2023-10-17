import { React, Fragment } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

const Nav = (props) => {
  const { state, stateHandler } = props;

  return (
    <Fragment>
      <Container>
        <ul id="Nav">
          <li className="each-nav">
            <ul>
              <li>MAIN</li>
              <div className="nav-seperate"></div>
              <li>MAIN</li>
            </ul>
          </li>
          <li className="each-nav">
            <ul>
              <li>ABOUT ME</li>
              <div className="nav-seperate"></div>
              <li>ABOUT ME</li>
            </ul>
          </li>
          <li className="each-nav">
            <ul>
              <li>SERVICES</li>
              <div className="nav-seperate"></div>
              <li>SERVICES</li>
            </ul>
          </li>
          <li className="each-nav">
            <ul>
              <li>PORTFOLIO</li>
              <div className="nav-seperate"></div>
              <li>PORTFOLIO</li>
            </ul>
          </li>
          <li className="each-nav">
            <ul>
              <li>CONTACT</li>
              <div className="nav-seperate"></div>
              <li>CONTACT</li>
            </ul>
          </li>
        </ul>
      </Container>
    </Fragment>
  );
};

export default Nav;
