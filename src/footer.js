import React from "react";

export default function Footer() {
  const socialMedia = {
    linkedIn: "https://www.linkedin.com/in/manasa-bingi-912723227",
    gitHub: "https://github.com/manasabingi115",
    gmail:
      "https://mail.google.com/mail/?view=cm&fs=1&to=manasabingi115@gmail.com"
  };

  return (
    <div className="footer columns" id="footer">
      <div className="column">
        <p className="name-in-footer">Manasa Bingi.</p>
        <p className="role-name-in-footer">Front end developer.</p>
        <a
          href={socialMedia.gmail}
          className="button is-black is-rounded"
          target="blank"
        >
          Contact Me
        </a>
      </div>
      <div className="column">
        <p className="footer-header">SOCIAL MEDIA</p>
        <div>
          <a href={socialMedia.linkedIn} target="blank">
            LinkedIn
          </a>
          <br />
          <a href={socialMedia.gitHub} target="blank">
            Github
          </a>
          <br />
          <a href={socialMedia.gmail} target="_blank" rel="noreferrer">
            Gmail
          </a>
        </div>
      </div>
      <div className="column">
        <p className="footer-header">EXPLORE</p>
        <div>
          <a href="#home">Home</a>
          <br />
          <a href="#skills">Skills</a>
          <br />
          <a href="#projects-container">Projects</a>
          <br />
          <a href="#footer">Contact</a>
          <br />
        </div>
      </div>
      <div className="column">
        <p className="footer-header">USEFUL LINKS</p>
        <a
          href="https://docs.google.com/document/d/1UdAur_a4h_9o5A2XBAabc4m2tfEFE_h_4RGqSbTKIk0/edit?usp=sharing"
          target="blank"
        >
          Resume
        </a>
      </div>
    </div>
  );
}
