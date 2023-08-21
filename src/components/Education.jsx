import React from 'react'
// import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./Contact.css";
import { AiFillGithub, AiFillInstagram, AiOutlineFacebook } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import masaiSchoollogo from "../assets/img/Education/masailogo.png";
import citycollegelogo from "../assets/img/Education/cityclglogo.png";
import culogo from "../assets/img/Education/culogo.jpeg";

import "./Education.css"
export const Education = () => {
    return (
        <div className="Education-container" style={{ width: "100%" }}>
            <Container id="Education-container">
                <Row>
                    <h1 className="text-center font-details-b pb-4">Education</h1>
                    <div className="timeline-edu">
                        <div className="container-edu left-container-edu">
                            <div className='imgdiv'>
                                {/* <img src={masaiSchoollogo} alt="" /> */}
                            </div>
                            <div className="text-box-edu">
                                <div className='namelogo' style={{ display: "flex", justifyContent: "space-between", alignItems: "center",marginBottom:"20px" }}>
                                    <div>
                                        <h3>Masai School</h3>
                                        <small style={{fontWeight:"600"}}>Nov 2022  --  Aug 2023</small>
                                    </div>
                                    <img src={masaiSchoollogo} alt="" width={"12%"} />
                                </div>
                                <hr />
                                <p>Address :   Bengaluru, Karnataka</p>
                                <p>Course :  Full stack web development (Full-Time)</p>
                                <span className='left-container-arrow'></span>
                            </div>
                        </div>

                        <div className="container-edu right-continer-edu">
                            <div className='imgdiv'>
                                {/* <img src={culogo} alt="" /> */}
                            </div>
                            <div className="text-box-edu">
                                <div className='namelogo' style={{ display: "flex", justifyContent: "space-between", alignItems: "center",marginBottom:"20px" }}>
                                    <div>
                                        <h3>Chandigarh University</h3>
                                        <small style={{fontWeight:"600"}}>2022 -- 2024</small>
                                    </div>
                                    <img src={culogo} alt="" width={"12%"} />
                                </div>
                                <hr />
                                <p>Address :  Mohali, Punjab</p>
                                <p>Course :  Master of Computer Application(MCA)</p>
                                <span className='right-container-arrow'></span>
                            </div>
                        </div>

                        <div className="container-edu left-container-edu">
                            <div className='imgdiv'>
                                {/* <img src={citycollegelogo} alt="" /> */}
                            </div>
                            <div className="text-box-edu">
                                <div className='namelogo' style={{ display: "flex", justifyContent: "space-around", alignItems: "center",marginBottom:"20px" }}>
                                    <div>
                                        <h3>Bokaro Steel City College</h3>

                                        <small style={{fontWeight:"600"}}>2019 -- 2022</small>
                                    </div>
                                    <img src={citycollegelogo} alt="" width={"12%"} />
                                </div>
                                <hr />
                                <p>Address :  Bokaro Steel city, Jharkhand</p>
                                <p>Course :  Bachelor's in Computer Application (BCA)</p>
                                <span className='left-container-arrow'></span>
                            </div>
                        </div>


                    </div>

                </Row>
            </Container>
        </div>
    )
}
