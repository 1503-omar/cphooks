import React from "react";
import Rate from "../Rate";
import "./Header.css";

const Header = ({ setMyInput, setMyRate, myRate }) => {
  return (
    <div style={{display:'flex',
    justifyContent:'space-around',
    backgroundColor:'blue',
    height:60}}>
      <h2>Home</h2>
      <h2>About</h2>
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