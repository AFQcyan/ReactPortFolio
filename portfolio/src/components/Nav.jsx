import { React, Fragment } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import MoveToMenu from "./MoveToMenu";

const Nav = (props) => {
  //쐐기 마냥 나가는거 어떤데 ㄹㅇ 난 괜찮아 뵈는디.
  return (
    <Fragment>
      <Container>
        <ul id="Nav">
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
                <a href="#">ARCHIVE</a>
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
