import React from "react";
import skillData from "./Data/skillData";

export default function Skills() {
  return (
    <div className="skill-parent-div" id="skills">
      <h1 className="skills-title">Take a look at my Skills</h1>
      <p className="skill-info">
        These are my skills and this contains all the technologies and
        programming languages that I have learnt until now. I am constantly
        learning, therefore I may update this section more often.
      </p>
      <div
        className="columns is-multiline cards-component"
        style={{ marginTop: "6px" }}
      >
        {skillData.map((data, index) => (
          <div
            key={index}
            className="column is-one-quarter is-flex skill-card-parent"
          >
            <div className="card skill-cards">
              <img
                className="card-img-top"
                style={{ height: "60px", width: "60px" }}
                src={data.img}
                alt="icon"
              />
              <div className="card-body">
                <p>{data.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
