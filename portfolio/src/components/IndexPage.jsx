import { React, Fragment, useState } from "react";
import Header from "./Header";

const IndexPage = (props) => {
  const { state, stateHandler } = props;

  const toggleBtnOnClick = () => {
    let typeNum =
      state[2].listToggleVariant === state[2].variantList.length - 1
        ? 0
        : state[2].listToggleVariant + 1;
    stateHandler([{ index: 2, properties: { listToggleVariant: typeNum } }]);
  };

  const insertModalOff = () => {
    stateHandler([{ index: 3, properties: { todoInsertModal: false } }]);
  };
  const insertModalOn = () => {
    stateHandler([{ index: 3, properties: { todoInsertModal: true } }]);
  };

  const modalInsert = (e) => {
    console.log();
    e.preventDefault();
  };

  return <Header state={state} stateHandler={stateHandler}></Header>;
};

export default IndexPage;
