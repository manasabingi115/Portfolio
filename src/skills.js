import React from "react";
import skillData from "./data";

export default function Skills() {
  return (
    <div>
      <h1>Take a look at my Skills</h1>
      <div className="columns is-multiline" style={{ marginTop: "6px" }}>
        {skillData.map((data, index) => (
          <div key={index} className="column is-one-quarter is-flex">
            <div className="card">
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
