import "./resources/css/App.css";
import { React, Fragment, useState } from "react";
import IndexPage from "./components/IndexPage";

function App() {
  const [state, setState] = useState([
    {
      //index 0: currentPage;
      currentPage: 0,
      isOnMenu: false,
    },
  ]);

  document.onContextMenu = function () {
    return false;
  };

  // 드래그 방지
  var omitformtags = ["input", "textarea", "select"];
  omitformtags = omitformtags.join("|");

  function disableselect(e) {
    if (omitformtags.indexOf(e.target.tagName.toLowerCase()) === -1)
      return false;
  }

  function reEnable() {
    return true;
  }

  if (typeof document.onselectstart != "undefined")
    document.onselectstart = new Function("return false");
  else {
    document.onmousedown = disableselect;
    document.onmouseup = reEnable;
  }

  const stateHandler = (updates) => {
    setState((prevState) => {
      const newState = [...prevState];

      updates.forEach((update) => {
        const { index, properties } = update;
        newState[index] = {
          ...newState[index],
          ...properties,
        };
      });

      return newState;
    });
  };
  return (
    <div
      className="App"
      oncontextmenu="return false"
      onselectstart="return false"
      ondragstart="return false"
      onkeydown="return false"
    >
      <IndexPage state={state} stateHandler={stateHandler}></IndexPage>
    </div>
  );
}

export default App;
