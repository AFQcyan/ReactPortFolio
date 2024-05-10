import "./resources/css/App.css";
import { React } from "react";
import IndexPage from "./components/IndexPage";

function App() {
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
  return (
    <div
      className="App"
      oncontextmenu="return false"
      onselectstart="return false"
      ondragstart="return false"
      onkeydown="return false"
    >
      <IndexPage></IndexPage>
    </div>
  );
}

export default App;
