import React from "react";
import { Button } from "./common/Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faGlobe,
  faLaptopFile,
} from "@fortawesome/free-solid-svg-icons";
import { Reveal } from "./common/Reveal";
import styled from "styled-components";

export const Home = () => {
  function openHandler() {
    window.open(
      "https://drive.google.com/file/d/1bFN0ePASwKAnjfvSeFEyHFJ1DzdDpQfI/view?usp=sharing",
      "_blank"
    );
  }
  return (
    <Reveal>
      <HOME id="home">
        <div className="home-content">
          <Reveal>
            <span className="status">
              <FontAwesomeIcon
                icon={faGlobe}
                className="icon"
              ></FontAwesomeIcon>
              Available For Work
            </span>
          </Reveal>
          <Reveal>
            <h1>
              I am <span id="user-detail-name">Lov</span> Kumar<i>.</i> I Build
              things for the Web<i>.</i>
            </h1>
          </Reveal>
          <Reveal>
            <p id="user-detail-intro">
              I am a Full Stack Web Developer with a strong design sensibility
              and a drive for crafting engaging user interfaces. Proficient in
              HTML, CSS, JavaScript, React, Redux, TypeScript, Express.js,
              Node.js, and MongoDB. Experienced with Chakra UI and Bootstrap
              frameworks.
            </p>
          </Reveal>
          <Reveal>
            <div className="buttons-container">
              <a
                href="/Lov_Kumar_Resume.pdf"
                title="Download Resume"
                id="resume-link-2"
                download
              >
                <Button id="resume-button-2" onClick={openHandler}>
                  <FontAwesomeIcon
                    icon={faDownload}
                    className="icon"
                  ></FontAwesomeIcon>
                  Resume
                </Button>
              </a>
              <a
                href="#projects
              "
              >
                <Button color="var(--secondary)">
                  <FontAwesomeIcon icon={faLaptopFile} className="icon" />
                  Projects
                </Button>
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <div className="home-img-container">
            <img
              src="./luv pic.jpg"
              alt="Profile Image"
              // width={70}
              className="home-img"
            />
            <div className="backdrop"></div>
          </div>
        </Reveal>
      </HOME>
    </Reveal>
  );
};

const HOME = styled.section`
  min-height: 75vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  /* border: 1px solid red; */
  gap: 1rem;
  margin-top: 30px;

  .home-content {
    width: 60%;
    text-align: left;
    .status {
      text-transform: uppercase;
      letter-spacing: 2px;
      color: var(--primary);
      opacity: 0.8;
      margin-bottom: 2rem;
    }
    h1 {
      /* background-color:red; */
      line-height: 1.1;
      font-weight: lighter;
      margin-bottom: 1rem;
      span {
        color: var(--primary);
      }
    }
    p {
      opacity: 0.9;
      max-width: 500px;
      line-height: 1.6;
      letter-spacing: 1px;
      margin-bottom: 4rem;
    }
    .buttons-container {
      display: flex;
      gap: 1rem;
    }
  }
  .home-img-container {
    margin-top: 5rem;
    display: flex;
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    /* border: 1px solid red; */
    z-index: 0;
    .home-img {
      margin-top: -2rem;
      width: 50%;
      border-radius: 1rem;
      /* border: 4px solid var(--primary); */
      overflow: hidden;
      object-fit: cover;
      position: relative;
      /* top: -10%; */
      z-index: 10;
    }
    .backdrop {
      position: absolute;
      width: 80%;
      height: 80%;
      bottom: 0;
      background-color: var(--primary);
      z-index: 8;
      border-radius: 1rem;
      box-shadow: 0 1px 5px var(--primary);
    }
    .backdrop::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 10%;
      left: 10%;
      border: 2px solid var(--primary);
      z-index: 3;
      border-radius: 1rem;
    }
  }
  &::after {
    font-family: "Montserrat", serif;
    letter-spacing: 4px;
    content: "LovKumar";
    position: absolute;
    top: 60%;
    right: -38%;
    opacity: 0.3;
    transform: translateY(-50%) rotate(90deg);
    /* background-color: red; */
    color: #3f3f3f !important;
    /* -webkit-text-stroke: 2px var(--secondary); */
    font-weight: 900;
    /* text-stroke: 2px var(--secondary); */
    font-size: 6.5rem;
    background-blend-mode: hard-light;
  }
  @media screen and (max-width: 1200px) {
    padding-inline: 1rem;
    .home-content {
      width: 75%;
      p {
        font-size: var(--p);
        max-width: 600px;
      }
    }
    .home-img-container {
      margin-top: -5rem;
      .home-img {
        margin-top: 0rem;
        width: 70%;
      }
    }
  }

  @media screen and (max-width: 850px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 3rem;
    .home-content {
      margin-bottom: 5rem;
      width: 100%;
      p {
        margin-bottom: 2rem;
      }
    }
    .home-img-container {
      margin-top: -5rem;
      .home-img {
        margin-top: 0rem;
        width: 70%;
      }
    }
    &::after {
      display: flex;
      font-family: "Montserrat", serif;
      letter-spacing: 4px;
      content: "";
      position: absolute;
      top: 60%;
      right: -50%;
      opacity: 0.3;
      transform: translateY(-50%) rotate(90deg);
      /* background-color: red; */
      color: #3f3f3f !important;
      /* -webkit-text-stroke: 2px var(--secondary); */
      font-weight: 900;
      /* text-stroke: 2px var(--secondary); */
      font-size: 6.5rem;
      background-blend-mode: hard-light;
    }
  }
  @media screen and (max-width: 400px) {
    min-height: 60vh;
    flex-direction: column-reverse;
    gap: 1rem;
    justify-content: center;
    .home-content {
      margin-bottom: 0rem;
      text-align: center !important;
      width: 100%;
      p {
        margin-bottom: 1rem;
      }
      .buttons-container {
        justify-content: center;
        gap: 1rem;
      }
    }
    .home-img-container {
      margin-top: -2rem;
      margin-bottom: 2rem;
      margin-inline: 0;
      padding: 0;
      .home-img {
        margin-top: 2rem;
        width: 60%;
      }
    }
  }
`;
