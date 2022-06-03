import React from "react";
import data from "./Data/projectsData";

export default function Projects() {
  return (
    <div>
      <h1 className="projects-title">Projects</h1>
      <div id="projects" className="columns is-multiline">
        {data.map((data, index) => (
          <div className="card project-card column is-one-quarter" key={index}>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">{data.projectName}</p>
                </div>
              </div>
              <div className="content">
                <p>{data.description}</p>
                {data.technologiesUsed.map((el, index) => (
                  <p key={index}>{el}</p>
                ))}
                {/* <a href="">Link</a> */}
                <div className="techs-in-companies columns is-multiline is-mobile"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
