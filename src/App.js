import React from "react";
import ActionList from "./components/ActionList";
import Post from "./components/Post";
import Recents from "./components/Recents";

const App = () => {
  return (
    <>
      <span></span>
      <span style={{ display: "inline-block", margin: "10px" }}>
        <ActionList />
      </span>
      <span style={{ display: "inline-block" }}>
        <Recents />
      </span>
      <span style={{ display: "inline-block" }}>
        <Post />
      </span>
    </>
  );
};

export default App;
