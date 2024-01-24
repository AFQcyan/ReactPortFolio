import { React, Fragment, useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import github from "../resources/image/MyLang/Archive/Github.png";
import tStory from "../resources/image/MyLang/Archive/tStory.png";
import notion from "../resources/image/MyLang/Archive/Notion.png";

// components

import ArchiveDetail from "./ArchiveDetail";

const Archive = (props) => {
  const { viewWidth } = props;

  const documentRef = useRef(null);

  const githubRef = useRef(null);

  const divScale = [2000, 2400, 2900, 3400, 3900];

  const [isDetailOn, setIsDetailOn] = useState([false, false, false]);

  // window.github = githubRef.current;
  // window.notion = notionRef.current;
  // window.tStory = tStoryRef.current;

  useEffect(() => {
    document.querySelectorAll(".archive-each").forEach((x) => {
      x.style.height = githubRef.current.clientWidth + "px";
    });
  }, [viewWidth]);

  const preventEvent = (e) => {
    console.log(e.target.id + isDetailOn);
    if (isDetailOn.includes(true)) {
      e.stopPropagation();
      e.preventDefault();
    }
  };

  useEffect(() => {
    const ref = documentRef.current;

    ref.addEventListener("wheel", preventEvent, {
      passive: false,
    });
    if (!isDetailOn.includes(true)) {
      const fillArr = Array.from(ref.childNodes)
        .filter((x) => {
          return x.classList.contains("archive-each");
        })
        .map((x) => {
          return Array.from(x.childNodes).filter((x) => {
            return x.classList.contains("is-label");
          });
        });
      fillArr.forEach((x) => {
        x[0].style.opacity = 1;
      });
    }
    return () => {
      ref.removeEventListener("wheel", preventEvent, {
        passive: false,
      });
    };
  }, [isDetailOn]);

  const isSiteGrow = (targetIdx) => {
    const fillArr = Array.from(documentRef.current.childNodes)
      .filter((x) => {
        return x.classList.contains("archive-each");
      })
      .map((x) => {
        return Array.from(x.childNodes).filter((x) => {
          return x.classList.contains("is-label");
        });
      });
    fillArr.forEach((x) => {
      x[0].style.opacity = 0;
    });
    setIsDetailOn(
      isDetailOn.map((x, i) => {
        return i === targetIdx;
      })
    );
  };
  return (
    <Fragment>
      <div id="archive-container">
        <div className="archive-header eng">
          <FontAwesomeIcon icon="fa-solid fa-download" size="2x" />
          <h1>ARCHIVE</h1>
        </div>
        <div id="archive-contents" ref={documentRef}>
          <div
            className="archive-each"
            style={{
              "--icon-border": "#9b59b6",
            }}
            ref={githubRef}
          >
            <input
              type="radio"
              name="onSite"
              id="github"
              onChange={() => {
                isSiteGrow(0);
              }}
            />
            <label htmlFor="github" className="is-label">
              <img src={github} alt="github" title="github" />
            </label>
            <div
              className="first bg"
              style={{ "--own-scale": `${divScale[0]}%`, opacity: "100%" }}
            ></div>
            <div
              className="second bg"
              style={{ "--own-scale": `${divScale[1]}%`, opacity: "60%" }}
            ></div>
            <div
              className="third bg"
              style={{ "--own-scale": `${divScale[2]}%`, opacity: "45%" }}
            ></div>
            <div
              className="fourth bg"
              style={{ "--own-scale": `${divScale[3]}%`, opacity: "35%" }}
            ></div>
            <div
              className="fifth bg"
              style={{ "--own-scale": `${divScale[4]}%`, opacity: "20%" }}
            ></div>
            <ArchiveDetail
              isDetailOn={isDetailOn}
              setIsDetailOn={setIsDetailOn}
              docuRef={documentRef}
              contType={0}
              imgSrc={github}
            />
          </div>
          <div
            className="archive-each"
            style={{
              "--icon-border": "white",
            }}
          >
            <input
              type="radio"
              name="onSite"
              id="notion"
              onChange={() => {
                isSiteGrow(1);
              }}
            />
            <label htmlFor="notion" className="is-label">
              <img src={notion} alt="notion" title="notion" />
            </label>
            <div
              className="first bg"
              style={{ "--own-scale": `${divScale[0]}%`, opacity: "100%" }}
            ></div>
            <div
              className="second bg"
              style={{ "--own-scale": `${divScale[1]}%`, opacity: "60%" }}
            ></div>
            <div
              className="third bg"
              style={{ "--own-scale": `${divScale[2]}%`, opacity: "45%" }}
            ></div>
            <div
              className="fourth bg"
              style={{ "--own-scale": `${divScale[3]}%`, opacity: "35%" }}
            ></div>
            <div
              className="fifth bg"
              style={{ "--own-scale": `${divScale[4]}%`, opacity: "20%" }}
            ></div>
            <ArchiveDetail
              isDetailOn={isDetailOn}
              setIsDetailOn={setIsDetailOn}
              contType={1}
              docuRef={documentRef}
              imgSrc={notion}
            />
          </div>
          <div
            className="archive-each"
            style={{
              "--icon-border": "#ea5220",
            }}
          >
            <input
              type="radio"
              name="onSite"
              id="tStory"
              onChange={() => {
                isSiteGrow(2);
              }}
            />
            <label htmlFor="tStory" className="is-label">
              <img src={tStory} alt="tStory" title="tStory" />
            </label>
            <div
              className="first bg"
              style={{ "--own-scale": `${divScale[0]}%`, opacity: "100%" }}
            ></div>
            <div
              className="second bg"
              style={{ "--own-scale": `${divScale[1]}%`, opacity: "60%" }}
            ></div>
            <div
              className="third bg"
              style={{ "--own-scale": `${divScale[2]}%`, opacity: "45%" }}
            ></div>
            <div
              className="fourth bg"
              style={{ "--own-scale": `${divScale[3]}%`, opacity: "35%" }}
            ></div>
            <div
              className="fifth bg"
              style={{ "--own-scale": `${divScale[4]}%`, opacity: "20%" }}
            ></div>
            <ArchiveDetail
              isDetailOn={isDetailOn}
              setIsDetailOn={setIsDetailOn}
              contType={2}
              docuRef={documentRef}
              imgSrc={tStory}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Archive;
