import React from "react";
import { GoThreeBars } from "react-icons/go";

export default function Header() {
  return (
    <div className="header">
      <h1 className="name">Manasa Bingi</h1>
      <div className="menu-in-header">
        <p className="menu-option">Home</p>
        <p className="menu-option">Skills</p>
        <p className="menu-option">Projects</p>
        <p className="menu-option">About Me</p>
      </div>
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
        <GoThreeBars className="menu-icon" />
      </div>
    </div>
  );
}
