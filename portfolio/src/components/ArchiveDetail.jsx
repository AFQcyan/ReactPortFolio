import { React, Fragment, useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ArchiveDetail = (props) => {
  const { isDetailOn } = props;
  const containerRefs = [useRef(null), useRef(null), useRef(null)];

  console.log(isDetailOn);

  useEffect(() => {
    isDetailOn.forEach((x, i) => {
      containerRefs[i].current.style.opacity = x ? 1 : 0;
    });
  }, [isDetailOn]);

  return (
    <Fragment>
      <div id="archive-detail" ref={containerRefs[0]}>
        <p>깃허브!가 지금 켜졌다구요!</p>
      </div>
      <div id="archive-detail" ref={containerRefs[1]}>
        <p>노션!이 지금 켜졌다구요!</p>
      </div>
      <div id="archive-detail" ref={containerRefs[2]}>
        <p>티스토리!가 지금 켜졌다구요!</p>
      </div>
    </Fragment>
  );
};

export default ArchiveDetail;
