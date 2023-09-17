import React from "react";
import { Card } from "./Card";
import Trendz from "../assets/img/projects/Trendz.png";
import Puzzle from "../assets/img/projects/puzzle_innovationz.png"
import HolaEx from "../assets/img/projects/HolaEx.png";
import HelthoCart from "../assets/img/projects/HelthoCart.png";
import Artgallery from "../assets/img/projects/Art_gallery.png";
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
        codeLink: "https://github.com/lovkumar120169/Koovs-Clone",
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
        name: "Puzzle Innovationz",
        desc: "Clone of Puzzle Innovationz it is a UI/UX design bootcamp for honing design skills, mastering industry tools, and creating exceptional user experiences.",
        img: Puzzle,
        demoLink: "https://6506fdb11b7ad93c3f86d53b--illustrious-dolphin-5c2f38.netlify.app/",
        codeLink: "https://github.com/lovkumar120169/Puzzle-Innovationz--Clone",
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
        codeLink: "https://github.com/lovkumar120169/Immortal-Yoga",
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
      }, {
        name: "Art Gallery",
        desc: "This clone of the Marian Goodman Gallery website presents an extensive collection of artworks by renowned and influential artists",
        img: Artgallery,
        demoLink: "https://client-steel-gamma.vercel.app/",
        codeLink: "https://github.com/lovkumar120169/Art-Gallery",
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
    <div className="project-container"  id="projects">
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


 