import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Banner from "./Banner";

const Header = () => {
  return (
    <>
      <div className="td-search-popup" id="td-search-popup">
        <form action="index.html" className="search-form">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search....." />
          </div>
          <button type="submit" className="submit-btn">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="body-overlay" id="body-overlay"></div>
      <Navbar/>
    </>
  );
};

export default Header;
