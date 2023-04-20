import React from "react";
import "./footer.css";

import Yalo from "../../Asset/yalo-logo2.png";
import Fb from '../../Asset/socials/fb.png'
import Ig from '../../Asset/socials/ig.png'
import Linkedin from '../../Asset/socials/linkedin.png'
import Twitter from '../../Asset/socials/twitter.png'

const Footer = () => {
  return (
    <section id="footer">
      <div className="footer_up">
        <div className="footer_logo">
          <img src={Yalo} alt="" />
          <p>Here, you will find it</p>
        </div>

        <div className="newsletter">
          <p>Receive our news letters directly in your inbox</p>
          <form action="SUBMIT">
            <input type="text" placeholder="Enter your email" />
            <button className="subscribe">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer_down">
        <div className="info">

          <div className="about info2">
            <h2>ABOUT US</h2>
            <p>About Yalocart</p>
            <p>Our team</p>
            <p>Our mission statement</p>
            <p>Privacy policy</p>
            <p>Terms of service</p>
          </div>

          <div className="contact">
            <h2>CONTACT US</h2>
            <p>Send us an email</p>
            <p>Quick chat with an agent</p>
            <p>Blog</p>
          </div>

          <div className="support">
            <h2>SUPPORT</h2>
            <p>Help center</p>
            <p>Open a support ticket</p>
          </div>

          <div className="faq">
            <h2>FAQs</h2>
            <p>How do I list my item for rent?</p>
            <p>How do I promote my items?</p>
            <p>How do I promote my items?</p>
            <p>How do I promote my items?</p>
            <p>How do I promote my items?</p>
            <p>How do I promote my items?</p>
          </div>
        </div>
        <div className="socials">
          <img src={Fb} alt="" />
          <img src={Ig} alt="" />
          <img src={Linkedin} alt="" />
          <img src={Twitter} alt="" />
        </div>
        <div className="copyright">YaloCart 2023. All rights reserved.</div>
      </div>
    </section>
  );
};

export default Footer;
