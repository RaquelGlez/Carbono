import React from "react";
import { dataFooter } from "../assets/data";

const Footer = () => {
  return (
    <div className="footer__container" id="footer">
      <div className="footer__main">
        <div className="footer__rrss">
          <a href="/">{dataFooter.imgFacebook}</a>
          <a href="/">{dataFooter.imgLinkedin}</a>
          <a href="/">{dataFooter.imgInstagram}</a>
          <a href="/">{dataFooter.imgTwitter}</a>
        </div>
        <div className="footer__logo">
          <a href="/">{dataFooter.imgLogo}</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
