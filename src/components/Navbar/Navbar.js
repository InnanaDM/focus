import React from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/adasf" className="brand-logo center">
          FOCUS
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="sass.html" className="newGame">
              New Game
            </a>
          </li>
        </ul>
      </div>

      <p className="flow-text">I am Flow Text</p>
    </nav>
  );
};

export default Navbar;
