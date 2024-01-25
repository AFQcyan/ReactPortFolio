import { React, Fragment, useRef, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
// components

import Nav from "./Nav";
import Main from "./Main";
import AboutMe from "./AboutMe";
import MoveToMenu from "./MoveToMenu";
import PageSideLine from "./PageSideLine";
import Skills from "./Skills";
import ParallaxObject from "./ParallaxObject";
import MouseImage from "./MouseImage";
import Archive from "./Archive";
import PortFolioGame from "./PortFolioGame";
const Header = (props) => {
  const [currentPage, setCurrPage] = useState(0);
  const [isOnMenu, setIsOnMenu] = useState(false);
  const [mousePos, setMousePos] = useState([0, 0]);
  const [mouseRotateDeg, setMouseRotateDeg] = useState(0);
  const [mouseIsBan, setMouseIsBan] = useState(false);

  const [viewWidth, setViewWidth] = useState(parseInt(window.innerWidth));

  // const viewContainerRef = useRef(null);

  useEffect(() => {
    // setviewWidth(viewContainerRef.current.clientWidth);
    window.addEventListener("mousemove", (e) => {
      setMousePos([e.clientX, e.clientY]);
    });
  }, []);

  useEffect(() => {
    // setviewWidth(viewContainerRef.current.clientWidth);
    window.addEventListener("resize", (e) => {
      setViewWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", (e) => {
        setViewWidth(window.innerWidth);
      });
    };
  }, []);

  return (
    <Fragment>
      <MouseImage
        mousePos={mousePos}
        mouseRotateDeg={mouseRotateDeg}
        setMouseRotateDeg={setMouseRotateDeg}
        mouseIsBan={mouseIsBan}
      ></MouseImage>
      {/* <PageSideLine
        isLeft={true}
        contWidth={viewWidth}
        isMenuOn={state[0].isOnMenu}
      ></PageSideLine>
      <PageSideLine
        isLeft={false}
        contWidth={viewWidth}
        isMenuOn={state[0].isOnMenu}
      ></PageSideLine> */}

      <MoveToMenu
        currPage={currentPage}
        currPageHandler={setCurrPage}
        setIsOnMenu={setIsOnMenu}
      ></MoveToMenu>
      <Container className="ViewPortContainer" style={{ padding: 0 }}>
        {/* <div id="dummyWidth" ref={viewContainerRef}></div> */}
        <Container className="Nav mainContainer">
          <Col xs={12} id="logoImg"></Col>
          <Col xs={{ span: 8, offset: 2 }}>
            <Nav></Nav>
            {/* <Nav></Nav> */}
          </Col>
        </Container>
        <Container className="Main mainContainer">
          <Main></Main>
        </Container>
        <Container className="Contents AboutMe mainContainer">
          <AboutMe></AboutMe>
        </Container>
        <Container className="Contents Skills mainContainer">
          <Skills
            setMouseRotateDeg={setMouseRotateDeg}
            mousePos={mousePos}
          ></Skills>
        </Container>
        <Container className="Contents Archives mainContainer">
          <Archive
            viewWidth={viewWidth}
            setMouseIsBan={setMouseIsBan}
          ></Archive>
        </Container>
        <Container className="Contents PortFolio mainContainer">
          <PortFolioGame
            setMouseIsBan={setMouseIsBan}
            setCurrPage={setCurrPage}
          ></PortFolioGame>
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
