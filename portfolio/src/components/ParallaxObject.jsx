import { React, Fragment, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import backImgC from "../resources/image/MyLang/Back-End/C.png";
import backImgJava from "../resources/image/MyLang/Back-End/Java.png";
import backImgJSP from "../resources/image/MyLang/Back-End/JSP.png";
import backImgLaravel from "../resources/image/MyLang/Back-End/Laravel.png";
import backImgMySQL from "../resources/image/MyLang/Back-End/mySQL.png";
import backImgNodeJS from "../resources/image/MyLang/Back-End/Node.js.png";
import backImgPHP from "../resources/image/MyLang/Back-End/php.png";

import cerfImgGTQ from "../resources/image/MyLang/certification/GTQ.png";
import cerfImgITQ from "../resources/image/MyLang/certification/ITQ.png";
import cerfImgTensorFlow from "../resources/image/MyLang/certification/Tensorflow.png";

import frontImgBootstrap from "../resources/image/MyLang/Front-End/Bootstrap.png";
import frontImgCSS3 from "../resources/image/MyLang/Front-End/CSS3.png";
import frontImgHTML5 from "../resources/image/MyLang/Front-End/HTML5.png";
import frontImgJQuery from "../resources/image/MyLang/Front-End/jQuery.png";
import frontImgJS from "../resources/image/MyLang/Front-End/JS.png";
import frontImgReact from "../resources/image/MyLang/Front-End/React.png";
import frontImgWebPack from "../resources/image/MyLang/Front-End/webpack.png";

import ideImgEclipse from "../resources/image/MyLang/IDE/eclipse.png";
import ideImgIntellij from "../resources/image/MyLang/IDE/intelliJ.png";
import ideImgPHPStorm from "../resources/image/MyLang/IDE/phpStorm.png";
import ideImgVS from "../resources/image/MyLang/IDE/VS.png";
import ideImgVSC from "../resources/image/MyLang/IDE/VSC.png";
import ideImgColab from "../resources/image/MyLang/IDE/colab.png";

import serverImgPhpMyAdmin from "../resources/image/MyLang/Server/phpMyAdmin.png";
import serverImgTomcat from "../resources/image/MyLang/Server/tomcat.png";
import serverImgXAMPP from "../resources/image/MyLang/Server/XAMPP.png";

import ToolImgIllustrator from "../resources/image/MyLang/Tool/ai.png";
import ToolImgFigma from "../resources/image/MyLang/Tool/Figma.png";
import ToolImgGithub from "../resources/image/MyLang/Tool/github.png";
import ToolImgOffice from "../resources/image/MyLang/Tool/office.png";
import ToolImgPostman from "../resources/image/MyLang/Tool/postman.png";
import ToolImgPsd from "../resources/image/MyLang/Tool/psd.png";

const ParallaxObject = (props) => {
  const { skillIdx } = props;



  const rotateContainer  = document.getElementById('parallax-container');
  const threeDContainers = document.querySelectorAll(".skills-container");

  const isView = (skillIdx, containerIdx, container) => {
    if(
      Math.abs((skillIdx % 6) - containerIdx) <= 1
      || (skillIdx % 6 === 0 && containerIdx === 5)
      || (skillIdx % 6 === 5 && containerIdx === 0)
      ) {
      container.style.opacity = (skillIdx  % 6 === containerIdx) ? 1 : 0.1;
    } else {
      container.style.opacity = 0;
    }
  }

    threeDContainers.forEach((x, i) => {
      x.style.transform = `translateX(-50%) rotateY(${(-skillIdx + i) * 60}deg) translateZ(${x.clientWidth + (document.body.clientWidth / 10)}px)`
      isView(skillIdx, i, x);
      // rotateContainer.style.transform = `rotateY(${skillIdx * 60}deg) perspective(6800px)`
    });

  return (
    <Fragment>
      <div id="parallax-container">
        {/* <div className="grid-container before"> */}
        <div className="skills-container">
          <h2 className="skills-title">Front-End</h2>
          <div className="skills-detail">
            <Row>
              <Col lg={4}>
                <div className="percenttage"></div>
                <img src={frontImgHTML5} alt="HTML5" title="HTML5" />
              </Col>
              <Col lg={4}>
                <div className="percenttage"></div>
                <img src={frontImgCSS3} alt="CSS3" title="CSS3" />
              </Col>
              <Col lg={4}>
                <div className="percenttage"></div>
                <img src={frontImgJS} alt="JS" title="JS" />
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div className="percenttage"></div>
                <img src={frontImgReact} alt="React" title="React" />
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div className="percenttage"></div>
                <img src={frontImgJQuery} alt="JQuery" title="JQuery" />
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div className="percenttage"></div>
                <img src={frontImgWebPack} alt="WebPack" title="WebPack" />
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div className="percenttage"></div>
                <img
                  src={frontImgBootstrap}
                  alt="Bootstrap"
                  title="Bootstrap"
                />
              </Col>
            </Row>
          </div>
        </div>
        <div className="skills-container">
          <h2 className="skills-title">Back-End</h2>
          <div className="skills-detail">
            <Row>
              <Col lg={4}>
                <div className="percenttage"></div>
                <img src={backImgC} alt="C" title="C" />
              </Col>
              <Col lg={8}>
                <div className="percenttage"></div>
                <img src={backImgJava} alt="Java" title="Java" />
              </Col>
            </Row>
            <Row>
              <Col lg={4}>
                <div className="percenttage"></div>
                <img src={backImgNodeJS} alt="NodeJS" title="NodeJS" />
              </Col>
              <Col lg={8}>
                <div className="percenttage"></div>
                <img src={backImgJSP} alt="JSP" title="JSP" />
              </Col>
            </Row>
            <Row>
              <Col lg={4}>
                <div className="percenttage"></div>
                <img src={backImgPHP} alt="PHP" title="PHP" />
              </Col>
              <Col lg={8}>
                <div className="percenttage"></div>
                <img src={backImgLaravel} alt="Laravel" title="Laravel" />
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div className="percenttage"></div>
                <img src={backImgMySQL} alt="MySQL" title="MySQL" />
              </Col>
            </Row>
          </div>
        </div>
        <div className="skills-container">
          <h2 className="skills-title">SERVER</h2>
          <div className="skills-detail">
            <Row>
              <Col lg={12}>
                <div className="percenttage"></div>
                <img
                  src={serverImgPhpMyAdmin}
                  alt="PHPMyAdmin"
                  title="PHPMyAdmin"
                />
              </Col>
            </Row>
            <Row>
              <Col lg={8}>
                <div className="percenttage"></div>
                <img src={serverImgXAMPP} alt="XAMPP" title="XAMPP" />
              </Col>
              <Col lg={4}>
                <div className="percenttage"></div>
                <img src={serverImgTomcat} alt="Tomcat" title="Tomcat" />
              </Col>
            </Row>
          </div>
        </div>
        <div className="skills-container">
          <h2 className="skills-title">IDE</h2>
          <div className="skills-detail">
            <Row>
              <Col lg={4}>
                <div className="percenttage"></div>
                <img src={ideImgIntellij} alt="Intellij" title="Intellij" />
              </Col>
              <Col lg={4}>
                <div className="percenttage"></div>
                <img src={ideImgPHPStorm} alt="PHPStorm" title="PHPStorm" />
              </Col>
              <Col lg={4}>
                <div className="percenttage"></div>
                <img src={ideImgColab} alt="Colab" title="Colab" />
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div className="percenttage"></div>
                <img src={ideImgVS} alt="VS" title="VS" />
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div className="percenttage"></div>
                <img src={ideImgVSC} alt="VSC" title="VSC" />
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div className="percenttage"></div>
                <img src={ideImgEclipse} alt="Eclipse" title="Eclipse" />
              </Col>
            </Row>
          </div>
        </div>
        <div className="skills-container">
          <h2 className="skills-title">Tool</h2>
          <div className="skills-detail">
            <Row>
              <Col lg={4}>
                <div className="percenttage"></div>
                <img src={ToolImgPsd} alt="Psd" title="Psd" />
              </Col>
              <Col lg={4}>
                <div className="percenttage"></div>
                <img
                  src={ToolImgIllustrator}
                  alt="Illustrator"
                  title="Illustrator"
                />
              </Col>
              <Col lg={4}>
                <div className="percenttage"></div>
                <img src={ToolImgPostman} alt="Postman" title="Postman" />
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div className="percenttage"></div>
                <img src={ToolImgFigma} alt="Figma" title="Figma" />
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div className="percenttage"></div>
                <img src={ToolImgGithub} alt="Github" title="Github" />
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div className="percenttage"></div>
                <img src={ToolImgOffice} alt="Office" title="Office" />
              </Col>
            </Row>
          </div>
        </div>
        <div className="skills-container">
          <h2 className="skills-title">Certification</h2>
          <div className="skills-detail">
            <Row>
              <Col lg={12}>
                <div className="percenttage"></div>
                <img src={cerfImgITQ} alt="ITQ" title="ITQ" />
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div className="percenttage"></div>
                <img src={cerfImgGTQ} alt="GTQ" title="GTQ" />
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div className="percenttage"></div>
                <img
                  src={cerfImgTensorFlow}
                  alt="TensorFlow"
                  title="TensorFlow"
                />
              </Col>
            </Row>
          </div>
        </div>
        {/* </div> */}
      </div>
    </Fragment>
  );
};

export default ParallaxObject;
