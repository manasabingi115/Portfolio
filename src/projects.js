import React from "react";
import data from "./Data/projectsData";

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <div id="projects" className="columns is-multiline">
        {data.map((data, index) => (
          <div className="card project-card column is-one-quarter" key={index}>
            <div className="card-content">
              <div className="media">
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
    </div>
  );
}
