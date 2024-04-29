import React from "react";
import styled from "styled-components";
import { Reveal } from "./common/Reveal";
import "font-awesome/css/font-awesome.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Education.css";
import "../styles/contact.css";

export const Experience = () => {
  return (
    <ABOUT id="experience" className="education section">
      <Reveal delay={0.25}>
        <h2>Internship</h2>
      </Reveal>

      <Reveal delay={0.25}>
        <div className="Education-container">
          <Container id="Education-container">
            <Row>
              <div className="timeline-edu">
                <div className="container-edu left-container-edu">
                  <div className="imgdiv">
                    {/* <img src={masaiSchoollogo} alt="" /> */}
                  </div>
                  <div className="text-box-edu">
                    <div
                      className="namelogo"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "20px",
                      }}
                    >
                      <div>
                        <h4
                          style={{
                            fontFamily: '"Montserrat", serif',
                            fontWeight: "500",
                          }}
                        >
                          Full stack web developer
                        </h4>
                        <small style={{ fontWeight: "600" }}>
                          Feb 2024 -- Apr 2024
                        </small>
                      </div>
                    </div>
                    <hr />
                    <div
                      className="namelogo"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <p style={{ fontWeight: "600", fontSize: "16px" }}>
                          Comapny : Creware Technologies Pvt Ltd.
                        </p>
                        <p>Address : Bengaluru, Karnataka</p>
                      </div>
                      <img
                        src="https://media.licdn.com/dms/image/C560BAQGaVHI-0pojUw/company-logo_100_100-alternative/0/1630647346346/creware_technologies_pvt_ltd_logo?e=1720656000&v=beta&t=kiCkvoyAzrXIQjYPCPNC4EVS9Ux22l9wjhpnW9Il_04"
                        alt=""
                        width={"20%"}
                      />
                    </div>

                    <span className="left-container-arrow"></span>
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

const ABOUT = styled.section``;
