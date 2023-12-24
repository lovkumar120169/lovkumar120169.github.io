import React from "react";
import styled from "styled-components";
import { Reveal } from "./common/Reveal";
import "font-awesome/css/font-awesome.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Education.css"
import "../styles/contact.css"

export const Education = () => {
  return (
    <ABOUT id="education" className="education section">
      <Reveal delay={0.25}>
        <h2>Education</h2>
      </Reveal>

      <Reveal delay={0.25}>
      <div className="Education-container">
            <Container id="Education-container">
                <Row>
                    <div className="timeline-edu">
                        <div className="container-edu left-container-edu">
                            <div className='imgdiv'>
                                {/* <img src={masaiSchoollogo} alt="" /> */}
                            </div>
                            <div className="text-box-edu">
                                <div className='namelogo' style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                                    <div>
                                        <h4 style={{fontFamily:'"Montserrat", serif',fontWeight:"500"}}>Full stack web development (Full-Time)</h4>
                                        <small style={{ fontWeight: "600" }}>Nov 2022  --  Aug 2023</small>
                                    </div>

                                </div>
                                <hr />
                                <div className='namelogo' style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                    <div>
                                        <p style={{ fontWeight: "600", fontSize: "18px" }}>Institute :  Masai School</p>
                                        <p>Address :   Bengaluru, Karnataka</p>
                                    </div>
                                    <img src="/masailogo.png" alt="" width={"20%"} />
                                </div>

                                <span className='left-container-arrow'></span>
                            </div>
                        </div>

                        <div className="container-edu right-continer-edu">
                            <div className='imgdiv'>
                                {/* <img src={culogo} alt="" /> */}
                            </div>
                            <div className="text-box-edu">
                                <div className='namelogo' style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                                    <div>
                                        <h4 style={{fontFamily:'"Montserrat", serif',fontWeight:"500"}}>Master of Computer Application (MCA)</h4>
                                        <small style={{ fontWeight: "600" }}>2022 -- 2024</small>
                                    </div>
                                </div>
                                <hr />
                                <div  className='namelogo' style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <div>
                                        <p style={{ fontWeight: "600", fontSize: "18px" }}>Institute :  Chandigarh University</p>
                                        <p>Address :  Mohali, Punjab</p>
                                    </div>
                                    <img src="culogo.jpeg" alt="" width={"12%"} />

                                </div>

                                <span className='right-container-arrow'></span>
                            </div>
                        </div>

                        <div className="container-edu left-container-edu">
                            <div className='imgdiv'>
                                {/* <img src={citycollegelogo} alt="" /> */}
                            </div>
                            <div className="text-box-edu">
                                <div className='namelogo' style={{ display: "flex", justifyContent: "space-around", alignItems: "center", marginBottom: "20px" }}>
                                    <div>
                                        <h4 style={{fontFamily:'"Montserrat", serif',fontWeight:"500"}}>Bachelor's in Computer Application (BCA)</h4>

                                        <small style={{ fontWeight: "600" }}>2019 -- 2022</small>
                                    </div>
                                </div>
                                <hr />
                                <div className='namelogo' style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <div>
                                        <p style={{ fontWeight: "600", fontSize: "18px" }}>Institute :  Bokaro Steel City College</p>
                                        <p>Address :  Bokaro Steel city, Jharkhand</p>
                                    </div>
                                    <img src="cityclglogo.png" alt="" width={"12%"} />

                                </div>
                                <span className='left-container-arrow'></span>
                            </div>
                        </div>


                    </div>

                </Row>
            </Container>
        </div>
      </Reveal>
      
      
    </ABOUT>
  );
};

 const ABOUT = styled.section`

`;
