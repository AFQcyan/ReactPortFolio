import "./App.css";
import { React, Fragment, useState } from "react";
import IndexPage from "./components/IndexPage";

function App() {
  const [state, setState] = useState([
    {
      // index 0 : pageStatus
      currPage: "index",
    },
  ]);

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
    <div className="App">
      <IndexPage state={state} stateHandler={stateHandler}></IndexPage>
    </div>
  );
}

export default App;
