import React from "react";
import data from "./Data/projectsData";
// import fbimage from "./Images/facebook post model.png";

export default function Projects() {
  return (
    <div id="projects-container">
      <h1 className="projects-title">Projects</h1>
      <div id="projects" className="columns is-multiline">
        {data.map((data, index) => (
          <div
            className="card project-card column is-one-quarter is-half-tablet"
            key={index}
          >
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={data.image} alt="Placeholder img" />
              </figure>
            </div>

            <div className="card-content projects-card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-6">{data.projectName}</p>
                </div>
                {/* <img src={data.image} /> */}
              </div>

              <div className="content">
                <p className="project-description">{data.description}</p>

                {/* <div className="techs-in-companies columns is-multiline is-mobile">
                {data.technologies.map((tech, index) => (
                  <p
                    key={index}
                    className="tech-in-company column is-one-sixth is-flex"
                  >
                    <span>{tech}</span>
                  </p>
                ))}
              </div> */}
                <p>Technologies Used:</p>
                {/* <br /> */}

                <div className="techs-in-projects columns is-multiline is-mobile">
                  {data.technologiesUsed.map((el, index) => (
                    <p
                      className="techs-in-project column is-one-sixth is-flex"
                      key={index}
                    >
                      <span> {el}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="buttons-in-card">
              <a
                href={data.liveAt}
                target="blank"
                className="button is-link projects-card-button"
              >
                Live Website
              </a>
              <a
                href={data.githubRepo}
                target="blank"
                className="button is-link is-outlined projects-card-button"
              >
                Github Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
