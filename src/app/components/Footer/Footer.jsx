import React from "react";
import logo from "../../../../public/Vector Smart Object-ai.svg";
import "./footer.css";
import Image from "next/image";
const Footer = () => {
  return (
    <footer id="team" className="footer">
      <div className="footer-content ">
        <div className="footer-heading-parent">
          <div className="container footer-heading">
            <button>MOUNTAIN 1</button>
            <button>MOUNTAIN 2</button>
          </div>
        </div>

        {/*  */}
        <div className="footer-schedule-parent">
          <div className="footer-schedule container ">
            <div className="footer-schedule2">
              <h2>SCHEDULE</h2>
              <ul>
                <li>
                  <p>25 Nov 2016</p>
                  <p>Lorem, ipsum.</p>
                </li>
                <li>
                  <p>25 Nov 2016</p>
                  <p>Lorem, ipsum.</p>
                </li>
                <li>
                  <p>25 Nov 2016</p>
                  <p>Lorem, ipsum.</p>
                </li>
                <li>
                  <p>25 Nov 2016</p>
                  <p>Lorem, ipsum.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="footer-copyright-parent ">
          <div className="footer-copyright-content container">
            <div className="footer-logo">
              <Image src={logo} alt="Logo" />
              <h1>
                <span>LOSANGELES</span>
                <span>MOUNTAINS</span>
              </h1>
            </div>
            <p>COPYRIGHT 2016. ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
