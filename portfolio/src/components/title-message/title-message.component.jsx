import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import Typewriter from "typewriter-effect";

import styled from "styled-components";
export const Title = () => {
  const myRef = document.querySelector(".scrollable-div");
  const TitleMessage = styled.h1`
    color: white;
    position: absolute;
    width: 100%;
    top: 22rem;
    z-index: 1;
    margin-top: -200px;
    text-align: center;
    .title-message-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `;
  return (
    <TitleMessage>
      <div className="title-message-container" style={{padding:"50px"}}>
        <div style={{ height: "300px" }}>
          <div className="scrollable-div">
            <TypeWriterEffect
              textStyle={{
                fontFamily: "Red Hat Display",
                color: "#fff",
                // fontSize: "3vw",
                // fontSize{base:"13vh",md:"8vh",lg:"13vh"}
              }}
              // className="vh-3"
              startDelay={100}
              cursorColor="white"
              text=" Hi, I am"
              typeSpeed={100}
              scrollArea={myRef}
              hideCursorAfterText="true"
            />
            <TypeWriterEffect
              textStyle={{
                fontFamily: "Red Hat Display",
                color: "#fff",
                // fontSize: "5vw",
              }}
              startDelay={1000}
              cursorColor="blue"
              text="Lov kumar"
              typeSpeed={100}
              scrollArea={myRef}
              hideCursorAfterText="true"
            />
          </div>
          <TypeWriterEffect
            textStyle={{
              fontFamily: "Red Hat Display",
              color: "#fff",
              fontWeight: 500,
              // fontSize: "3vw",
            }}
            startDelay={2000}
            cursorColor="#3F3D56"
            multiText={["Learner", "Full-Stack web developer", "Front-end Developer", "MERN Stack Developer",]}
            multiTextDelay={1000}
            typeSpeed={30}
            loop={true}
            autoStart="true"
            deleteSpeed={50}
          />
          {/* <Typewriter
            options={{
              strings: [
                "Front-end Developer",
                "MERN Stack Developer",
                "Full Stack Web Developer",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          /> */}

        </div>


      </div>
    </TitleMessage>
  );
};
