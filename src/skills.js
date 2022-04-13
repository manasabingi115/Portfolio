import React from "react";

export default function Skills() {
  const data = ["col1", "col2", "col3", "col4", "col5", "col6"];
  return (
    <div>
      <h1>Take a look at my Skills</h1>
      <div
        className="columns is-multiline"
        style={{ marginLeft: "-20px", marginTop: "6px" }}
      >
        {data.map((data) => (
          <div
            className="column is-one-fourth is-flex is-justify-content-space-around"
            key={data.id}
          >
            <div
              className="card"
              style={{
                width: "14rem",
                height: "10rem",
                borderRadius: "10px"
              }}
            >
              <img
                className="card-img-top"
                style={{ height: "60px", width: "80px" }}
                src="https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png"
                alt="Card img cap"
              />
              <div className="card-body">
                <p>JavaScript</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
