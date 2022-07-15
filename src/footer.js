import React from "react";

export default function Footer() {
  const socialMedia = {
    linkedIn: "https://www.linkedin.com/in/manasa-bingi-912723227",
    gitHub: "https://github.com/manasabingi115",
    gmail:
      "https://mail.google.com/mail/?view=cm&fs=1&to=manasabingi115@gmail.com"
  };

  // console.log(socialMedia);
  return (
    <div className="footer columns" id="footer">
      <div className="column">
        <p className="name-in-footer">Manasa Bingi.</p>
        <p className="role-name-in-footer">Front end developer.</p>
        <button className="button is-black is-rounded">Contact Me</button>
      </div>
      <div className="column">
        <p>SOCIAL MEDIA</p>
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
        <p>EXPLORE</p>
      </div>
      <div className=" column">
        <p>USEFUL LINKS</p>
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
