import React from "react";
import "./footer.css";
import gpt3Logo from "../../assets/logo.svg";
function Footer() {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do You Want To Get Into The Future Before Others??
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id,
            officiis.
          </p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get In Touch</h4>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>033-5264-5461</p>
          <p>getready@rediffmail.com</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>Copyright 2023. All rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
