import React from "react";
import "./Card.css";

const Card = ({ data }) => {
  return (
    <div className="col-md-6 my-4 text-dark project-card">
      <div className="card border shadow  h-100">
        <img src={data.img} className="img-fluid border project-image" alt="" />
        <div className="p-3">
          <h4 className="text-center my-2 font-weight-bold">{data.name}</h4>
          <p className="px-2 text-center">{data.desc}</p>
          <div className="live-btn">
            <div className="col-md-6" id="btn-div" >
              <a
                className="btn btn-outline-dark  btn-sm"
                href={data.demoLink}
                target="_blank"
                rel="noreferrer"
                style={{ backgroundColor: "rgb(152,238,204)", border: "none", fontWeight: "600", padding: "5px 15px", width: "100%" }}
              >
                Live
              </a>
            </div>
            <div className="col-md-6" id="btn-div">
              <a

                id="github-btn-1"
                className="btn btn-outline-dark  btn-sm github-btn-1"
                href={data.codeLink}
                target="_blank"
                rel="noreferrer"

              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };
