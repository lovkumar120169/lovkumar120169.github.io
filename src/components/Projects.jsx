import React from "react";
import { Card } from "./Card";
import Trendz from "../assets/img/projects/Trendz.png";
import HolaEx from "../assets/img/projects/HolaEx.png";
import HelthoCart from "../assets/img/projects/HelthoCart.png";
import immortalYoga from "../assets/img/projects/immortalyoga.png"
import "./Project.css";
export const Projects = () => {
  const project = {
    data: [
      {
        name: "Trendz",
        desc: "Clone of Koovs.com which is a Fashion based E-commerce Platform",
        img: Trendz,
        demoLink: "https://64e20c4112dded6402ff06a8--soft-babka-878124.netlify.app/",
        codeLink: "https://github.com/lovkumar120169/pink-purpose-5182",
        techstack: [
          "/icons/html-5.svg",
          "/icons/css-3.svg",
          "/icons/mongodb.svg",
          "/icons/express.svg",
          "/icons/nodejs-icon.svg",
          "/icons/javascript.svg",
        ],
      },
      {
        name: "HelthO Cart",
        desc: "Clone of Helth Kart.com which is an E-commerce website delivering Healthy Products & Supplements",
        img: HelthoCart,
        demoLink: "https://64e20e0ce0168061e85747dd--keen-maamoul-1420db.netlify.app/",
        codeLink: "https://github.com/lovkumar120169/gamy-rate-5438",
        techstack: [
          "/icons/react.svg",
          "/icons/css-3.svg",
          "/icons/javascript.svg",
          "/icons/npm.svg",
          "/icons/bootstrap.svg",
          "/icons/nodejs-icon.svg",
        ],
      },
      {
        name: "Immortal Yoga",
        desc: "IMMORTAL YOGA offers an array of yoga styles, ranging from the dynamic flow of Vinyasa to the meditative depths of Yin.",
        img: immortalYoga,
        demoLink: "https://gleaming-cobbler-bec2a7.netlify.app/",
        codeLink: "https://github.com/aslammmahetar/nosy-silk-95",
        techstack: [
          "/icons/react.svg",
          "/icons/css-3.svg",
          "/icons/javascript.svg",
          "/icons/npm.svg",
          "/icons/mongodb.svg",
          "/icons/bootstrap.svg",
          "/icons/nodejs-icon.svg",
          "/icons/express.svg",
        ],
      }
    ],
  };
  return (
    <div className="project-container">
      <div id="projects" className="container width">
        <h1 className="pt-3 text-center font-details-b pb-3">Projects</h1>
        <div className="row">
          {project.data.map((elem, index) => {
            return <Card key={index} data={elem} />;
          })}
        </div>
      </div>
    </div>
  );
};




// {
//   name: "Sugar Cosmetics Clone",
//   desc: "Sugar Cosmetics is an online marketplace that sells beauty products.  ",
//   img: sugercosmetics,
//   demoLink: "https://sugar-cosmetic.netlify.app/",
//   codeLink: "https://github.com/hrutugandha/Sugar_Cosmetics_Project.git",
//   techstack: [
//     "/icons/html-5.svg",
//     "/icons/css-3.svg",
//     "/icons/javascript.svg",
//   ],
// },