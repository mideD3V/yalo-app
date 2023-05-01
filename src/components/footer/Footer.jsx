import React from "react";
import "./footer.css";
import {Link} from 'react-router-dom'

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
            <p className="about_links">
              {" "}
              <Link>About Yalocart</Link>
              <Link>Our team</Link>
              <Link>Our mission statement</Link>
              <Link>Privacy policy</Link>
              <Link>Terms of service</Link>
            </p>
          </div>

          <div className="contact">
            <h2>CONTACT US</h2>
            <p className="about_links">
              <Link>Send us an email</Link>
              <Link>Quick chat with an agent</Link>
              <Link>Blog</Link>
            </p>
          </div>

          <div className="support">
            <h2>SUPPORT</h2>
            <p className="about_links">
              <Link to="/">Help center</Link>
              <Link to="/">Open a support ticket</Link>
            </p>
          </div>

          <div className="faq">
            <h2>FAQs</h2>
            <p className="about_links">
              <Link to="/">How do I list my item for rent?</Link>
              <Link to="/">How do I promote my items?</Link>
              <Link to="/">How do I promote my items?</Link>
              <Link to="/">How do I promote my items?</Link>
              <Link to="/">How do I promote my items?</Link>
              <Link to="/">How do I promote my items?</Link>
            </p>
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
