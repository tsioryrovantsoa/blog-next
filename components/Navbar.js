import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="navbar-area">
        <div className="adbar-area bg-black d-none d-lg-block">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-5 align-self-center">
                <div className="logo text-md-left text-center">
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg">
          <div className="container nav-container">
            <div className="responsive-mobile-menu">
              <div className="logo d-lg-none d-block">
              </div>
              <button
                className="menu toggle-btn d-block d-lg-none"
                data-target="#nextpage_main_menu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-left"></span>
                <span className="icon-right"></span>
              </button>
            </div>
            <div className="nav-right-part nav-right-part-mobile">
              <a className="search header-search" href="#">
                <i className="fa fa-search"></i>
              </a>
            </div>
            <div className="collapse navbar-collapse" id="nextpage_main_menu">
              <ul className="navbar-nav menu-open">
                <li className="current-menu-item">
                <Link href="/" >Accueil</Link>
                </li>
                <li className="current-menu-item">
                <Link href="/blog" >Blog</Link>
                </li>
                <li className="current-menu-item">
                <Link href="/utilisateurs">Membre</Link>
                </li>
              </ul>
            </div>
            {/* <div className="nav-right-part nav-right-part-desktop">
              <div className="menu-search-inner">
                <input type="text" placeholder="Search ..." />
                <button type="submit" className="submit-btn">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div> */}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
