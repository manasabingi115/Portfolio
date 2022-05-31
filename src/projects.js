import React from "react";
import data from "./Data/projectsData";

export default function Projects() {
  return (
    <div id="projects">
      <h1>Projects</h1>
      {data.map((data, index) => (
        <div className="card" key={index}>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <img
                  className="company-logo"
                  src=""
                  alt="Placeholder img"
                  width="100"
                />
              </div>
              <div className="media-content">
                <p className="title is-4">Project Name</p>
              </div>
            </div>
            <div className="content">
              <p>{data.description}</p>
              {data.technologiesUsed.map((el, index) => (
                <p key={index}>{el}</p>
              ))}
              <div className="techs-in-companies columns is-multiline is-mobile"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
