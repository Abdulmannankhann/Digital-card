import React from "react";
import logo from "../images/logo.jpg";
import BtnIcon from "../images/BtnIcon.png";
import "./Style.css";

function Info() {
  return (
    <div>
      <img src={logo} className="info--logo" width={250} height={250} />
      <h1 className="info--name">Abdul Mannan Khan</h1>
      <h2 className="info--post">Frontend Developer</h2>
      <h3 className="info--mailid">www.abdulmannankhan.com</h3>
      <button className="info--btn">
        <img src={BtnIcon} className="info--mailicon" /> Email
      </button>
    </div>
  );
}

export default Info;
