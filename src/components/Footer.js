import React from "react";
import { dataFooter } from "../assets/data";

const Footer = () => {
  return (
    <div className="footer__container" id="footer">
      <div className="footer__main">
        <div className="footer__rrss">
          <a href="#footer">{dataFooter.imgFacebook}</a>
          <a href="#footer">{dataFooter.imgLinkedin}</a>
          <a href="#footer">{dataFooter.imgInstagram}</a>
          <a href="#footer">{dataFooter.imgTwitter}</a>
        </div>
        <div className="footer__logo">
          <a href="/">{dataFooter.imgLogo}</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
