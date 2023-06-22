import React,{useState} from "react";
import {NavLink} from "react-router-dom";
import photo from "./p3.png";

export default function Navbar() {
  const [clicked, setClicked] = useState(false)

  const handleClick = ()=>{
    setClicked(!clicked)
  }
  return (
    <div>
      <header>
        <div className="logo">
        <img className="lo" src={photo} alt="" />
          <div className="heading">
            TODAY's <span>TOP</span>
          </div>
        </div>
        <div className="menu" id={clicked ? "active" : "menu"}>
          {/* <div className="menu_inner"> */}
            <div className="menu-link"><NavLink to="/">Home</NavLink></div>
            <div className="menu-link"><NavLink to="/business">Business</NavLink></div>
            <div className="menu-link"><NavLink to="/entertainment">Entertainment</NavLink></div>
            <div className="menu-link"><NavLink to="/health">Health</NavLink></div>
            <div className="menu-link"><NavLink to="/science">Science</NavLink></div>
            <div className="menu-link"><NavLink to="/sports">Sports</NavLink></div>
            <div className="menu-link"><NavLink to="/technology">Technology</NavLink></div>
            

            
          {/* </div> */}
        </div>
        <div id="mobile" onClick={handleClick}>
            <i
              id="bar"
              className={clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
      </header>
    </div>
  );
}
