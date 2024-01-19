import Image from "next/image";
import React from "react";
import logo from "../../../../public/Vector Smart Object-ai.svg";
import "./banner.css";
const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content container">
        <div className="banner-logo">
          <Image src={logo} alt="Logo" />
          <h1>
            <span>LOSANGELES</span>
            <span>MOUNTAINS</span>
          </h1>
        </div>
        {/*  */}
        <div className="banner-links">
          <a href="#history">01.History</a>
          <a href="#team">02.Team</a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
