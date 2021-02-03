import React from "react";
import { NavLink } from "react-router-dom";
import Rate from "../Rate";
import "./Header.css";

const Header = ({ setMyInput, setMyRate, myRate }) => {
  return (
    <div style={{display:'flex',
    justifyContent:'space-around',
    backgroundColor:'#f8ff8f',
    height:60}}>
   <NavLink
   style={{textDecoration:'none',paddingTop:25,}}
   exact
            to="/"
            className="nav-link"
            activeClassName="selected-link"
          
            >Home </NavLink>
   <NavLink
 style={{textDecoration:'none',paddingTop:25,}}
   exact
            to="/About"
            className="nav-link"
            activeClassName="selected-link"
          
            >about </NavLink>


      <div className="search-container">
        <input
          type="text"
          placeholder="Type movie name to search"
          onChange={(e) => setMyInput(e.target.value)}
        />
        <Rate rating={myRate} setMyRate={setMyRate} />
      </div>
    </div>
  );
};

export default Header;