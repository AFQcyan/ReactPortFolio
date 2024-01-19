import { React, Fragment, useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import github from "../resources/image/MyLang/Archive/Github.png";
import tStory from "../resources/image/MyLang/Archive/tStory.png";
import notion from "../resources/image/MyLang/Archive/Notion.png";

const Archive = (props) => {
  const { viewWidth } = props;
  const githubRef = useRef(null);
  const notionRef = useRef(null);
  const tStoryRef = useRef(null);

  // window.github = githubRef.current;
  // window.notion = notionRef.current;
  // window.tStory = tStoryRef.current;

  useEffect(() => {
    document.querySelectorAll(".archive-each").forEach((x) => {
      x.style.height = githubRef.current.clientWidth + "px";
    });
  }, [viewWidth]);

  const isSiteGrow = (ref) => {
    const fillArr = Array.from(ref.current.childNodes).filter((x) => {
      return x.classList.contains("bg");
    });
    console.log(fillArr);
  };
  return (
    <Fragment>
      <div id="archive-container">
        <div className="archive-header eng">
          <FontAwesomeIcon icon="fa-solid fa-download" size="2x" />
          <h1>ARCHIVE</h1>
        </div>
        <div id="archive-contents">
          <div
            ref={githubRef}
            className="archive-each"
            style={{
              "--icon-border": "#9b59b6",
            }}
          >
            <div
              className="first bg"
              style={{ "--own-scale": "2000%", opacity: "100%" }}
            ></div>
            <div
              className="second bg"
              style={{ "--own-scale": "2400%", opacity: "60%" }}
            ></div>
            <div
              className="third bg"
              style={{ "--own-scale": "2900%", opacity: "45%" }}
            ></div>
            <div
              className="fourth bg"
              style={{ "--own-scale": "3400%", opacity: "35%" }}
            ></div>
            <div
              className="fifth bg"
              style={{ "--own-scale": "3900%", opacity: "20%" }}
            ></div>
            <input
              type="checkbox"
              name="onSite"
              id="github"
              onChange={() => {
                isSiteGrow(githubRef);
              }}
            />
            <label htmlFor="github">
              <img src={github} alt="github" title="github" />
            </label>
          </div>
          <div
            ref={notionRef}
            className="archive-each"
            style={{
              "--icon-border": "white",
            }}
          >
            <div
              className="first bg"
              style={{ "--own-scale": "2000%", opacity: "100%" }}
            ></div>
            <div
              className="second bg"
              style={{ "--own-scale": "2400%", opacity: "60%" }}
            ></div>
            <div
              className="third bg"
              style={{ "--own-scale": "2900%", opacity: "45%" }}
            ></div>
            <div
              className="fourth bg"
              style={{ "--own-scale": "3400%", opacity: "35%" }}
            ></div>
            <div
              className="fifth bg"
              style={{ "--own-scale": "3900%", opacity: "20%" }}
            ></div>
            <input
              type="checkbox"
              name="onSite"
              id="notion"
              onChange={() => {
                isSiteGrow(notionRef);
              }}
            />
            <label htmlFor="notion">
              <img src={notion} alt="notion" title="notion" />
            </label>
          </div>
          <div
            className="archive-each"
            style={{
              "--icon-border": "#ea5220",
            }}
            ref={tStoryRef}
          >
            <div
              className="first bg"
              style={{ "--own-scale": "2000%", opacity: "100%" }}
            ></div>
            <div
              className="second bg"
              style={{ "--own-scale": "2400%", opacity: "60%" }}
            ></div>
            <div
              className="third bg"
              style={{ "--own-scale": "2900%", opacity: "45%" }}
            ></div>
            <div
              className="fourth bg"
              style={{ "--own-scale": "3400%", opacity: "35%" }}
            ></div>
            <div
              className="fifth bg"
              style={{ "--own-scale": "3900%", opacity: "20%" }}
            ></div>
            <input
              type="checkbox"
              name="onSite"
              id="tStory"
              onChange={() => {
                isSiteGrow(tStoryRef);
              }}
            />
            <label htmlFor="tStory">
              <img src={tStory} alt="tStory" title="tStory" />
            </label>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Archive;
