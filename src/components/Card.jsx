import React from "react";
import "./Card.css";
// import { color } from "framer-motion";

const Card = ({ data }) => {
  return (
    <div className="col-md-6 my-4 text-dark project-card">
      <div className="card border shadow  h-100">
        <img src={data.img} className="img-fluid border project-image" alt="" />
        <div className="p-3">
          <h4 className="text-center my-2 font-weight-bold project-title">{data.name}</h4>
          <p className="px-2 text-center project-description">{data.desc}</p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",marginTop:"40px",padding:"0px 30px" }}>
            <div style={{ width: "40%" }}>
              <a href={data.demoLink} className="project-deployed-link"> <button style={{ fontWeight: "600", padding: "5px 15px", border: "none", backgroundColor: "rgb(152 238 204)", borderRadius: "5px", width: "100%" }}>Live</button></a>
            </div>
            <div style={{ width: "40%" }}>
              <a href={data.codeLink}  className="project-github-link" > <button style={{ fontWeight: "600", padding: "5px 15px", border: "none", backgroundColor: "rgb(152 238 204)", borderRadius: "5px", width: "100%" }}>Github</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };

// href={data.codeLink}
// href={data.demoLink}