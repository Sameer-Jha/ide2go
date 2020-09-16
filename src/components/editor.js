import React from "react";
import "./styles/editor.css";

const Editor = () => {
  return (
    <div id="editor" className="dev_screen">
      <textarea id="codearea" name="main_editor"></textarea>
    </div>
  );
};

export default Editor;
