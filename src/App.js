import React from "react";
import ActionList from "./components/ActionList";
import Post from "./components/Post";
import Recents from "./components/Recents";
import Feed from "./components/Feed";
import News from "./components/News";

const App = () => {
  const temp = () => {
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
  return <News />;
};

export default App;
