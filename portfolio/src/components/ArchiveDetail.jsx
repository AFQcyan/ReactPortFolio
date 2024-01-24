import { React, Fragment, useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import FloatingImg from "./FloatingImg";

const ArchiveDetail = (props) => {
  const { isDetailOn, setIsDetailOn, contType, docuRef, imgSrc } = props;
  const containerRefs = [useRef(null), useRef(null), useRef(null)];
  const closeBtnRefs = [useRef(null), useRef(null), useRef(null)];

  const colorList = ["#9b59b6", "white", "#ea5220"];

  useEffect(() => {
    isDetailOn.forEach((x, i) => {
      if (x) {
        const currentRef = containerRefs[i].current;
        if (currentRef) {
          currentRef.style.width = "80vw";
          currentRef.style.height = "80vh";
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
            <div id="floating-img">
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"float"}
                imgIndex={0}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"float"}
                imgIndex={1}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"float"}
                imgIndex={2}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"float"}
                imgIndex={3}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"float"}
                imgIndex={4}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"float"}
                imgIndex={5}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"float"}
                imgIndex={6}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"float"}
                imgIndex={7}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"float"}
                imgIndex={8}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"fly"}
                imgIndex={0}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"fly"}
                imgIndex={1}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"fly"}
                imgIndex={2}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"fly"}
                imgIndex={3}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"fly"}
                imgIndex={4}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"fly"}
                imgIndex={5}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"fly"}
                imgIndex={6}
              ></FloatingImg>
            </div>
            <div>
              <h3>ARCHIVE</h3>
              <a href="https://github.com/AFQcyan">
                <FontAwesomeIcon icon="fa-solid fa-link" />
              </a>
              <h1>GITHUB</h1>
            </div>
            <div className="archive-txt-container">
              <ul>
                <li>
                  <h2>제가 개발한 프로젝트의 소스코드를 저장하는 곳입니다.</h2>
                </li>
                <li>
                  과거에 제가 개발한 프로젝트, 웹사이트의 소스코드가 저장되어
                  있습니다.
                </li>
                <li>
                  새로운 기술을 학습하게 위한 간이 프로젝트의 코드가 있습니다.
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
            <div id="floating-img">
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"float"}
                imgIndex={0}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"float"}
                imgIndex={1}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"float"}
                imgIndex={2}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"float"}
                imgIndex={3}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"float"}
                imgIndex={4}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"float"}
                imgIndex={5}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"float"}
                imgIndex={6}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"float"}
                imgIndex={7}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"float"}
                imgIndex={8}
              ></FloatingImg>

              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"fly"}
                imgIndex={0}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"fly"}
                imgIndex={1}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"fly"}
                imgIndex={2}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"fly"}
                imgIndex={3}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"fly"}
                imgIndex={4}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"fly"}
                imgIndex={5}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"fly"}
                imgIndex={6}
              ></FloatingImg>
            </div>
            <h3>ARCHIVE</h3>
            <a href="https://solid-girdle-4a8.notion.site/a5108c195fe14f899236f7ec95e14da8?v=8248d194377741a2be0a119a43cd5cbf&pvs=4">
              <FontAwesomeIcon icon="fa-solid fa-link" />
            </a>
            <h1>NOTION</h1>
            <div className="archive-txt-container">
              <ul>
                <li>
                  <h2>공부 및 지식공유 목적의 노트 입니다.</h2>
                </li>
                <li>
                  몰랐던 사실을 주로 작성하며 시행착오와 해결법을 주로
                  기록합니다.
                </li>
                <li>주로 정제되지 않은 새로 알게된 사실을 작성합니다.</li>
                <li>되도록이면 개발한 날마다 개발일지를 작성합니다.</li>
              </ul>
            </div>
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
            <div id="floating-img">
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"float"}
                imgIndex={0}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"float"}
                imgIndex={1}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"float"}
                imgIndex={2}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"float"}
                imgIndex={3}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"float"}
                imgIndex={4}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"float"}
                imgIndex={5}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"float"}
                imgIndex={6}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"float"}
                imgIndex={7}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"float"}
                imgIndex={8}
              ></FloatingImg>

              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"fly"}
                imgIndex={0}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"fly"}
                imgIndex={1}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"fly"}
                imgIndex={2}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"fly"}
                imgIndex={3}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"fly"}
                imgIndex={4}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"fly"}
                imgIndex={5}
              ></FloatingImg>
              <FloatingImg
                imgSrc={imgSrc}
                floatingType={"fly"}
                imgIndex={6}
              ></FloatingImg>
            </div>
            <h3>ARCHIVE</h3>
            <FontAwesomeIcon icon="fa-solid fa-link" />
            <h1>TISTORY</h1>
            <div className="archive-txt-container">
              <ul>
                <li>
                  <h2>공부 및 지식공유 목적의 블로그입니다.</h2>
                </li>
                <li>
                  개발하면서 심하게 막혔거나 아예 새로운 기술을 학습할 경우
                  기록합니다.
                </li>
                <li>주로 완전히 이해하고 습득한 지식을 작성합니다.</li>
                <li>
                  꼭 남들에게도 알리고 싶은 지식이 있을 경우에 작성합니다.
                </li>
              </ul>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return <Fragment>{renderComponent(contType)}</Fragment>;
};

export default ArchiveDetail;
