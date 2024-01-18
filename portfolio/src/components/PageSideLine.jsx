import { React, Fragment, useRef, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PageSideLine = (props) => {
  const { isLeft, contWidth, isMenuOn } = props;

  const elemRef = useRef(null);

  useEffect(() => {
    if (isMenuOn) {
      elemRef.current.style.opacity = 0;
    } else {
      elemRef.current.style.opacity = 1;
    }
    elemRef.current.style.width = (window.innerWidth - contWidth) / 2 + "px";
    if (isLeft) {
      elemRef.current.style.left = 0;
    } else {
      elemRef.current.style.right = 0;
    }
  }, [contWidth, isLeft, isMenuOn]);

  return (
    <Fragment>
      <div id="page-side-line" ref={elemRef}>
        <div className="line-one">
          <FontAwesomeIcon icon="fa-solid fa-angles-down" />
        </div>
        <div className="line-two"></div>
      </div>
    </Fragment>
  );
};

export default PageSideLine;
