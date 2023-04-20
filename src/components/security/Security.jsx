import React from "react";
import "./security.css";

import SecureBg from "../../Asset/security-bg.png";
import Safety from '../../Asset/safety-badge.png'

const Security = () => {
  return (
    <section id="security">
      <div className="security_badge">
        <img src={SecureBg} alt="" />
        <div id="safety_badge">
          <img src={Safety} alt="" />
          <p>Security</p>
        </div>
      </div>

      <div className="security_text">
        <div className="safety_sub">Safety in peer-to-peer rentals</div>
        <p>
          We have put some shits together to help you play safe ouchea, bitches
          ain’t playing, yo dig?
        </p>
        <button className="list_btn">Learn more</button>
      </div>
    </section>
  );
};

export default Security;
