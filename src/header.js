import React from "react";
import { GoThreeBars } from "react-icons/go";
import { ImCancelCircle } from "react-icons/im";

export default function Header() {
  const menuList = ["Home", "Skills", "Projects", "About Me"];
  const [mobileMenu, setMobileMenu] = React.useState();
  function Menu() {
    return (
      <div className="menu-in-header">
        {menuList.map((item, index) => (
          <p key={index} className="menu-option">
            {item}
          </p>
        ))}

        {/* <p className="menu-option">Skills</p>
        <p className="menu-option">Projects</p>
        <p className="menu-option">About Me</p> */}
      </div>
    );
  }
  return (
    <div className="header">
      <h1 className="name">Manasa Bingi</h1>
      <Menu />
      <div className="view-resume-parent-and-menu-icon">
        <p className="view-resume">
          <a
            href="https://docs.google.com/document/d/1UdAur_a4h_9o5A2XBAabc4m2tfEFE_h_4RGqSbTKIk0/edit?usp=sharing"
            target="_blank"
            className="view-resume-text"
          >
            View Resume
          </a>
        </p>
        <div className="menu-icon-parent">
          <GoThreeBars
            className="menu-icon"
            onClick={() => setMobileMenu(true)}
          />
          <br />
          {mobileMenu && (
            <ImCancelCircle onClick={() => setMobileMenu(false)} />
          )}
          {mobileMenu &&
            menuList.map((item, index) => <p key={index}>{item}</p>)}
        </div>
      </div>
    </div>
  );
}
