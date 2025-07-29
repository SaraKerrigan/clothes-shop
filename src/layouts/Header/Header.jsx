import React from "react";

export default function Header() {
  return (
    <header className="header ">
      <nav className="blue darken-2">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            Project Shop
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Repo</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
