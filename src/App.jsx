import "./resources/css/App.css";
import { React } from "react";
import IndexPage from "./components/IndexPage";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBan, faUpDown, faDownload, faXmark, faLink, faAddressBook, faArrowLeft, faArrowRight, faAnglesDown, faFolderOpen, faFolder, faCaretRight} from '@fortawesome/free-solid-svg-icons';

// 2. 라이브러리에 아이콘을 추가합니다.
library.add(faBan, faUpDown,faDownload, faXmark, faLink, faAddressBook, faArrowLeft, faArrowRight, faAnglesDown, faFolderOpen, faFolder, faCaretRight);

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
