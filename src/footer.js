import React from "react";

export default function Footer() {
  return (
    <div className="footer columns">
      <div className="column">
        <p>Manasa Bingi.</p>
        <p>Front end developer.</p>
        <button className="button is-black is-rounded">Contact Me</button>
      </div>
      <div className="column">
        <p>SOCIAL MEDIA</p>
      </div>
      <div className="column">
        <p>EXPLORE</p>
      </div>
      <div className="column">
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
