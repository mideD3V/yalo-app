import React from "react";
import "./hero.css";
import heroImg from "../../Asset/hero-image.png";

import { IoIosArrowDown } from "react-icons/io";
import { RiSearchLine } from "react-icons/ri";
import { TfiLocationPin } from "react-icons/tfi";

const Hero = () => {
  return (
    <section id="hero">
      {/* hero text */}
      <div className="hero-txt">
        <h1>Hey there! what would you like to rent today?</h1>
      </div>

      {/* Search bar */}
      <div className="search">
        <div classssName="category">
          <p>
            All Category{" "}
            <span className="arrow">
              <IoIosArrowDown />
            </span>
          </p>
        </div>
        <span className="divider"></span>
        <input
          type="text"
          placeholder="Try a keyword e.g ‘power drilling machine’"
        />

        <button className="search-btn">
          {" "}
          <span>
            <RiSearchLine />{" "}
          </span>{" "}
          Search{" "}
        </button>
      </div>

      {/* Location */}
      <div className="location">
        <TfiLocationPin />
        <span className="location_div"></span>
        <p>
          Anywhere{" "}
          <span>
            <IoIosArrowDown />
          </span>{" "}
        </p>
      </div>

      <div className="hero-img">
        <img src={heroImg} alt="" />
      </div>
    </section>
  );
};

export default Hero;
