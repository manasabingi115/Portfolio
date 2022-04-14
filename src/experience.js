import React from "react";

export default function Experience() {
  return (
    <div className="experience-parent-div">
      <h1>My Experience</h1>
      <p>This is the company I am working in. </p>
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              {/* <figure class="image"> */}
              <img
                className="company-logo"
                src="https://www.italentdigital.com/assets/img/iTalent_logo.png"
                alt="Placeholder img"
                width="100"
              />
              {/* </figure> */}
            </div>
            <div class="media-content">
              <p class="title is-4">iTalent Digital</p>
              <p class="subtitle is-6">Software Engineer</p>
            </div>
          </div>

          <div class="content">
            <p>
              Working on Khoros community. In this, we are using some
              technologies. tdxctgfvghbuhb fctrcvytvyhbbbbbbbbbbbbbbbbbbbbbjgv
              hhgvgvgvhgv
            </p>
            Technologies Using:
            <br />
            JavaScript, React, Freemarker, Jquery, HTML, CSS.
          </div>
        </div>
      </div>
    </div>
  );
}
