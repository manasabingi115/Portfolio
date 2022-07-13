import React from "react";
import { GoThreeBars } from "react-icons/go";
import { ImCancelCircle } from "react-icons/im";

export default function Header() {
  // const menuList = ["Home", "Skills", "Projects", "About Me"];
  const [mobileMenu, setMobileMenu] = React.useState();
  function Menu() {
    return (
      <div className="menu-in-header">
        <p className="menu-option">
          <a href="#home">Home</a>
        </p>
        <p className="menu-option">
          <a href="#skills">Skills</a>
        </p>
        <p className="menu-option">
          <a href="#projects-container">Projects</a>
        </p>
        <p className="menu-option">
          <a href="#skills">About Me</a>
        </p>
      </div>
    );
  }
  function MobileMenu() {
    return (
      <div className="mobile-menu">
        <span id="mark-on-mobile-menu"></span>
        {mobileMenu && <ImCancelCircle onClick={() => setMobileMenu(false)} />}
        <p className="menu-option">
          <a href="#home">Home</a>
        </p>
        <p className="menu-option">
          <a href="#skills">Skills</a>
        </p>
        <p className="menu-option">
          <a href="#projects-container">Projects</a>
        </p>
        <p className="menu-option">
          <a href="#skills">About Me</a>
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="header" id="home">
        <h1 className="name">Manasa Bingi</h1>
        <Menu />
        <div className="view-resume-parent-and-menu-icon">
          <p className="view-resume">
            <a
              href="https://docs.google.com/document/d/1UdAur_a4h_9o5A2XBAabc4m2tfEFE_h_4RGqSbTKIk0/edit?usp=sharing"
              target="_blank"
              className="view-resume-text"
              rel="noreferrer"
            >
              View Resume
            </a>
          </p>
          <div className="menu-icon-parent">
            <GoThreeBars
              className="menu-icon"
              onClick={() => setMobileMenu(true)}
            />
          </div>
        </div>
      </div>
      {mobileMenu && <MobileMenu />}
    </div>
  );
}
