import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import myImg from "../../assets/img/profile/luv pic.jpg";
import resume from "../../assets/files/resume.pdf";
import Tilt from "react-parallax-tilt";
import { CgFileDocument } from "react-icons/cg";



function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container className="inner-C">
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em",marginBottom:"70px" }}>
              <span className="purple"> About </span> me
            </h1>
            <p className="home-about-body">
              As a Full Stack Web Developer, I have a keen eye for design and a passion for creating engaging user experiences.
              {/* <br /> */}
              <br />I have a strong understanding of HTML, CSS, and
               Javascript. 
              
              <br />
              <br />
              And I enjoy working with modern frameworks like React and Redux to build dynami, &nbsp;
             responsive web applications I'm always looking for ways to optimize code and improve performance,{" "}
               
                  and I'm committed to staying up-to-date with the latest best practices and industry trends.
                
              <br />
              <br />
              I'm driven by a desire to create beautiful, intuitive interfaces that make users' lives easier.
              br
              
              {/* <br />
              Name: <b className="purple">{"  "}Lov kumar</b>
              <br />
              Date of birth:<b className="purple">{"  "}05/05/2001</b>
              <br />
              Address:<b className="purple">{"  "}Bokaro, Jharkhand</b>
              <br />
              Pin code:<b className="purple">{"  "}827013</b>
              <br />
              Phone:<b className="purple">{"  "}+91 8709330353</b> */}
            </p>
          </Col>
          <Col style={{display:"flex",flexDirection:"column",paddingTop:"230px"}} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{ width:"60%",marginTop:"50px",marginBottom:"30px",margin:"auto"}} />
            </Tilt>
            
            <div style={{paddingLeft:"75px"}}>
            <Button  className="m-2"
              variant="success"
              href={resume}
              target="_blank" style={{display:"flex",alignItems:"center",justifyContent:"center",border:"none",padding:"10px",color:"white",backgroundColor:"#292738",borderRadius:"5px",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"74%"}}><CgFileDocument style={{marginBottom:"3px",marginRight:"5px"}}/>
              Resume</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
