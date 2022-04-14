import React from "react";
import data from "./Data/experience";

export default function Experience() {
  return (
    <div className="experience-parent-div">
      <h1 className="exp-title">My Experience</h1>
      <p>This is the company I am working in. </p>
      {data.map((data, index) => (
        <div className="card exp-cards" key={index}>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <img
                  className="company-logo"
                  src={data.logo}
                  alt="Placeholder img"
                  width="100"
                />
              </div>
              <div className="media-content">
                <p className="title is-4">{data.companyName}</p>
                <p className="subtitle is-6">{data.position}</p>
              </div>
            </div>
            <div className="content">
              <p>{data.description}</p>
              <p>Technologies Using:</p>
              <div className="techs-in-companies columns is-multiline is-mobile">
                {data.technologies.map((tech, index) => (
                  <p
                    key={index}
                    className="tech-in-company column is-one-sixth is-flex"
                  >
                    <span>{tech}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
