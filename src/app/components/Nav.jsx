import Image from "next/image";
import React from "react";
import logo from "../../../public/Vector Smart Object-ai.svg";
import "./nav.css";

const Nav = () => {
  return (
    <section className="nav">
      <div className="nav-content container">
        <a href="#">
          <Image src={logo} alt="Logo" className="logo" />
        </a>

        <div className="links">
          <a href="#history">01.History</a>
          <a href="#team">02.Team</a>
        </div>
      </div>
    </section>
  );
};

export default Nav;
