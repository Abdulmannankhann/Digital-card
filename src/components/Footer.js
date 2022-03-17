import React from "react";
import Facebook from "../images/Facebook.png";
import GitHub from "../images/GitHub.png";
import Instagram from "../images/Instagram.png";
import LinkedIn from "../images/Linkedin.png";
import Twitter from "../images/Twitter.png";

function Footer() {
  return (
    <main className="footer--container">
      <img src={Twitter} className="footer--twitter" />
      <img src={Facebook} className="footer--icon" />
      <img src={Instagram} className="footer--icon" />
      <img src={LinkedIn} className="footer--icon" />
      <img src={GitHub} className="footer--icon" />
    </main>
  );
}

export default Footer;
