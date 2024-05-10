import { React, Fragment, useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ABC from "../resources/image/ABC.pdf";

const Contact = (props) => {
  return (
    <Fragment>
      <div id="contact-container">
        <h1>
          <FontAwesomeIcon icon="fa-solid fa-address-book" />
          <br />
          <b>CONTACT</b>
        </h1>
        <div id="contact-detail">
          <div id="contact-left"></div>
          <div id="contact-line">
            <div class="middle-line"></div>
            <div class="middle-line"></div>
          </div>
          <div id="contact-right"></div>
        </div>
        {/* <Footer></Footer> */}
      </div>
    </Fragment>
  );
};
export default Contact;
