import React from "react";
import { Row, Col, Card, Image } from "react-bootstrap";
import L_HTML5 from "../assets/img/skills/html-5.svg";
import L_CSS3 from "../assets/img/skills/css3.svg";

import L_REACT from "../assets/img/skills/react.svg";
import L_REDUX from "../assets/img/skills/redux.svg";
import L_REACT_ROUTER from "../assets/img/skills/react-router.svg";
import L_MATERIALUI from "../assets/img/skills/material-ui-1.svg";

import L_NODE_JS from "../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../assets/img/skills/express.svg";
import L_MONGODB from "../assets/img/skills/mongodb.svg";
import L_GIT from "../assets/img/skills/git-icon.svg";
import L_HEROKU from "../assets/img/skills/heroku.svg";
import L_VERCEL from "../assets/img/skills/vercel.svg";
import L_GITHUB_PAGES from "../assets/img/skills/github.svg";
import L_JAVASCRIPT from "../assets/img/skills/javascript.svg";
import L_NETLIFY from "../assets/img/skills/netlify.svg";
import "./Skills.css";

const Skills = () => {
  const skills = {
    frontend: [
      {
        link: "https://en.wikipedia.org/wiki/HTML5",
        imgAltText: "HTML 5",
        imgSrc: L_HTML5,
        skillName: "HTML5",
      },
      {
        link: "https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1",
        imgAltText: "CSS 3",
        imgSrc: L_CSS3,
        skillName: "CSS3",
      },
      {
        link: "https://www.javascript.com/",
        imgAltText: "JavaScript",
        imgSrc: L_JAVASCRIPT,
        skillName: "JavaScript",
      },
      {
        link: "https://reactjs.org/",
        imgAltText: "React JS",
        imgSrc: L_REACT,
        skillName: "React JS",
      },
      {
        link: "https://redux.js.org/",
        imgAltText: "Redux",
        imgSrc: L_REDUX,
        skillName: "Redux",
      },
      {
        link: "https://reacttraining.com/react-router/",
        imgAltText: "React Router",
        imgSrc: L_REACT_ROUTER,
        skillName: "React Router",
      },
      {
        link: "https://chakra-ui.com/",
        imgAltText: "Chakra-UI",
        imgSrc: "https://pbs.twimg.com/profile_images/1244925541448286208/rzylUjaf_400x400.jpg",
        skillName: "Chakra-UI",
      },
      {
        link: "https://getbootstrap.com/",
        imgAltText: "Bootstrap",
        imgSrc: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
        skillName: "Bootstrap",
      },
    ],

    backend: [
      {
        link: "https://nodejs.org/en/",
        imgAltText: "Node.js",
        imgSrc: L_NODE_JS,
        skillName: "Node.js",
      },
      {
        link: "https://expressjs.com/",
        imgAltText: "Express",
        imgSrc: L_EXPRESS,
        skillName: "Express",
      },
    ],
    hostingPlatforms: [
      {
        link: "https://www.heroku.com/",
        imgAltText: "Vercel",
        imgSrc: L_VERCEL,
        skillName: "Vercel",
      },

      {
        link: "https://pages.github.com/",
        imgAltText: "GitHub Pages",
        imgSrc: L_GITHUB_PAGES,
        skillName: "GitHub Pages",
      },
      {
        link: "https://www.netlify.com/",
        imgAltText: "Netlify",
        imgSrc: L_NETLIFY,
        skillName: "Netlify",
      },
      {
        link: "https://render.com/",
        imgAltText: "Render",
        imgSrc: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjIwLjE3OCIgdmlld0JveD0iMCAwIDc3Ljc4OCAyMC4xNzgiIHdpZHRoPSI3Ny43ODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzIzMmE1NSI+PHBhdGggZD0ibTM5OS43ODEgMjIyLjQzN2E3LjM0IDcuMzQgMCAwIDAgLTMuNjE4Ljk1MXYxMC41NTdhLjU0OC41NDggMCAwIDEgLS41MjUuNTUzaC0yLjQxMmEuNTQ4LjU0OCAwIDAgMSAtLjUyNS0uNTUzdi0xMy43MzZhLjUzMy41MzMgMCAwIDEgLjUyNS0uNTI1aDIuMjg1YS41MzMuNTMzIDAgMCAxIC41MjUuNTI1di41NTNhNi4xODggNi4xODggMCAwIDEgMy43Ni0xLjI2My41MzMuNTMzIDAgMCAxIC41MjUuNTI1djEuODg3YS41NTUuNTU1IDAgMCAxIC0uNTQuNTI2eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM5Mi43IC0yMTQuNTM0KSIvPjxwYXRoIGQ9Im00NjcuMzMzIDIyOC4zaC04LjU1NnYuMDg1YzAgMS41MTguNjI0IDMuMzM1IDMuMTUgMy4zMzUgMS42MTgtLjAxNCAzLjIyMS0uMSA0LjgyNS0uMjdoLjA4NWMuMjcgMCAuNDY4LjEyOC40NjguNHYxLjczMWMwIC40MjYtLjA4NS42MS0uNTUzLjY4MWEyMy41MTkgMjMuNTE5IDAgMCAxIC01LjA5NC40NGMtMi42MjUgMC02LjM1Ny0xLjQxOS02LjM1Ny02LjU4NHYtMS45NDRjMC00LjEgMi4yODUtNi42NjkgNi4zLTYuNjY5IDQuMDQ0IDAgNi4yNDQgMi43NTMgNi4yNDQgNi42Njl2MS40NzZjLjAxMy40MjEtLjE0NS42NS0uNTEyLjY1em0tMi45NjYtMi41NjhjMC0yLjA0My0xLjEzNS0zLjIzNS0yLjc1My0zLjIzNXMtMi44MSAxLjE0OS0yLjgxIDMuMjM1di4xaDUuNTYyeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ0Ni40MTcgLTIxNC41MzQpIi8+PHBhdGggZD0ibTU3Ni4yOTMgMjM0LjU3aC0yLjQxMmEuNTQ4LjU0OCAwIDAgMSAtLjUyNS0uNTUzdi04LjU0MmMwLTIuMjg1LS4yMTMtMi45MzctMi4yMjgtMi45MzdhNi42NDggNi42NDggMCAwIDAgLTIuOTY2Ljk1MXYxMC41NTdhLjU0OS41NDkgMCAwIDEgLS41MjUuNTUzaC0yLjQxMmEuNTQ5LjU0OSAwIDAgMSAtLjUyNS0uNTUzdi0xMy43MzdhLjUzMy41MzMgMCAwIDEgLjUyNS0uNTI1aDIuMjg1YS41MzMuNTMzIDAgMCAxIC41MjUuNTI1di41NTNhNi44NTIgNi44NTIgMCAwIDEgNC4yNTctMS4yNjNjMy43NzQgMCA0LjU0MSAyLjU0IDQuNTQxIDUuODc1djguNTU2YS41NjkuNTY5IDAgMCAxIC0uNTQuNTR6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTQwLjI5NCAtMjE0LjYxOSkiLz48cGF0aCBkPSJtNjgyLjA1IDIwNGEyMi4xNiAyMi4xNiAwIDAgMSAtNS4yNzkuNjgxYy00LjIyOCAwLTYuMjcyLTIuNS02LjI3Mi02LjU4NHYtMi4wMjljMC00LjEgMi4wNDMtNi41ODQgNi4yNzItNi41ODRhMjEuMzcxIDIxLjM3MSAwIDAgMSAyLjUyNi4xODR2LTQuNjRhLjUzMy41MzMgMCAwIDEgLjUyNS0uNTI1aDIuNDEyYS41MzMuNTMzIDAgMCAxIC41MjUuNTI1djE4LjI3MmMuMDAxLjM3LS4xMTMuNTQxLS43MDkuN3ptLTIuNzUtMTEuNTExYTIxLjM4NSAyMS4zODUgMCAwIDAgLTIuNTI2LS4xODRjLTIuMjU2IDAtMi44MDkgMS42LTIuODA5IDMuNzZ2Mi4wMTVjMCAyLjE1Ny41NTMgMy43NiAyLjgwOSAzLjc2YTE2LjY3NiAxNi42NzYgMCAwIDAgMi41MjYtLjE4NHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MzEuMDgxIC0xODQuNSkiLz48cGF0aCBkPSJtNzg5LjczMyAyMjguM2gtOC41NTZ2LjA4NWMwIDEuNTE4LjYyNCAzLjMzNSAzLjE1IDMuMzM1IDEuNjE4LS4wMTQgMy4yMjEtLjEgNC44MjUtLjI3aC4wODVjLjI1NSAwIC40NjguMTI4LjQ2OC40djEuNzMxYzAgLjQyNi0uMDg1LjYxLS41NTMuNjgxYTIzLjUxOSAyMy41MTkgMCAwIDEgLTUuMDk0LjQ0Yy0yLjYyNSAwLTYuMzU3LTEuNDE5LTYuMzU3LTYuNTg0di0xLjk0NGMwLTQuMSAyLjI4NS02LjY2OSA2LjMtNi42NjkgNC4wNDQgMCA2LjI0NCAyLjc1MyA2LjI0NCA2LjY2OXYxLjQ3NmMuMDEzLjQyMS0uMTQ1LjY1LS41MTIuNjV6bS0yLjk2Ni0yLjU2OGMwLTIuMDQzLTEuMTM1LTMuMjM1LTIuNzUzLTMuMjM1cy0yLjgxIDEuMTQ5LTIuODEgMy4yMzV2LjFoNS41NjJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzIzLjA3IC0yMTQuNTM0KSIvPjxwYXRoIGQ9Im04OTQuMjgxIDIyMi40MzdhNy4zMzkgNy4zMzkgMCAwIDAgLTMuNjE4Ljk1MXYxMC41NTdhLjU0OC41NDggMCAwIDEgLS41MjUuNTUzaC0yLjQxMmEuNTQ5LjU0OSAwIDAgMSAtLjUyNS0uNTUzdi0xMy43MzZhLjUzMy41MzMgMCAwIDEgLjUyNS0uNTI1aDIuMjg0YS41MzMuNTMzIDAgMCAxIC41MjUuNTI1di41NTNhNi4xODggNi4xODggMCAwIDEgMy43Ni0xLjI2My41MzMuNTMzIDAgMCAxIC41MjUuNTI1djEuODg3YS41NDYuNTQ2IDAgMCAxIC0uNTM5LjUyNnoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04MTcuMDMyIC0yMTQuNTM0KSIvPjwvZz48L3N2Zz4K",
        skillName: "Render",
      }
    ],
    programmingLanguages: [
      {
        link: "https://www.javascript.com/",
        imgAltText: "JavaScript",
        imgSrc: L_JAVASCRIPT,
        skillName: "JavaScript",
      },{
        link: "https://www.typescriptlang.org/",
        imgAltText: "TypeScript",
        imgSrc:"https://s.yimg.com/fz/api/res/1.2/c8FQiQu7k_3WZ_zfrLjkBQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI2MDtxPTgwO3c9MjYw/https://s.yimg.com/zb/imgv1/b0edf97d-a712-3c6c-bd1e-3a59ca4b72a0/t_500x300",
        skillName: "TypeScript",
      }
    ],
    databases: [
      {
        link: "https://www.mongodb.com/",
        imgAltText: "MongoDB",
        imgSrc: L_MONGODB,
        skillName: "MongoDB",
      },
    ],
    versionControl: [
      {
        link: "https://git-scm.com/",
        imgAltText: "GIT",
        imgSrc: L_GIT,
        skillName: "GIT",
      },
    ],
  };
  return (
    <div className="skill-container">
      <div className="pt-3 pb-3 width-container" id="skills">
        <h1 className="text-center font-details-b pb-4">Tech Skills</h1>
        {/* <CardDeck> */}
        <Row className="d-flex justify-content-around">
          {/* Frontend */}
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                {/* Frontend */}
                <Card.Title className="text-center  card-title">
                  Frontend
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.frontend.map((skill, index) => (
                    <span className="p-2" style={{margin:"auto"}} key={index}>
                      <a
                        className="text-dark text-decoration-none"
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={skill.imgSrc}
                          alt={skill.imgAltText}
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Backend */}
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">
                  Backend
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column" >
                  {skills.backend.map((skill, index) => (
                    <span className="p-2" style={{margin:"auto"}} key={index}>
                      <a
                        className="text-dark text-decoration-none"
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={skill.imgSrc}
                          alt={skill.imgAltText}
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Hosting Platforms */}
            <Card className="focus mt-5 mb-2 ">
              <Card.Body>
                <Card.Title className="text-center  card-title">
                  Hosting Platforms
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.hostingPlatforms.map((skill, index) => (
                    <span className="p-2" style={{margin:"auto"}} key={index}>
                      <a
                        className="text-dark text-decoration-none"
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={skill.imgSrc}
                          alt={skill.imgAltText}
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Programming Languages */}
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">
                  Programming Languages
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.programmingLanguages.map((skill, index) => (
                    <span className="p-2" style={{margin:"auto"}} key={index}>
                      <a
                        className="text-dark text-decoration-none"
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={skill.imgSrc}
                          alt={skill.imgAltText}
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Database */}

            <Card className="focus mt-5 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">
                  Database
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.databases.map((skill, index) => (
                    <span className="p-2" style={{margin:"auto"}} key={index}>
                      <a
                        className="text-dark text-decoration-none"
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={skill.imgSrc}
                          alt={skill.imgAltText}
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
            {/* Version Control */}

            <Card className="focus mt-4 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">
                  Version <br /> Control{" "}
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  <span className="p-2" style={{margin:"auto"}}>
                    <a
                      className="text-dark text-decoration-none"
                      href={skills.versionControl[0].link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={skills.versionControl[0].imgSrc}
                        alt={skills.versionControl[0].imgAltText}
                        rounded
                        className="image-style m-1"
                      ></Image>{" "}
                      {skills.versionControl[0].skillName}
                    </a>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Skills;
