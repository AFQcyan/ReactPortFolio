import { React, Fragment, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MouseImage = (props) => {
  const {
    mousePos,
    mouseRotateDeg,
    setMouseRotateDeg,
    mouseIsBan,
    setMouseIsBan,
  } = props;

  const mouseImgRef = useRef(null);

  const canScroll = useRef(null);
  const banScroll = useRef(null);

  useEffect(() => {}, []);

  useEffect(() => {
    if (mouseIsBan) {
      canScroll.current.style.opacity = 0;
      banScroll.current.style.opacity = 1;
    } else {
      canScroll.current.style.opacity = 1;
      banScroll.current.style.opacity = 0;
    }
  }, [mouseIsBan]);

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
        <FontAwesomeIcon icon="fa-solid fa-up-down" ref={canScroll} />
        <FontAwesomeIcon
          icon="fa-solid fa-ban"
          id="ban-scroll"
          ref={banScroll}
        />
      </div>
    </Fragment>
  );
};

export default MouseImage;
