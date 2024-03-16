import React from "react";
import "./style.css";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-content">
        <h1>Footer</h1>
        <div className="connect">
          <span>Connect with me on </span>
          <span className="icons">
            <FaFacebook />
            <FaGithub />
            <FaSquareXTwitter />
            <FaLinkedin />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
