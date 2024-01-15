import { React, Fragment, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

const MoveToMenu = (props) => {
  const { state, stateHandler, nav } = props;

  //   scroll
  function handleScroll() {
    return window.scrollY % window.innerHeight !== 0;
  }

  // 스크롤 이벤트 리스너 등록
  //   scroll

  window.addEventListener("mousedown", (e) => {
    if (e.button === 1) {
      e.preventDefault();
    }
  });
  let scrollEndTimer;
  document.onscroll = (e) => {
    clearTimeout(scrollEndTimer);
    scrollEndTimer = setTimeout(function () {
      stateHandler([
        {
          index: 0,
          properties: {
            currentPage: Math.round(window.scrollY / window.innerHeight),
          },
        },
      ]);
    }, 5);
  };
  const effectEvent = (e) => {
    e.preventDefault();
      let currPage = state[0].currentPage;
      if (!handleScroll()) {
        if (e.deltaY < 0) {
          currPage = currPage === 0 ? 0 : currPage - 1;
        } else {
          currPage = currPage === 7 ? 7 : currPage + 1;
        }
        window.scrollTo({ left: 0, top: currPage * window.innerHeight });
      }
   }
  useEffect(() => {
    window.addEventListener('wheel',effectEvent,{ passive: false });

    // 컴포넌트가 언마운트되면 이벤트 핸들러를 제거
    return () => {
      window.removeEventListener('wheel', effectEvent, { passive: false });
    };
  }, []);
  window.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      let currPage = state[0].currentPage;
      if (!handleScroll()) {
        if (e.deltaY < 0) {
          currPage = currPage === 0 ? 0 : currPage - 1;
        } else {
          currPage = currPage === 7 ? 7 : currPage + 1;
        }
        window.scrollTo({ left: 0, top: currPage * window.innerHeight });
      }
    },
    { passive: false }
  );

  function checkMenuState(e) {
    if (e.target.checked) {
      document.querySelector(".Nav.mainContainer").classList.add("active");
    } else {
      document.querySelector(".Nav.mainContainer").classList.remove("active");
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
