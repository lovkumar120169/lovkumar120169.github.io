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
        <h2>Experience</h2>
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
                          Full stack developer
                        </h4>
                        <small style={{ fontWeight: "600" }}>
                          Nov 2024 -- Present
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
                          Comapny : Bhavatah Soft Tech LLP.
                        </p>
                        <p>Address : Uttar Pradesh, India</p>
                      </div>
                      <img
                        src="company-main-logo.webp"
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
