import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer-area bg-black pd-top-95">
        <div className="container">
          <div className="footer-bottom text-center">
            <ul className="widget_nav_menu">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">rivacy Policy</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <p>
              Copyright ©2021 <a href="#">SolverWp</a>
            </p>
          </div>
        </div>
      </div>
      <div className="back-to-top">
        <span className="back-top">
          <i className="fa fa-angle-up"></i>
        </span>
      </div>
    </>
  );
};

export default Footer;
