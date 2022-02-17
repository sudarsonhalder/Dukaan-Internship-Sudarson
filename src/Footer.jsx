import React from "react";
import Logo from "./images/Logo.svg";
import India from "./images/India.png";
const Footer = () => {
  return (
    <>
      <footer>
        <div class="top">
          <div class="logo-details ">
            <img className="footerLogo" src={Logo} alt="logo"></img>
          </div>
        </div>
        <div class="content">
          <div class="link-boxes">
            <ul class="box">
              <li>
                <a>Contact</a>
              </li>
              <li>
                <a>FAQ's</a>
              </li>
            </ul>
            <ul class="box">
              <li>
                <a>Tutorials</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
            </ul>
            <ul class="box">
              <li>
                <a>Privacy</a>
              </li>
              <li>
                <a>Banned Items</a>
              </li>
            </ul>
            <ul class="box">
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Jobs</a>
              </li>
            </ul>
            <ul class="box">
              <li>
                <a>Facebook</a>
              </li>
              <li>
                <a>Twitter</a>
              </li>
              <li>
                <a>Linkedin</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="bottom-details">
          <div class="bottom_text">
            <span class="copyright_text">
              Dukaan 2020, All rights reserved.
            </span>
            <span class="policy_terms">
              <img src={India}></img>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
