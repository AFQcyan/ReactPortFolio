import { React, Fragment, useState, useEffect, useRef, useMemo } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FloatingImg = (props) => {
  const { imgSrc, floatingType, imgIndex } = props;

  let [mixXArray, setMixXArray] = useState([
    { start: -1000, end: -1000 },
    { start: -1000, end: -1000 },
    { start: -1000, end: -1000 },
    { start: -1000, end: -1000 },
    { start: -1000, end: -1000 },
    { start: -1000, end: -1000 },
    { start: -1000, end: -1000 },
  ]);
  let [mixYArray, setMixYArray] = useState([
    { start: -1000, end: -1000 },
    { start: -1000, end: -1000 },
    { start: -1000, end: -1000 },
    { start: -1000, end: -1000 },
    { start: -1000, end: -1000 },
    { start: -1000, end: -1000 },
    { start: -1000, end: -1000 },
  ]);
  let floatImgStyle;
  let [flyImgStyle, setFlyImgStyle] = useState([
    { display: "none" },
    { display: "none" },
    { display: "none" },
    { display: "none" },
    { display: "none" },
    { display: "none" },
    { display: "none" },
  ]);
  let returnComponent = useRef(null);

  useEffect(() => {
    let flyAnime = [];

    const startAnimation = (index) => {
      flyAnime[index] = setInterval(() => {
        modifyX(index);
        modifyY(index);
      }, 9000);
    };

    startAnimation(0);
    startAnimation(1);
    startAnimation(2);
    startAnimation(3);
    startAnimation(4);
    startAnimation(5);
    startAnimation(6);

    // 컴포넌트 언마운트 시 인터벌 정리
    return () => {
      flyAnime.forEach(clearInterval);
      flyAnime.forEach(clearTimeout);
    };
  }, []);

  const modifyX = (index) => {
    setMixXArray((prevMixXArray) => {
      const newMixXArray = [...prevMixXArray];
      newMixXArray[index] = {
        start: -50 - Math.random() * 200,
        end: 150 + Math.random() * 200,
      };
      return newMixXArray;
    });
  };

  const modifyY = (index) => {
    setMixYArray((prevMixYArray) => {
      const newMixYArray = [...prevMixYArray];
      newMixYArray[index] = {
        start: Math.random() * 80 + 10,
        end: Math.random() * 80 + 10,
      };
      return newMixYArray;
    });
  };

  const imgRef = useRef(null);

  floatImgStyle = [
    {
      rotate: "45deg",
      width: "8rem",
    },
    {
      rotate: "-30deg",
      width: "14rem",
    },
    {
      rotate: "45deg",
      width: "10rem",
    },
    {
      rotate: "-35deg",
      width: "8rem",
    },
    {
      rotate: "15deg",
      width: "12rem",
    },
    {
      rotate: "-25deg",
      width: "7rem",
    },
    {
      rotate: "35deg",
      width: "14rem",
    },
    {
      rotate: "20deg",
      width: "36rem",
      opacity: "20%",
    },
    {
      rotate: "-230deg",
      width: "40rem",
      opacity: "20%",
    },
  ];

  useEffect(() => {
    setFlyImgStyle((prevFlyImgStyle) => [
      {
        rotate: "90deg",
        width: "7rem",
        "--startX": mixXArray[0].start + "%",
        "--endX": mixXArray[0].end + "%",
        "--startY": mixYArray[0].start + "%",
        "--endY": mixYArray[0].end + "%",
      },
      {
        rotate: "90deg",
        width: "9rem",
        "--startX": mixXArray[1].start + "%",
        "--endX": mixXArray[1].end + "%",
        "--startY": mixYArray[1].start + "%",
        "--endY": mixYArray[1].end + "%",
      },
      {
        rotate: "90deg",
        width: "11rem",
        "--startX": mixXArray[2].start + "%",
        "--endX": mixXArray[2].end + "%",
        "--startY": mixYArray[2].start + "%",
        "--endY": mixYArray[2].end + "%",
      },
      {
        rotate: "90deg",
        width: "12rem",
        "--startX": mixXArray[3].start + "%",
        "--endX": mixXArray[3].end + "%",
        "--startY": mixYArray[3].start + "%",
        "--endY": mixYArray[3].end + "%",
      },
      {
        rotate: "90deg",
        width: "10rem",
        "--startX": mixXArray[4].start + "%",
        "--endX": mixXArray[4].end + "%",
        "--startY": mixYArray[4].start + "%",
        "--endY": mixYArray[4].end + "%",
      },
      {
        rotate: "90deg",
        width: "8rem",
        "--startX": mixXArray[5].start + "%",
        "--endX": mixXArray[5].end + "%",
        "--startY": mixYArray[5].start + "%",
        "--endY": mixYArray[5].end + "%",
      },
      {
        rotate: "90deg",
        width: "15rem",
        "--startX": mixXArray[6].start + "%",
        "--endX": mixXArray[6].end + "%",
        "--startY": mixYArray[6].start + "%",
        "--endY": mixYArray[6].end + "%",
      },
    ]);
  }, [mixXArray, mixYArray]);

  useEffect(() => {
    if (floatingType === "float") {
      returnComponent.current = (
        <img
          src={imgSrc}
          ref={imgRef}
          style={{
            ...floatImgStyle[imgIndex],
            position: "absolute",
            borderRadius: "100rem",
          }}
          alt=""
          title=""
          className={floatingType}
          id={floatingType + imgIndex}
        />
      );
    } else if (floatingType === "fly") {
      returnComponent.current = (
        <img
          src={imgSrc}
          ref={imgRef}
          style={{
            ...flyImgStyle[imgIndex],
            position: "absolute",
            borderRadius: "100rem",
          }}
          alt=""
          title=""
          className={floatingType}
          id={floatingType + imgIndex}
        />
      );
    }
  }, [flyImgStyle]);

  return <Fragment>{returnComponent.current}</Fragment>;
};

export default FloatingImg;
