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
              <li>
                <a href="#">MAIN</a>
              </li>
            </ul>
          </li>
          <li className="each-nav">
            <ul>
              <li>
                <a href="#">ABOUT ME</a>
              </li>
            </ul>
          </li>
          <li className="each-nav">
            <ul>
              <li>
                <a href="#">SKILLS</a>
              </li>
            </ul>
          </li>
          <li className="each-nav">
            <ul>
              <li>
                <a href="#">PORTFOLIO</a>
              </li>
            </ul>
          </li>
          <li className="each-nav">
            <ul>
              <li>
                <a href="#">CONTACT</a>
              </li>
            </ul>
          </li>
        </ul>
      </Container>
    </Fragment>
  );
};

export default Nav;
