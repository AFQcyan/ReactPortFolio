import { React, Fragment, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

const SkillDetail = (e) => {
  return (
    <Fragment>
      <div id="skill-detail-container">
        <h1 className="eng">SKILLS</h1>
        <div id="skill-detail-contents"></div>
      </div>
    </Fragment>
  );
};

export default SkillDetail;
