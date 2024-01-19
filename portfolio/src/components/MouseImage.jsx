import { React, Fragment, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MouseImage = (props) => {
  const { mousePos, mouseRotateDeg, setMouseRotateDeg } = props;

  const mouseImgRef = useRef(null);

  useEffect(() => {
    mouseImgRef.current.style.left =
      mousePos[0] + mouseImgRef.current.clientWidth / 2 + "px";
    mouseImgRef.current.style.top =
      mousePos[1] + mouseImgRef.current.clientHeight / 2 + "px";
  }, [mousePos]);

  useEffect(() => {
    mouseImgRef.current.style.rotate = mouseRotateDeg + "deg";
  }, [mouseRotateDeg]);

  return (
    <Fragment>
      <div id="mouse-track-img" ref={mouseImgRef}>
        <FontAwesomeIcon icon="fa-solid fa-up-down" />
      </div>
    </Fragment>
  );
};

export default MouseImage;
