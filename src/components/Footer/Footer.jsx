import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io/">Frontend Mentor.</a> Coded by
        <a
          className="footer__author"
          href="https://github.com/ignaciofigueroadev"
        >
          {" "}
          Ignacio Figueroa
        </a>
      </p>
    </footer>
  );
};

export default Footer;
