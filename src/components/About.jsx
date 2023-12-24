import React from "react";
import styled from "styled-components";
import { Reveal } from "./common/Reveal";
// import { motion } from "framer-motion";
import { Skills } from "./Skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDribbble,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";

export const About = () => {
  return (
    <ABOUT id="about" className="about section">
      <Reveal >
        <h2>Some Things About Me</h2>
      </Reveal>
      <Reveal>
        <div className="about-content">
          <div className="about-card">
            <div className="about-avatar">
              <img src="/luv pic.jpg" alt="Profile" />
            </div>
            <div>
              <h3>Lov Kumar</h3>
              <a
                href="/Resume.pdf"
                className="nav-link resume"
                title="Download Resume"
                id="resume-link-2"
                download
                style={{ display: "none" }}
              >
                Resume
              </a>
              <p id="user-detail-intro">
              As a Full Stack Web Developer, I have a keen eye for design and a passion for creating engaging user experiences.
              <br />
              <br />

              My skill set encompasses HTML, CSS, Javascript, React, Redux, TypeScript, Express.js, Node.js, and MongoDb, including proficiency in frameworks like Chakra UI and Bootstrap.
              <br />
              <br />
              I take pleasure in utilizing modern frameworks like React and Redux to develop dynamic, responsive web applications.
              <br />
              <br />
              I'm always looking for ways to optimize code and improve performance, and I'm committed to staying up-to-date with the latest best practices and industry trends.
              <br />
              <br />
              I'm driven by a desire to create beautiful, intuitive interfaces that make users' lives easier.
              </p>
            </div>
          </div>
          <div className="about-socials">
            <Reveal
              // initial={{ opacity: 0, translateY: 50 }}
              // animate={{ opacity: 1, translateY: 0 }}
              // transition={{ duration: 0.5, delay: 2 }}
              delay={0.5}
              className="social-card"
            >
              <FontAwesomeIcon
                className="icon"
                href=""
                icon={faInstagram}
              ></FontAwesomeIcon>
              <a href="https://www.instagram.com/luv2733/" target="_blank"><p>Instagram</p></a>
            </Reveal>
            <Reveal className="social-card" delay={0.6}>
              <FontAwesomeIcon
                className="icon"
                icon={faGithub}
              ></FontAwesomeIcon>
              <a href="https://github.com/lovkumar120169" target="_blank"><p>Github</p></a>
            </Reveal>
            <Reveal
              className="social-card"
              delay={0.7}
            >
              <FontAwesomeIcon
                className="icon"
                icon={faFacebook}
              ></FontAwesomeIcon>
              <a href="https://www.facebook.com/profile.php?id=100016110045277" target="_blank"><p>Facebook</p></a>
            </Reveal>
            <Reveal
              // initial={{ opacity: 0, translateY: 50 }}
              // animate={{ opacity: 1, translateY: 0 }}
              // transition={{ duration: 0.5, delay: 2.6 }}
              className="social-card"
              delay={0.8}
            >
              <FontAwesomeIcon
                className="icon"
                icon={faLinkedinIn}
              ></FontAwesomeIcon>
              <a href="https://www.linkedin.com/in/lov-kumar-47b232235/" target="_blank"><p>LinkedIn</p></a>
            </Reveal>
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.9}>
        <Skills></Skills>
      </Reveal>
    </ABOUT>
  );
};

