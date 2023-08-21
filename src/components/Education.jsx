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
                                <div className='namelogo' style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                                    <div>
                                        <h4>Full stack web development (Full-Time)</h4>
                                        <small style={{ fontWeight: "600" }}>Nov 2022  --  Aug 2023</small>
                                    </div>

                                </div>
                                <hr />
                                <div className='namelogo' style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <div>
                                        <p style={{ fontWeight: "600", fontSize: "18px" }}>Institute :  Masai School</p>
                                        <p>Address :   Bengaluru, Karnataka</p>
                                    </div>
                                    <img src={masaiSchoollogo} alt="" width={"20%"} />
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
                                        <h4>Master of Computer Application (MCA)</h4>
                                        <small style={{ fontWeight: "600" }}>2022 -- 2024</small>
                                    </div>
                                </div>
                                <hr />
                                <div  className='namelogo' style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <div>
                                        <p style={{ fontWeight: "600", fontSize: "18px" }}>Institute :  Chandigarh University</p>
                                        <p>Address :  Mohali, Punjab</p>
                                    </div>
                                    <img src={culogo} alt="" width={"12%"} />

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
                                        <h4>Bachelor's in Computer Application (BCA)</h4>

                                        <small style={{ fontWeight: "600" }}>2019 -- 2022</small>
                                    </div>
                                </div>
                                <hr />
                                <div className='namelogo' style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <div>
                                        <p style={{ fontWeight: "600", fontSize: "18px" }}>Institute :  Bokaro Steel City College</p>
                                        <p>Address :  Bokaro Steel city, Jharkhand</p>
                                    </div>
                                    <img src={citycollegelogo} alt="" width={"12%"} />

                                </div>
                                <span className='left-container-arrow'></span>
                            </div>
                        </div>


                    </div>

                </Row>
            </Container>
        </div>
    )
}
