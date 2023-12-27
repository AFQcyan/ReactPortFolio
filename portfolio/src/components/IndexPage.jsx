import { React, Fragment, useState } from "react";
import Header from "./Header";

const IndexPage = (props) => {
  const { state, stateHandler } = props;

  return <Header state={state} stateHandler={stateHandler}></Header>;
  // return <Header></Header>;
};

export default IndexPage;
