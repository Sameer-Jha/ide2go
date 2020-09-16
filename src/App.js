import React from "react";
import "./App.css";

// importing components
import Header from "./components/header";
import SideNav from "./components/sideNav";
import Editor from "./components/editor";
import Terminal from "./components/terminal";

function App() {
  return (
    <div className="App">
      <Header />
      <div id="editor_display">
        <SideNav />
        <div id="rightPane">
          <Editor />
          <Terminal />
        </div>
      </div>
    </div>
  );
}

export default App;
