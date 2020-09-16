import React from "react";
import "./styles/sideNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPlay, faTools } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <div id="sideNav" className="mainPanel dev_screen">
      <div id="masterMenu">
        <ul id="masterList">
          <li className="navListItem">
            <FontAwesomeIcon icon={faCode} size="2x" />
          </li>
          <li className="navListItem">
            <FontAwesomeIcon icon={faPlay} size="2x" />
          </li>
          <li className="navListItem">
            <FontAwesomeIcon icon={faTools} size="2x" />
          </li>
        </ul>
      </div>
      <div id="main_nav">
        <div id="section_header">
          <h3>Explorer</h3>
        </div>
        <div id="dir_tree">
          <ul id="list">
            <li className="navListItem">index.html</li>
            <li className="navListItem">index.css</li>
            <li className="navListItem">index.js</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
