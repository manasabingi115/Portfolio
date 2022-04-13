import React from "react";

export default function Header() {
  return (
    <div className="header">
      <h1>Manasa Bingi</h1>
      <div className="menu-in-header">
        <p className="menu-option">Home</p>
        <p className="menu-option">Skills</p>
        <p className="menu-option">Projects</p>
        <p className="menu-option">About Me</p>
      </div>
      <p className="view-resume">
        <a
          href="https://docs.google.com/document/d/1UdAur_a4h_9o5A2XBAabc4m2tfEFE_h_4RGqSbTKIk0/edit?usp=sharing"
          target="_blank"
          className="view-resume-text"
        >
          View Resume
        </a>
      </p>
    </div>
  );
}
