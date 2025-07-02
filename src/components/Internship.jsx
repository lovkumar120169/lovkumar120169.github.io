import React from "react";
import styled from "styled-components";
import { Reveal } from "./common/Reveal";
import "font-awesome/css/font-awesome.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Education.css";
import "../styles/contact.css";

export const Internship = () => {
  return (
    <ABOUT id="internship" className="education section">
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
                          Full stack developer
                        </h4>
                        <small style={{ fontWeight: "600" }}>
                          Feb 2024 -- July 2024
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
                        src="creware_logo.png"
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
