import { React, Fragment } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

const MoveToMenu = (props) => {
  const { state, stateHandler } = props;

  //   scroll
  let isScrolling = false;
  function handleScroll() {
    isScrolling = true;

    // 스크롤 중인지 여부를 확인하고 필요한 작업 수행
    // 여기에서는 간단히 콘솔에 로그 출력

    // 스크롤이 멈추면 상태를 다시 false로 설정
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function () {
      isScrolling = false;
    }, 100); // 200 밀리초 동안 스크롤이 없으면 스크롤이 멈춘 것으로 판단
  }

  // 스크롤 이벤트 리스너 등록
  let scrollTimeout;
  document.addEventListener("scroll", handleScroll);
  //   scroll

  window.addEventListener("mousedown", (e) => {
    if (e.button === 1) {
      e.preventDefault();
    }
  });
  window.addEventListener("scroll", (e) => {
    e.preventDefault();
  });
  window.addEventListener(
    "wheel",
    (e) => {
      let currPage = state[0].currentPage;
      e.preventDefault();
      if (isScrolling) {
      } else if (e.deltaY < 0) {
        currPage = currPage === 0 ? 0 : currPage - 1;
      } else {
        currPage = currPage === 5 ? 5 : currPage + 1;
      }
      window.scrollTo({ left: 0, top: currPage * window.innerHeight });
      stateHandler([
        {
          index: 0,
          properties: { currentPage: currPage },
        },
      ]);
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
