import { React, Fragment, useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ArchiveDetail = (props) => {
  const { isDetailOn, setIsDetailOn, contType, docuRef } = props;
  const containerRefs = [useRef(null), useRef(null), useRef(null)];
  const closeBtnRefs = [useRef(null), useRef(null), useRef(null)];
  const colorList = ["#9b59b6", "white", "#ea5220"];

  useEffect(() => {
    isDetailOn.forEach((x, i) => {
      if (x) {
        const currentRef = containerRefs[i].current;
        if (currentRef) {
          currentRef.style.width = "60vw";
          currentRef.style.height = "60vh";
          setTimeout(() => {
            currentRef.style.opacity = 1;
          }, 500);
        }
      } else {
        const currentRef = containerRefs[i].current;
        if (currentRef) {
          currentRef.style.width = 0;
          currentRef.style.height = 0;
        }
      }
    });
  }, [isDetailOn]);

  useEffect(() => {
    closeBtnRefs.forEach((x, i) => {
      const current = x.current;
      if (current) {
        current.addEventListener("click", (e) => {
          containerRefs[i].current.style.opacity = 0;
          setTimeout(() => {
            setIsDetailOn([false, false, false]);
            Array.from(docuRef.current.childNodes).map((x) => {
              return Array.from(x.childNodes).filter((x) => {
                return x.tagName === "INPUT";
              });
            })[i][0].checked = false;
          }, 500);
        });
      }
    });
  }, []);

  const renderComponent = (typeNum) => {
    switch (typeNum) {
      case 0:
        return (
          <div id="archive-detail" ref={containerRefs[typeNum]}>
            <button
              ref={closeBtnRefs[typeNum]}
              style={{ "--need-color": colorList[typeNum] }}
            >
              <FontAwesomeIcon icon="fa-solid fa-xmark" />
            </button>
            <div>
              <h3>ARCHIVE</h3>
              <h1>GITHUB</h1>
            </div>
            <div className="archive-txt-container">
              <ul>
                <li>
                  <h2>제가 개발한 프로젝트의 소스코드를 저장하는 곳입니다.</h2>
                </li>
                <li>
                  과거에 제가 개발한 프로젝트, 웹사이트의 소스코드가 저장되어
                  있습니다..
                </li>
                <li>
                  새로운 기술을 학습하게 위한 간이 프로젝트의 코드가 있습니다
                </li>
                <li>
                  학교에서 배운 기술을 후배들에게 전해주기 위한 코드가
                  저장되어있습니다.
                </li>
              </ul>
            </div>
          </div>
        );
      case 1:
        return (
          <div id="archive-detail" ref={containerRefs[typeNum]}>
            <button
              ref={closeBtnRefs[typeNum]}
              style={{ "--need-color": colorList[typeNum] }}
            >
              <FontAwesomeIcon icon="fa-solid fa-xmark" />
            </button>
            <h3>ARCHIVE</h3>
            <h1>NOTION</h1>
          </div>
        );
      case 2:
        return (
          <div id="archive-detail" ref={containerRefs[typeNum]}>
            <button
              ref={closeBtnRefs[typeNum]}
              style={{ "--need-color": colorList[typeNum] }}
            >
              <FontAwesomeIcon icon="fa-solid fa-xmark" />
            </button>
            <h3>ARCHIVE</h3>
            <h1>TISTORY</h1>
          </div>
        );
      default:
        return null;
    }
  };

  return <Fragment>{renderComponent(contType)}</Fragment>;
};

export default ArchiveDetail;
