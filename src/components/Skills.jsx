import React from "react";
import styled from "styled-components";
import Ticker from "framer-motion-ticker";

export const Skills = () => {
  return (
    <SKILLS id="skills">
      <h3>My Stack</h3>
      <div className="skills-row">
        <h4>Skills</h4>
        <Ticker duration={60} direction={-1}>
          <div className="skills-card">
            <img src="/HTML.svg" className="skills-card-img" />
            <p className="skills-card-name">HTML</p>
          </div>
          <div className="skills-card">
            <img src="/CSS.svg" className="skills-card-img" />
            <p className="skills-card-name">CSS</p>
          </div>
          <div className="skills-card">
            <img src="/JS.svg" className="skills-card-img" />
            <p className="skills-card-name">JAVASCRIPT</p>
          </div>

          <div className="skills-card">
            <img src="/Mongo.svg" className="skills-card-img" />
            <p className="skills-card-name">MongoDB</p>
          </div>
          <div className="skills-card">
            <img src="/Typescript.svg" className="skills-card-img" />
            <p className="skills-card-name">TypeScript</p>
          </div>
          <div className="skills-card">
            <img src="/React.svg" className="skills-card-img" />
            <p className="skills-card-name">REACT</p>
          </div>
          <div className="skills-card">
            <img src="/Mongoose.svg" className="skills-card-img" />
            <p className="skills-card-name">Mongoose</p>
          </div>
          <div className="skills-card">
            <img src="/Express.svg" className="skills-card-img" />
            <p className="skills-card-name">EPXRESS</p>
          </div>
          <div className="skills-card">
            <img src="/Node.svg" className="skills-card-img" />
            <p className="skills-card-name">NODEJS</p>
          </div>
          <div className="skills-card">
            <img src="/logos_redux.svg" className="skills-card-img" />
            <p className="skills-card-name">REDUX</p>
          </div>
          <div className="skills-card">
            <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" className="skills-card-img" />
            <p className="skills-card-name">BootStrap</p>
          </div>
        </Ticker>
      </div>
      <div className="skills-row">
        <Ticker duration={60} direction={1} className="container">
          <div className="skills-card">
            <img src="https://yt3.ggpht.com/a/AATXAJyipXRhLYbGmgiIFejFligw7RnbiBhI9ahUxQ=s900-c-k-c0xffffffff-no-rj-mo" className="skills-card-img" />
            <p className="skills-card-name">Postman</p>
          </div>
          <div className="skills-card">
            <img src="/GIT.svg" className="skills-card-img" />
            <p className="skills-card-name">GIT</p>
          </div>
          <div className="skills-card">
            <img src="/Figma.png" className="skills-card-img" />
            <p className="skills-card-name">Figma</p>
          </div>
          <div className="skills-card">
            <img src="/NPM.png" className="skills-card-img" />
            <p className="skills-card-name">NPM</p>
          </div>
          <div className="skills-card">
            <img src="/VSCode.png" className="skills-card-img" />
            <p className="skills-card-name">V.S. Code</p>
          </div>
        </Ticker>
        <h4>Tools</h4>
      </div>
 

      <div className="skills-row">
        <h4>Platforms</h4>
        <Ticker duration={60} direction={-1}>
          <div className="skills-card">
            <img src="/vercel.svg" className="skills-card-img" />
            <p className="skills-card-name">Versal</p>
          </div>
          <div className="skills-card">
            <img src="/netlify.svg" className="skills-card-img" />
            <p className="skills-card-name">Netlify</p>
          </div>
          <div className="skills-card">
            <img src="/github.svg" className="skills-card-img" />
            <p className="skills-card-name">Github Pages</p>
          </div>

          <div className="skills-card">
            <img src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjIwLjE3OCIgdmlld0JveD0iMCAwIDc3Ljc4OCAyMC4xNzgiIHdpZHRoPSI3Ny43ODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzIzMmE1NSI+PHBhdGggZD0ibTM5OS43ODEgMjIyLjQzN2E3LjM0IDcuMzQgMCAwIDAgLTMuNjE4Ljk1MXYxMC41NTdhLjU0OC41NDggMCAwIDEgLS41MjUuNTUzaC0yLjQxMmEuNTQ4LjU0OCAwIDAgMSAtLjUyNS0uNTUzdi0xMy43MzZhLjUzMy41MzMgMCAwIDEgLjUyNS0uNTI1aDIuMjg1YS41MzMuNTMzIDAgMCAxIC41MjUuNTI1di41NTNhNi4xODggNi4xODggMCAwIDEgMy43Ni0xLjI2My41MzMuNTMzIDAgMCAxIC41MjUuNTI1djEuODg3YS41NTUuNTU1IDAgMCAxIC0uNTQuNTI2eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM5Mi43IC0yMTQuNTM0KSIvPjxwYXRoIGQ9Im00NjcuMzMzIDIyOC4zaC04LjU1NnYuMDg1YzAgMS41MTguNjI0IDMuMzM1IDMuMTUgMy4zMzUgMS42MTgtLjAxNCAzLjIyMS0uMSA0LjgyNS0uMjdoLjA4NWMuMjcgMCAuNDY4LjEyOC40NjguNHYxLjczMWMwIC40MjYtLjA4NS42MS0uNTUzLjY4MWEyMy41MTkgMjMuNTE5IDAgMCAxIC01LjA5NC40NGMtMi42MjUgMC02LjM1Ny0xLjQxOS02LjM1Ny02LjU4NHYtMS45NDRjMC00LjEgMi4yODUtNi42NjkgNi4zLTYuNjY5IDQuMDQ0IDAgNi4yNDQgMi43NTMgNi4yNDQgNi42Njl2MS40NzZjLjAxMy40MjEtLjE0NS42NS0uNTEyLjY1em0tMi45NjYtMi41NjhjMC0yLjA0My0xLjEzNS0zLjIzNS0yLjc1My0zLjIzNXMtMi44MSAxLjE0OS0yLjgxIDMuMjM1di4xaDUuNTYyeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ0Ni40MTcgLTIxNC41MzQpIi8+PHBhdGggZD0ibTU3Ni4yOTMgMjM0LjU3aC0yLjQxMmEuNTQ4LjU0OCAwIDAgMSAtLjUyNS0uNTUzdi04LjU0MmMwLTIuMjg1LS4yMTMtMi45MzctMi4yMjgtMi45MzdhNi42NDggNi42NDggMCAwIDAgLTIuOTY2Ljk1MXYxMC41NTdhLjU0OS41NDkgMCAwIDEgLS41MjUuNTUzaC0yLjQxMmEuNTQ5LjU0OSAwIDAgMSAtLjUyNS0uNTUzdi0xMy43MzdhLjUzMy41MzMgMCAwIDEgLjUyNS0uNTI1aDIuMjg1YS41MzMuNTMzIDAgMCAxIC41MjUuNTI1di41NTNhNi44NTIgNi44NTIgMCAwIDEgNC4yNTctMS4yNjNjMy43NzQgMCA0LjU0MSAyLjU0IDQuNTQxIDUuODc1djguNTU2YS41NjkuNTY5IDAgMCAxIC0uNTQuNTR6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTQwLjI5NCAtMjE0LjYxOSkiLz48cGF0aCBkPSJtNjgyLjA1IDIwNGEyMi4xNiAyMi4xNiAwIDAgMSAtNS4yNzkuNjgxYy00LjIyOCAwLTYuMjcyLTIuNS02LjI3Mi02LjU4NHYtMi4wMjljMC00LjEgMi4wNDMtNi41ODQgNi4yNzItNi41ODRhMjEuMzcxIDIxLjM3MSAwIDAgMSAyLjUyNi4xODR2LTQuNjRhLjUzMy41MzMgMCAwIDEgLjUyNS0uNTI1aDIuNDEyYS41MzMuNTMzIDAgMCAxIC41MjUuNTI1djE4LjI3MmMuMDAxLjM3LS4xMTMuNTQxLS43MDkuN3ptLTIuNzUtMTEuNTExYTIxLjM4NSAyMS4zODUgMCAwIDAgLTIuNTI2LS4xODRjLTIuMjU2IDAtMi44MDkgMS42LTIuODA5IDMuNzZ2Mi4wMTVjMCAyLjE1Ny41NTMgMy43NiAyLjgwOSAzLjc2YTE2LjY3NiAxNi42NzYgMCAwIDAgMi41MjYtLjE4NHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MzEuMDgxIC0xODQuNSkiLz48cGF0aCBkPSJtNzg5LjczMyAyMjguM2gtOC41NTZ2LjA4NWMwIDEuNTE4LjYyNCAzLjMzNSAzLjE1IDMuMzM1IDEuNjE4LS4wMTQgMy4yMjEtLjEgNC44MjUtLjI3aC4wODVjLjI1NSAwIC40NjguMTI4LjQ2OC40djEuNzMxYzAgLjQyNi0uMDg1LjYxLS41NTMuNjgxYTIzLjUxOSAyMy41MTkgMCAwIDEgLTUuMDk0LjQ0Yy0yLjYyNSAwLTYuMzU3LTEuNDE5LTYuMzU3LTYuNTg0di0xLjk0NGMwLTQuMSAyLjI4NS02LjY2OSA2LjMtNi42NjkgNC4wNDQgMCA2LjI0NCAyLjc1MyA2LjI0NCA2LjY2OXYxLjQ3NmMuMDEzLjQyMS0uMTQ1LjY1LS41MTIuNjV6bS0yLjk2Ni0yLjU2OGMwLTIuMDQzLTEuMTM1LTMuMjM1LTIuNzUzLTMuMjM1cy0yLjgxIDEuMTQ5LTIuODEgMy4yMzV2LjFoNS41NjJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzIzLjA3IC0yMTQuNTM0KSIvPjxwYXRoIGQ9Im04OTQuMjgxIDIyMi40MzdhNy4zMzkgNy4zMzkgMCAwIDAgLTMuNjE4Ljk1MXYxMC41NTdhLjU0OC41NDggMCAwIDEgLS41MjUuNTUzaC0yLjQxMmEuNTQ5LjU0OSAwIDAgMSAtLjUyNS0uNTUzdi0xMy43MzZhLjUzMy41MzMgMCAwIDEgLjUyNS0uNTI1aDIuMjg0YS41MzMuNTMzIDAgMCAxIC41MjUuNTI1di41NTNhNi4xODggNi4xODggMCAwIDEgMy43Ni0xLjI2My41MzMuNTMzIDAgMCAxIC41MjUuNTI1djEuODg3YS41NDYuNTQ2IDAgMCAxIC0uNTM5LjUyNnoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04MTcuMDMyIC0yMTQuNTM0KSIvPjwvZz48L3N2Zz4K" className="skills-card-img" />
            <p className="skills-card-name">Render</p>
          </div>

        
        </Ticker>
      </div>
      
    </SKILLS>
  );
};

const SKILLS = styled.section`
  grid-area: skills;
  background: white;
  border-radius: 0.5rem;
  padding: 2rem 1rem;
  h3 {
    color: black;
    margin-bottom: 1rem;
  }
  h4 {
    color: black;
  }
  .skills-row {
    width: 80%;
    margin-inline: auto;
    padding: 0.5rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    .skills-card {
      // background: var(--background-lightest);
      color:black;
      border-left:0.5px solid rgba(0, 0, 0, 0.203);
      font-weight:500;
      padding: 0.75rem;
      // border-radius: 0.75rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-inline: 1rem;
      img {
        width: 3rem;
        height: 3rem;
        object-fit: contain;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    padding: 1rem;
    .skills-row {
      width: 90%;
      .skills-card {
        img {
          width: 2.5rem;
          height: 2.5rem;
        }
      }
    }
  }
  @media screen and (max-width: 850px) {
    .skills-row {
      width: 100%;
      .skills-card {
        img {
          width: 2rem;
          height: 2rem;
        }
      }
    }
  }
  00px) {
    .skills-row {
      .skills-card {
        border-radius: 0.25rem;
        img {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
`;
