import React from "react";
import styled from "styled-components";
import GitHubCalendar from "react-github-calendar";
import { Reveal } from "./common/Reveal";
import { Tooltip } from "react-bootstrap";

export const Stats = () => {
  return (
    <STATS>
      <Reveal>
        <h2 id="github-stat">Github Stats</h2>
      </Reveal>
      <div className="github-stats" >

        <GitHubCalendar
          className="react-activity-calendar"
          style={{ margin: "auto", width: "100%" }}
          username="lovkumar120169"
          blockSize={30}
          colorScheme="light"
              fontSize={16}
              blockMargin={10}
              blockRadius={5}
          hideTotalCount
          theme={{
            light: ["#3f3f3f", "#EBC296", "#DFA464", "#D7862F", "#B46D20"],
            dark: ["#3f3f3f", "#10611E", "#1C9030", "#25AF3C", "#69DB7C"],
          }}
        >
          <Tooltip delayShow={20} html />
        </GitHubCalendar>
        <br />
        <br />

        <div className="other-stats">
          <Reveal>
            <div>
              <img
                id="github-streak-stats"
                className="github-streak-stats"
                src="https://github-readme-streak-stats.herokuapp.com/?user=lovkumar120169"
                alt="GitHub Streak"
              />
            </div>
          </Reveal>
       
        </div>
      </div>
    </STATS>
  );
};

const STATS = styled.section`

  padding-block: 5rem;
  .github-stats {
    // width:90%;
    padding-block: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    .calender-container {
      display: flex;
      gap: 1rem;
    }
    .react-activity-calendar {
      width: 100%;
      padding: 1rem;
      /* border-radius:1rem;
      background-color: var(--background-light); */
    }
    .other-stats {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 1200px) {
    padding-block: 3rem;
    .github-stats {
      padding-block: 1rem;
      gap: 1rem;
      .calender-container {
        display: flex;
        gap: 1rem;
      }
      .react-activity-calendar {
        width: 100%;
        padding: 1rem;
      }
    }
  }
  @media screen and (max-width: 850px) {
    padding-block: 2rem;
    margin:auto;
    .other-stats > div {
      width: 40%;
      margin:auto;
    }
  }
  @media screen and (max-width: 500px) {
    padding-block: 1rem;
    margin:auto;
    .other-stats > div {
      width: 90%;
      margin:auto;
    }
  }
`;
