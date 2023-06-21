import React from "react";
import {NavLink} from "react-router-dom";
import photo from "./p3.png";

export default function Navbar() {
  return (
    <div>
      <header>
        <div className="logo">
        <img className="lo" src={photo} alt="" />
          <div className="heading">
            TODAY's <span>TOP</span>
          </div>
        </div>
        <div className="menu">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/business">Business</NavLink>
          <NavLink to="/entertainment">Entertainment</NavLink>
          <NavLink to="/health">Health</NavLink>
          <NavLink to="/science">Science</NavLink>
          <NavLink to="/sports">Sports</NavLink>
          <NavLink to="/technology">Technology</NavLink>
        </div>
      </header>
    </div>
  );
}
