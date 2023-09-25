import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import myImg from "../../assets/img/profile/luv pic.jpg";
import resume from "../../assets/files/Lov_Kumar_Resume.pdf";
import Tilt from "react-parallax-tilt";
import { CgFileDocument } from "react-icons/cg";

import "./home2.css"

function Home2() {

  const resumeFileName = 'Lov_Kumar_Resume.pdf'; // Replace with your file name
  const resumeURL =resume;

  const handleButtonClick = () => {
    // Create an anchor element
    const anchor = document.createElement('a');
    anchor.href = resumeURL;
    anchor.target = '_blank';
    anchor.download = resumeFileName;

    // Trigger a click event on the anchor
    anchor.click();
    window.open(resume,"_blank")
  };
  return (
    <div className="home-about-section about section" id="about" >

      <div style={{ paddingTop: "50px",paddingBottom:"50px" }}>
        <h1 style={{ fontSize: "2.6em", marginBottom: "70px" }}>
          <span className="purple"> About me</span>
        </h1>


        <div className="about-main-container">



          <div className="about-dis-div">

            <p className="home-about-body" id="user-detail-intro">
              As a Full Stack Web Developer, I have a keen eye for design and a passion for creating engaging user experiences.
              {/* <br /> */}
              <br />My skill set encompasses HTML, CSS, Javascript, React, Redux, TypeScript, Express.js, Node.js, and MongoDb, including proficiency in frameworks like Chakra UI and Bootstrap.

              <br />
              <br />
              I take pleasure in utilizing modern frameworks like React and Redux to develop dynamic, responsive web applications. <br /> I'm always looking for ways to optimize code and improve performance,{" "}

              and I'm committed to staying up-to-date with the latest best practices and industry trends.

              <br />
              <br />
              I'm driven by a desire to create beautiful, intuitive interfaces that make users' lives easier.
            </p>
          </div>



          <div className="img-div">
            <Tilt>
              <img src={myImg} className="img-fluid home-img" alt="avatar" style={{ width: "100%" }} />
            </Tilt>

            <div>
            <Button
                  className="nav-link resume"
                  id="resume-button-2"
                  // download="Lov_Kumar_Resume.pdf"
                  onClick={handleButtonClick}
                  style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", backgroundColor: "rgb(33,37,41)", border: "none", marginTop: "5px",color:"white",padding:"5px" }}
                >

                  <CgFileDocument style={{ marginBottom: "3px", marginRight: "5px" }} />
                  Resume</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home2;

// { display: "flex", justifyContent: "center", alignItems: "center", width: "100%", backgroundColor: "rgb(33,37,41)", border: "none", marginTop: "5px" }