const ABOUT = styled.section`
  padding-block: 5rem;
  h2 {
    margin-bottom: 4rem;
  }
  .about-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "about about socials"
      "xp xp socials"
      "skills skills skills";
    gap: 2rem;
    .about-card {
      grid-area: about;
      display: flex;
      gap: 2rem;
      align-items: flex-start;
      justify-content: center;
      background-color: white;
      color: var(--background);
      padding: 2.5rem 1rem;
      border-radius: 0.5rem;
      /* width: 70%; */
      position: relative;
      #user-detail-intro {
        max-width: 80%;
      }
      .about-avatar {
        /* width: 50%; */
        // width: 60%;
        overflow: hidden;
        img {
          width: 20rem;
          height: 10rem;
          border-radius: 50%;
          object-fit: cover;
          object-position: top;
          // background-color: var(--background);
          // box-shadow: 0 -5px 5px var(--primary), 0 -10px 10px var(--primary);
          padding: 0.5rem;
        }
      }
      & > div:nth-of-type(2) {
        /* flex-grow: 1; */
        text-align: left;
      }
      &::after {
        content: "*";
        position: absolute;
        width: 10%;
        height: 10%;
        top: -0rem;
        right: 1rem;
        font-size: 7rem;
        z-index: 100;
        font-style: italic;
        opacity: 0.5;
        line-height: 1.1;
        font-weight: 600;
        color: var(--text);
        /* background-color: red; */
      }
    }
  }
  .about-xp {
    grid-area: xp;
    display: flex;
    gap: 1rem;
    align-items: stretch;
    justify-content: flex-start;
    .xp-card {
      border: 2px solid var(--secondary);
      background-color: var(--background);
      color: var(--secondary);
      padding: 1.5rem;
      border-radius: 0.5rem;
      box-shadow: 0 0 2px var(--background), 0 0 5px var(--background);
      p {
        color: var(--text);
        max-width: 80%;
        margin-inline: auto;
        margin-top: 0.5rem;
      }
    }
  }
  .about-socials {
    grid-area: socials;
    // border: 2px solid var(--secondary);
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
    padding: 2rem;
    /* border: 1px solid red; */
    > div > * {
      /* border: 1px solid blue; */
      display: flex;
      gap: 1rem;
      align-items: center;
    }
    .social-card {
      flex-grow: 0.5;
      p {
        letter-spacing: 2px;
        font-size: 1.5rem;
        text-transform: uppercase;
        font-weight: lighter;
      }
      .icon {
        font-size: 2rem;
        padding: 1rem;
        border: 1px solid var(--secondary);
        border-radius: 0.25rem;
        color: var(--secondary);
      }
    }
  }

  @media screen and (max-width: 1200px) {
    padding-block: 4rem;
    padding-inline: 1rem;
    h2 {
      margin-bottom: 3rem;
    }
    .about-content {
      grid-template-columns: repeat(2, 1fr) min-content;
      gap: 1rem;
      .about-card {
        gap: 2rem;
        padding: 2rem 1rem;
        /* width: 70%; */
        #user-detail-intro {
          max-width: auto;
        }
        .about-avatar {
          /* width: 50%; */
          width: 45%;
          overflow: hidden;
          img {
            aspect-ratio: 1;
            width: 10vw;
            height: 10vw;
            padding: 0.25rem;
          }
        }
        &::after {
          content: "*";
          width: 8%;
          height: 8%;
        }
      }
    }
    .about-socials {
      align-items: stretch;
      justify-content: space-between;
      > div > * {
        gap: 0.5rem;
      }
      .social-card {
        flex-grow: 1;
        p {
          letter-spacing: 1px;
          font-size: 1rem;
        }
        .icon {
          font-size: 1.5rem;
        }
      }
    }
    .about-xp {
      .xp-card {
        padding: 1rem;
        border-radius: 0.5rem;
      }
    }
  }
  @media screen and (max-width: 850px) {
    padding-block: 3rem;
    .about-content {
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas:
        "about about"
        "xp xp"
        "skills skills";
      gap: 1rem;
      .about-card {
        gap: 1rem;
        padding: 1rem;
        .about-avatar {
          img {
            aspect-ratio: 1;
            width: 100%;
            height: 100%;
            padding: 0.25rem;
          }
        }
      }
    }
    .about-socials {
      display: none;
    }
    .about-xp {
      .xp-card {
        padding: 0.75rem;
      }
    }
  }
  @media screen and (max-width: 520px) {
    padding-block: 2rem;
    .about-xp {
      flex-direction: column;

      .xp-card {
        p {
          color: var(--p);
          width: 100%;
        }
      }
    }
  }
  @media screen and (max-width: 400px) {
    padding-block: 1rem;
    .about-card {
      gap: 1rem;
      flex-direction: column;
      justify-content: center;
      align-items: center !important;
      #user-detail-intro {
        max-width: 100% !important;
        width: 100% !important;
        text-align: center !important;
        font-size: var(--p);
        > h3 {
          text-align: center !important;
        }
      }
      & > div:nth-of-type(2) {
        /* flex-grow: 1; */
        text-align: center !important;
      }
      &::after {
        display: none;
      }
    }
  }
`;
