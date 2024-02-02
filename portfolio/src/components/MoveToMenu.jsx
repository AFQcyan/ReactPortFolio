import { React, Fragment, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

const MoveToMenu = (props) => {
  const { currPage, currPageHandler, setIsOnMenu } = props;

  //   scroll

  const isScroll = useRef(false);
  const scrollTimer = useRef(null);

  let currPageDummy = useRef(0);

  useEffect(() => {
    window.scrollTo({ left: 0, top: 0 });
    currPageHandler(0);
  }, []);

  // 스크롤 이벤트 리스너 등록
  //   scroll

  window.addEventListener("mousedown", (e) => {
    if (e.button === 1) {
      e.preventDefault();
    }
  });
  // let scrollEndTimer;
  // document.onscroll = (e) => {
  //   console.log(e);
  //   clearTimeout(scrollEndTimer);
  //   scrollEndTimer = setTimeout(function () {
  //     currPageHandler(Math.round(window.scrollY / window.innerHeight));
  //   }, 5);
  // };

  const isMouseWheel = (e) => {
    e.preventDefault();
    if (!isScroll.current) {
      if (e.deltaY < 0) {
        // crPage = crPage === 0 ? 0 : crPage - 1;
        currPageHandler(
          currPageDummy.current === 0 ? 0 : currPageDummy.current - 1
        );
      } else {
        currPageHandler(
          currPageDummy.current === 7 ? 7 : currPageDummy.current + 1
        );
        // crPage = crPage === 7 ? 7 : crPage + 1;
      }
      console.log("inFunc : " + currPageDummy.current);
      isScroll.current = true;
      clearTimeout(scrollTimer.current);
      scrollTimer.current = setTimeout(function () {
        isScroll.current = false;
      }, 500);
    }
  };
  useEffect(() => {
    currPageDummy.current = currPage;
    window.scrollTo({ left: 0, top: currPage * window.innerHeight });
    console.log(currPage);
  }, [currPage]);
  useEffect(() => {
    console.log(isScroll.current);
  }, [isScroll]);

  window.addEventListener("wheel", isMouseWheel, { passive: false });

  function checkMenuState(e) {
    if (e.target.checked) {
      document.querySelector(".Nav.mainContainer").classList.add("active");
      setIsOnMenu(true);
    } else {
      document.querySelector(".Nav.mainContainer").classList.remove("active");
      setIsOnMenu(false);
    }
  }
  return (
    <Fragment>
      <div id="moveToMenu">
        <input
          type="checkbox"
          name="menu"
          id="menu"
          style={{ display: "none" }}
          onChange={checkMenuState}
        />
        <label htmlFor="menu">
          <i class="fa-solid fa-caret-right fa-rotate-180"></i>
        </label>
      </div>
    </Fragment>
  );
};

export default MoveToMenu;
