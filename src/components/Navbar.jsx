import React, { useState, useEffect } from "react";
import { Logo } from "./Logo";
import styled from "styled-components";
import { Button } from "./common/Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faCode,
  faDownload,
  faHouse,
  faLaptopFile,
  faPhoneVolume,
  faBars,
  faBook
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Navbar = () => {


  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 850);




  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 850);
      if (!isSmallScreen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isSmallScreen]);
  function openHandler() {
    window.open(
      "https://drive.google.com/file/d/1VsFJTUVCwRQ-gsaNg8jxtsT-HP-2p2kt/view?usp=sharing",
      "_blank"
    );
  }
  return (
    <NAV id="nav-menu" style={{ display: isSmallScreen ? "flex" : "", alignItems: "center", justifyContent: "space-between" }}>
      {
        isSmallScreen && (
          <Logo />
        )
      }
      {isSmallScreen && (
        <HamburgerIcon onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className="icon" />
        </HamburgerIcon>
      )}
      {isSmallScreen ? (
        <Sidebar isOpen={isMenuOpen} style={{ marginTop: "30px" }}>

          <ul>
            <li>
              <a href="#home" onClick={() => { setMenuOpen(!isMenuOpen) }} className="nav-link home">
                <FontAwesomeIcon icon={faHouse} className="icon" />
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => { setMenuOpen(!isMenuOpen) }} className="nav-link about">
                <FontAwesomeIcon icon={faAddressCard} className="icon" />
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => { setMenuOpen(!isMenuOpen) }} className="nav-link skills">
                <FontAwesomeIcon icon={faCode} className="icon" />
                Skills
              </a>
            </li>
            <li>
              <a href="#education" onClick={() => { setMenuOpen(!isMenuOpen) }} className="nav-link skills">
                <FontAwesomeIcon icon={faBook} className="icon" />
                Education
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => { setMenuOpen(!isMenuOpen) }} className="nav-link projects">
                <FontAwesomeIcon icon={faLaptopFile} className="icon" />
                Projects
              </a>
            </li>
            <li>
              <a href="#github-stat" onClick={() => { setMenuOpen(!isMenuOpen) }} className="nav-link projects">
                <FontAwesomeIcon icon={faGithub} className="icon" />
                My Stats
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => { setMenuOpen(!isMenuOpen) }} className="nav-link contact">
                <FontAwesomeIcon icon={faPhoneVolume} className="icon" />
                Contact
              </a>
            </li>
          </ul>
          <div>
            <ul>
              <li>
                <a
                  href="/Lov_Kumar_Resume.pdf"
                  className="nav-link resume"
                  title="Download Resume"
                  download
                  id="resume-button-1"
                >
                  <Button onClick={openHandler}>
                    <FontAwesomeIcon icon={faDownload} className="icon" />
                    Resume
                  </Button>
                </a>
              </li>
            </ul>
          </div>
        </Sidebar>
      ) : (
        <OriginalNav />
      )}
    </NAV>
  );
};

const NAV = styled.nav`
  width: min(95rem, 100%);
  margin-inline: auto;
  padding: 1rem;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 10000000;
  background-color:#212529;
`;
// #212529
const Sidebar = styled.div`
  display: none;
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 95%;
  background: var(--background-light);
  opacity: 1;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (max-width: 850px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

const OriginalNav = () => {
  function openHandler() {
    window.open(
      "https://drive.google.com/file/d/1VsFJTUVCwRQ-gsaNg8jxtsT-HP-2p2kt/view?usp=sharing",
      "_blank"
    );
  }
  return (
    <ORIGINALNAV>
      <Logo />
      <ul>
        <li>
          <a href="#home" className="nav-link home">
            <FontAwesomeIcon icon={faHouse} className="icon" />
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="nav-link about">
            <FontAwesomeIcon icon={faAddressCard} className="icon" />
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="nav-link skills">
            <FontAwesomeIcon icon={faCode} className="icon" />
            Skills
          </a>
        </li>
        <li>
          <a href="#education" className="nav-link skills">
            <FontAwesomeIcon icon={faBook} className="icon" />
            Education
          </a>
        </li>
        <li>
          <a href="#projects" className="nav-link projects">
            <FontAwesomeIcon icon={faLaptopFile} className="icon" />
            Projects
          </a>
        </li>
        <li>
          <a href="#github-stat" className="nav-link projects">
            <FontAwesomeIcon icon={faGithub} className="icon" />
            My Stats
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-link contact">
            <FontAwesomeIcon icon={faPhoneVolume} className="icon" />
            Contact
          </a>
        </li>
      </ul>
      <div>
        <ul>
          <li>
            <a
              href="/Lov_Kumar_Resume.pdf"
              className="nav-link resume"
              title="Download Resume"
              download
              id="resume-link-1"
            >
              <Button id="resume-button-1" onClick={openHandler}>
                <FontAwesomeIcon icon={faDownload} className="icon" />
                Resume
              </Button>
            </a>
          </li>
        </ul>
      </div>
    </ORIGINALNAV>
  );
};

const ORIGINALNAV = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  z-index: 1000;
  ul {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 850px) {
    display: block;
  }
`;
