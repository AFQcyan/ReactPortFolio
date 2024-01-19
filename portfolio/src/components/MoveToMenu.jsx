import { React, Fragment, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

const MoveToMenu = (props) => {
  const { currPage, currPageHandler, setIsOnMenu } = props;

  //   scroll
  function handleScroll() {
    return window.scrollY % window.innerHeight !== 0;
  }

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
  let scrollEndTimer;
  document.onscroll = (e) => {
    clearTimeout(scrollEndTimer);
    scrollEndTimer = setTimeout(function () {
      currPageHandler(Math.round(window.scrollY / window.innerHeight));
    }, 5);
  };
  const effectEvent = (e) => {
    e.preventDefault();
    if (!handleScroll()) {
      let currentPage = currPage;
      if (e.deltaY < 0) {
        currentPage = currentPage === 0 ? 0 : currentPage - 1;
      } else {
        currentPage = currentPage === 7 ? 7 : currentPage + 1;
      }
      window.scrollTo({ left: 0, top: currentPage * window.innerHeight });
    }
  };
  useEffect(() => {
    window.addEventListener("wheel", effectEvent, { passive: false });

    // 컴포넌트가 언마운트되면 이벤트 핸들러를 제거
    return () => {
      window.removeEventListener("wheel", effectEvent, { passive: false });
    };
  }, []);
  window.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      let currentPage = currPage;
      if (!handleScroll()) {
        if (e.deltaY < 0) {
          currentPage = currentPage === 0 ? 0 : currentPage - 1;
        } else {
          currentPage = currentPage === 7 ? 7 : currentPage + 1;
        }
        window.scrollTo({ left: 0, top: currentPage * window.innerHeight });
      }
    },
    { passive: false }
  );

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
