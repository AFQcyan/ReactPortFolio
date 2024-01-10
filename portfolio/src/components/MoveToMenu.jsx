import { React, Fragment } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

const MoveToMenu = (props) => {
  const { state, stateHandler } = props;

  //   scroll
  function handleScroll() {
    return window.scrollY % window.innerHeight != 0;
  }

  // 스크롤 이벤트 리스너 등록
  //   scroll

  window.addEventListener("mousedown", (e) => {
    if (e.button === 1) {
      e.preventDefault();
    }
  });
  document.onscroll = event => {
    clearTimeout(window.scrollEndTimer)
    window.scrollEndTimer = setTimeout(function() {
      stateHandler([{
        index: 0,
        properties: {currentPage: (parseInt(window.scrollY / window.innerHeight))}
      }])
    }, 100)
  }
  window.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      let currPage = state[0].currentPage;
      if (handleScroll()) {
        currPage = currPage;
      } else if (e.deltaY < 0) {
        currPage = currPage === 0 ? 0 : currPage - 1;
      } else {
        currPage = currPage === 7 ? 7 : currPage + 1;
      }
      window.scrollTo({ left: 0, top: currPage * window.innerHeight });
    },
    { passive: false }
  );

  function checkMenuState(e) {
    console.log(e.target.checked);
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
          <i class="fa-solid fa-caret-right"></i>
        </label>
      </div>
    </Fragment>
  );
};

export default MoveToMenu;
