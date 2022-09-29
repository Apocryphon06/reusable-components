import React from "react";
import ActionList from "./components/ActionList";
import Recents from "./components/Recents";

const App = () => {
  return (
    <>
      <span></span>
      <span style={{ display: "inline-block" }}>
        <ActionList />
      </span>
      <span style={{ display: "inline-block" }}>
        <Recents />
      </span>
    </>
  );
};

export default App;
