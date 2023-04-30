import React from "react";
import "./Footer.css";
import "font-awesome/css/font-awesome.min.css";

const Footer = () => {
  return (
    <>
      <div style={{ backgroundColor: "#212529"}}>
        <div className="wrapper">
          <a
            href="https://www.instagram.com/luv2733/"
            className="icon twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-instagram"> </i>
          </a>

          <a
            href="https://www.linkedin.com/in/lov-kumar-47b232235/"
            className="icon linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/lovkumar120169"
            className="icon github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github"></i>
          </a>
        </div>
        <div style={{color:"white",padding:"10px"}}>
          Created By Lov kumar | © 2023. All Rights Reserved
        </div>
      </div>
    </>
  );
};

export { Footer };
