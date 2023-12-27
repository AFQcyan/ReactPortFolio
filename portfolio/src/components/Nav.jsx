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
              <div className="nav-seperate"></div>
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
              <div className="nav-seperate"></div>
              <li>
                <a href="#">ABOUT ME</a>
              </li>
            </ul>
          </li>
          <li className="each-nav">
            <ul>
              <li>
                <a href="#">SERVICES</a>
              </li>
              <div className="nav-seperate"></div>
              <li>
                <a href="#">SERVICES</a>
              </li>
            </ul>
          </li>
          <li className="each-nav">
            <ul>
              <li>
                <a href="#">PORTFOLIO</a>
              </li>
              <div className="nav-seperate"></div>
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
              <div className="nav-seperate"></div>
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
