import React, { useState } from "react";
import logo from "../../assets/icons/logo.svg";
import hamburguerMenu from "../../assets/icons/icon-menu.svg";
import closeMenu from "../../assets/icons/icon-menu-close.svg";
import "./Header.scss";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="header">
      <picture>
        <img src={logo} alt="Logo" className="header__logo" />
      </picture>

      <button className="header__hamburguer" onClick={toggleMenu}>
        <img
          src={hamburguerMenu}
          alt="Open menu"
          className="header__open--menu"
        />
      </button>

      <nav
        className={`header__nav ${
          menu ? "header__nav--active" : "header__nav"
        }`}
      >
        <button className="header__close" onClick={toggleMenu}>
          <img
            src={closeMenu}
            alt="Close menu"
            className="header__close--menu"
          />
        </button>
        <ul className="header__ul">
          <li className="header__li">
            <a className="header__item" href="#" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li className="header__li">
            <a className="header__item" href="#" onClick={toggleMenu}>
              New
            </a>
          </li>
          <li className="header__li">
            <a className="header__item" href="#" onClick={toggleMenu}>
              Popular
            </a>
          </li>
          <li className="header__li">
            <a className="header__item" href="#" onClick={toggleMenu}>
              Trending
            </a>
          </li>
          <li className="header__li">
            <a className="header__item" href="#" onClick={toggleMenu}>
              Categories
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
