import React from "react";

export const Header= (props)=> {
  return (
    <header>
      <h3>{props.logotitle}</h3>
      <div className="navbar">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
