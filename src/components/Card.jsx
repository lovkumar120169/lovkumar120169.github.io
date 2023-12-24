import React from "react";
import "./Card.css";
// import { color } from "framer-motion";

const Card = ({ data }) => {
  return (
    <div className="col-md-6 my-4 text-dark project-card">
      <div className="card border shadow  h-100" >
        <img src={data.img} className="img-fluid border project-image" style={{height:"100%"}} alt="" />
        <div className="">
          <h4 className="" style={{marginTop:"5px"}}>{data.name}</h4>
          <p style={{marginTop:"10px",fontWeight:"500"}}>{data.desc}</p>
          <div>

            <h6 style={{marginTop:"10px",fontSize:"14px",fontFamily:'"Montserrat", serif',fontWeight:"500"}}>Tech Stack - <span style={{color:"#DFA464"}}>{data.techstack}</span></h6>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",marginTop:"40px",padding:"0px 30px" }}>
            <div style={{ width: "40%" }}>
              <a href={data.demoLink} target="_blank" className="project-deployed-link"> <button style={{ fontWeight: "600", padding: "5px 15px", border: "none", backgroundColor: "#DFA464",color:"white", borderRadius: "5px", width: "100%" }}>Live</button></a>
            </div>
            <div style={{ width: "40%" }}>
              <a href={data.codeLink}  target="_blank" className="project-github-link" > <button style={{ fontWeight: "600", padding: "5px 15px", border: "none", backgroundColor: "#DFA464",color:"white", borderRadius: "5px", width: "100%" }}>Github</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };
