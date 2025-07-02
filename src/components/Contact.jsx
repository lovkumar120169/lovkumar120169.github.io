import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { Reveal } from "./common/Reveal";

export const Contact = () => {
  return (
    <CONTACT id="contact">
      <Reveal>
        <h2>Find Me Here</h2>
      </Reveal>
      <Reveal>
        <h5 style={{ marginTop: "50px", fontFamily: '"Montserrat", serif', fontWeight: "500", fontSize: "20px" }}>
          Liked my work? Want to get in touch? <br />
          You can reach out to me at-
        </h5>
        <br />
        <div >
          <h5>
            <a  href="mailto:lovkumar120169@gmail.com" id="contact-email" className="contact-me">
              <span style={{ fontSize: "30px",marginRight:"-10px" }}>
                {" "}
                <i className="fa fa-envelope"></i>
              </span>
              <span style={{ fontFamily: '"Montserrat", serif', fontWeight: "500", fontSize: "20px", color: "#ccc" }}>lovkumar120169@gmail.com</span>
            </a>
          </h5>

          <h5>
            <a href="tel:8709330353" id="contact-phone" className="contact-me">
              <span style={{ fontSize: "35px",marginRight:"-10px" }}>
                {" "}
                <i className="fa fa-phone"></i>
              </span>
              <span style={{ fontFamily: '"Montserrat", serif', fontWeight: "500", fontSize: "20px", color: "#ccc" }}>+91 8709330353</span>
            </a>
          </h5>
        </div>
        <div className="contact-container">
          <a
            href="https://github.com/lovkumar120169"
            target="_blank"
            id="contact-github"
          >
            <FontAwesomeIcon icon={faGithub} className="contact-icon" />
            <div className="tooltip">Github</div>
          </a>
          <a
            href="https://www.linkedin.com/in/lov-kumar-47b232235/"
            target="_blank"
            id="contact-linkedin"
          >
            <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
            <div className="tooltip">LinkedIn</div>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100016110045277" target="_blank" id="facebook">
            <FontAwesomeIcon icon={faFacebook} className="contact-icon" />
            <div className="tooltip">Facebook</div>
          </a>
          <a
            id="contact-email"
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=lovkumar120169@gmail.com"
            target="_blank"
          >
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <div className="tooltip">Gmail</div>
          </a>
        </div>
        <div className="vl"></div>
      </Reveal>
      {/* <Reveal>
        <input type="text" placeholder="Enter your email here" />
      </Reveal> */}
    </CONTACT>
  );
};

const CONTACT = styled.div`
  padding-top: 5rem;
  padding-inline: 1rem;
  .contact-container {
    padding-block: 3rem;
    display: flex;
    gap: 4rem;
    justify-content: center;
    align-items: center;
  }
  .contact-icon {
    font-size: 3rem;
  }
  input {
    padding: 0.65rem 1rem;
    border-radius: 50px;
    background-color: transparent;
    border: 2px solid var(--text);
    width: min(20rem, 100%);
    color: var(--text);
  }
  @media screen and (max-width: 1100px) {
    padding-top: 3rem;

    .contact-container {
      padding-block: 2rem;
      gap: 2rem;
    }
    .contact-icon {
      font-size: 1.75rem;
    }
  }
  @media screen and (max-width: 850px) {
    padding-top: 2rem;
    .contact-container {
      padding-block: 1rem;
      gap: 1rem;
    }
    .contact-icon {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 850px) {
    .contact-icon {
      font-size: 1rem;
    }
  }
`;
