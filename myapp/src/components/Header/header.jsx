import React from "react";
import "./header.css";

function Header({
  Home,
  About,
  Contactus,
  Docs,
  login,
  isScrolled
}) {
  return (
    <header
      style={{
        backgroundColor: isScrolled ? "white" : "#1f1f1f",
        color: isScrolled ? "black" : "white",
      }}
    >
      <h1>Material Tailwind</h1>
      <nav>
        <ul>
          <li>{Home}</li>
          <li>{About}</li>
          <li>{Contactus}</li>
          <li>{Docs}</li>
        </ul>
      </nav>
      <div className="header-right">
        <div>{login}</div>
        <button>BLOCKS</button>
      </div>
    </header>
  );
}
export default Header;
