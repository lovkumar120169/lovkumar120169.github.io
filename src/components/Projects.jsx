import React from "react";
import styled from "styled-components";
import { Reveal } from "./common/Reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlay } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Card } from "./Card";
import "./Project.css"
export const Projects = () => {

  const project = {
    data: [
      {
        name: "Lumora AI — Agentic RAG & AI Research Assistant",
        desc: "Built an intelligent Agentic + Corrective RAG research assistant with hybrid retrieval, web tools, reranking, confidence scoring, citations, and contextual conversations.",
        img: "/LumoraAI.png",
        file: "link",
        demoLink: "https://lumora-ai.streamlit.app/",
        codeLink: "https://github.com/lovkumar120169/Lumora-AI",
        techstack: ["Python", "Streamlit", "LangChain", "Google Gemini", "ChromaDB", "RAG", "SerpAPI"],
      },
      {
        name: "Enterprise AI Agent — AWS Deployment",
        desc: "Built and deployed a production-ready Agentic AI system using Amazon Bedrock, RAG, tool calling, Knowledge Bases, and Guardrails, with automated AWS infrastructure and CI/CD deployment.",
        img: "/EnterpriseAI.png",
        file: "video",
        demoLink: "https://drive.google.com/file/d/1Yp6kBWLuUbPphXRAFhYmbhyyLmFgemWB/view",
        codeLink: "https://github.com/lovkumar120169/Enterprise-AI-Agent",
        techstack: [
          "Python",
          "Streamlit",
          "Amazon Bedrock",
          "RAG",
          "AWS ECS Fargate",
          "Docker",
          "GitHub Actions"
        ],
      },

      {
        name: "D2C Customer Churn Prediction Service",
        desc: "Built a production-ready ML service to predict D2C customer churn using binary classification, delivering real-time churn probability, risk categories, and retention explanations through a FastAPI scoring API.",
        img: "/d2d_customer_churn.png",
        file: "github",
        demoLink: "",
        codeLink: "https://github.com/lovkumar120169/D2C-Customer-Churn-Prediction-Service",
        techstack: ["Python", "Scikit-learn", "FastAPI", "Pydantic", "Docker"],
      },
      {
        name: "Trendz",
        desc: "Creating a fashion e-commerce platform, a clone inspired by Koovs.com. It aims to replicate Koovs.com's success while introducing unique features. With a user-friendly interface, a diverse product catalog.",
        img: "/Trendz.png",
        file: "link",
        demoLink: "https://koovs-clone-trendz.netlify.app/",
        codeLink: "https://github.com/lovkumar120169/Koovs-Clone",
        techstack: ["HTML5", "CSS", "JavaScript", "React", "Json Server", "Chakra UI"],
      },
      {
        name: "Puzzle Innovationz",
        desc: "Clone of Puzzle Innovationz it is a UI/UX design bootcamp for honing design skills, mastering industry tools, and creating exceptional user experiences.",
        img: "/puzzle_innovationz.png",
        file: "link",
        demoLink: "https://65083cd99d357c5da40d9d62--musical-cat-2367fd.netlify.app/",
        codeLink: "https://github.com/lovkumar120169/Puzzle-Innovationz--Clone",
        techstack: ["HTML5", "CSS", "Bootstrap"],
      }
    ],
  };

  return (
    <PROJECTS id="projects">
      <Reveal>
        <h2>Some of my work</h2>
      </Reveal>

      <div>
        {project.data.map((ele, ind) => {
          return (
            <div class="projects__row project-card" key={ind}>
              <div class="projects__row-img-cont">
                <img src={ele.img} alt="Software Screenshot" class="projects__row-img" loading="lazy" />
              </div>
              <div class="projects__row-content">
                <h3 class="projects__row-content-title project-title">{ele.name}</h3>
                <p class="projects__row-content-desc project-description">
                  {ele.desc}
                </p>
                <p class="projects__row-content-desc project-description">
                  <strong style={{ color: "#DFA464" }}>
                    {ele.techstack.map((el, ind) => {
                      if (ele.techstack[ele.techstack.length - 1] == el) {
                        return (
                          <span key={ind}>{el}</span>
                        )
                      } else {
                        return (
                          <span key={ind}>{el} | </span>
                        )
                      }
                    })}
                  </strong>
                </p>

                {/* ✅ Button logic based on file key */}
                <div className="projects-link-bnts">

                  {/* file: "link" — show both Live and Github */}
                  {ele.file === "link" && (
                    <>
                      <div>
                        <a href={ele.demoLink} target="_blank" className="project-deployed-link">
                          <button style={{ fontWeight: "600", padding: "10px 25px", border: "none", backgroundColor: "#DFA464", color: "white", borderRadius: "5px", width: "100%" }}>
                            Live
                          </button>
                        </a>
                      </div>
                      <div>
                        <a href={ele.codeLink} target="_blank" className="project-github-link">
                          <button style={{ fontWeight: "600", padding: "10px 25px", border: "none", backgroundColor: "#DFA464", color: "white", borderRadius: "5px", width: "100%" }}>
                            Github
                          </button>
                        </a>
                      </div>
                    </>
                  )}

                  {/* file: "github" — show only Github button */}
                  {ele.file === "github" && (
                    <div>
                      <a href={ele.codeLink} target="_blank" className="project-github-link">
                        <button style={{ fontWeight: "600", padding: "10px 25px", border: "none", backgroundColor: "#DFA464", color: "white", borderRadius: "5px", width: "100%" }}>
                          Github
                        </button>
                      </a>
                    </div>
                  )}

                  {/* file: "video" — show Video and Github buttons */}
                  {ele.file === "video" && (
                    <>
                      <div>
                        <a href={ele.demoLink} target="_blank" className="project-deployed-link">
                          <button style={{ fontWeight: "600", padding: "10px 25px", border: "none", backgroundColor: "#DFA464", color: "white", borderRadius: "5px", width: "100%" }}>
                            Video
                          </button>
                        </a>
                      </div>
                      <div>
                        <a href={ele.codeLink} target="_blank" className="project-github-link">
                          <button style={{ fontWeight: "600", padding: "10px 25px", border: "none", backgroundColor: "#DFA464", color: "white", borderRadius: "5px", width: "100%" }}>
                            Github
                          </button>
                        </a>
                      </div>
                    </>
                  )}

                </div>
              </div>
            </div>
          )
        })}
      </div>

    </PROJECTS>
  );
};

const PROJECTS = styled.section`
//  padding:"5px";
  padding-block: 5rem;
  h2 {
    margin-bottom: 4rem;
  }
  // hr {
  //   margin-block: 2rem;
  //   border: none;
  // }
  // .development img {
  //   transform: translateY(-100px);
  //   transition: all 0.25s ease-in;
  //   transform-origin: center;
  // }
  // .development .project:hover img {
  //   transform: translateY(-75px);
  // }
  // .projects-container {
  //   display: grid;
  //   grid-template-columns: 1fr;
  //   gap: 1.5rem;
  //   padding-inline: 1rem;
  //   margin-bottom: 4rem;
  //   .project-card.col-2 {
  //     grid-column: span 1;
  //     height: 500px;
  //     img {
  //       object-position: bottom;
  //     }
  //   }
  //   .project-card {
  //     text-align: left;
  //     position: relative;
  //     border-radius: 0.5rem;
  //     overflow: hidden;
  //     background-blend-mode: hard-light;
  //     transition: all 0.5s ease-in;

  //     &:hover .overlay {
  //       top: 0%;
  //     }
  //     &:hover .view-project {
  //       opacity: 1;
  //       /* display:flex; */
  //     }
  //     &:hover .project-content > * {
  //       transform: translateY(-25px) scale(1.05);
  //     }
  //     img {
  //       /* width:250%; */
  //       /* height:150%; */
  //       // object-fit: cover;
  //       width: 100%;
  //       height: 150%;
  //     }
  //     .project-content {
  //       position: absolute;
  //       z-index: 11;
  //       width: 100%;
  //       padding: 1rem;
  //       bottom: 0;

  //       background-color: transparent !important;
  //       background-image: linear-gradient(
  //         to top,
  //         var(--background),
  //         transparent
  //       );
  //       h4 {
  //         color: var(--text);
  //         opacity: 0.9;
  //         margin-bottom: 0.5rem;
  //         transition: all 0.25s ease-in;
  //         transform-origin: left;
  //       }
  //       p {
  //         transition: all 0.25s ease-in;
  //         transform-origin: left;
  //         color: var(--secondary);
  //         margin-bottom: 0.5rem;
  //         max-width: 600px;
  //       }
  //     }
  //     .tags {
  //       position: absolute;
  //       top: 1rem;
  //       left: 1rem;
  //       z-index: 15;
  //       display: flex;
  //       align-items: center;
  //       flex-wrap: wrap;
  //       gap: 1rem;
  //       .tag {
  //         background-color: var(--background-lightest);
  //         padding: 0.35rem 0.75rem;
  //         border-radius: 50px;
  //         font-size: 0.75rem;
  //         color: var(--primary);
  //         /* text-transform:uppercase; */
  //         letter-spacing: 1px;
  //       }
  //     }
  //     .overlay {
  //       position: absolute;
  //       inset: 0;
  //       top: 80%;
  //       /* background-blend-mode: hard-light; */
  //       box-shadow: 0 0 10px 5px var(--background-light),
  //         0 0 20px 10px var(--background-light),
  //         0 0 40px 15px var(--background-light),
  //         0 0 80px 20px var(--background-light);
  //       background-color: var(--background-light);
  //       background-image: linear-gradient(
  //         to top,
  //         var(--background-light),
  //         var(--background-lightest)
  //       );
  //       opacity: 0.2;
  //       z-index: 10;
  //       transition: all 0.25s ease-in;
  //     }
  //     .overlay:last-of-type {
  //       background-color: var(--background-lightest);
  //       top: 50%;
  //       opacity: 0.1;
  //     }
  //     .view-project {
  //       /* transition-delay: 1s; */
  //       opacity: 0;
  //       position: absolute;
  //       z-index: 12;
  //       color: var(--text);
  //       inset: 0;
  //       display: flex;
  //       align-items: center;
  //       justify-content: center;
  //       gap: 2rem;
  //       transition: all 0.25s ease-in;
  //       a:first-of-type {
  //         transform: rotate(-45deg);
  //       }
  //       a:last-of-type {
  //         > * {
  //           margin-left: 0.3rem;
  //         }
  //       }
  //       /* opacity: 0.5; */
  //       /* display: none; */

  //       a {
  //         background-color: var(--background-light);
  //         font-size: var(--h2);
  //         /* aspect-ratio: 1; */
  //         padding: 1.5rem;
  //         width: 6rem;
  //         height: 6rem;
  //         border-radius: 50%;
  //         display: grid;
  //         place-items: center;
  //         color: var(--primary);
  //         font-weight: lighter;
  //         /* transition: none; */
  //         transition-duration: 0.25s;
  //         &:hover {
  //           transition-delay: none;
  //           color: var(--primary);
  //           filter: none;
  //         }
  //       }
  //       a::before,
  //       a::after {
  //         color: var(--primary) !important;

  //         content: "";
  //         display: none;
  //         color: transparent;
  //       }
  //     }
  //   }
  //   .project-card::before {
  //     position: absolute;
  //     content: "";
  //     inset: 0;
  //     background-color: var(--background-lightest);
  //     opacity: 0.1;
  //   }
  //   .project-card:first-of-type {
  //     border: 4px solid var(--primary);
  //   }
  // }
  // @media screen and (max-width: 1100px) {
  //   h2 {
  //     margin-bottom: 3rem;
  //   }
  //   hr {
  //     margin-block: 1.5rem;
  //     border: none;
  //   }

  //   .projects-container {
  //     display: grid;
  //     grid-template-columns: 1fr;
  //     gap: 1.5rem;
  //     padding-inline: 1rem;
  //     margin-bottom: 4rem;
  //     .project-card.col-2 {
  //       grid-column: span 1;
  //       height: 500px;
  //       img {
  //         object-position: bottom;
  //       }
  //     }
  //     .project-card {
  //       img {
  //         height: 120%;
  //         object-position: top;
  //       }
  //       .project-content {
  //         z-index: 8;
  //         p {
  //           max-width: 500px;
  //         }
  //       }
  //       .tags {
  //         z-index: 9;
  //       }
  //       .overlay {
  //         z-index: 8;
  //       }
  //       .view-project {
  //         opacity: 1;
  //         /* display: none; */
  //         z-index: 9;
  //         a {
  //           padding: 1.25rem;
  //           width: 5rem;
  //           height: 5rem;
  //         }
  //       }
  //     }
  //     .project-card:first-of-type {
  //       border: 3px solid var(--primary);
  //     }
  //   }
  // }
  // @media screen and (max-width: 850px) {
  //   h2 {
  //     margin-bottom: 2rem;
  //   }
  //   .projects-container {
  //     gap: 1rem;
  //     margin-bottom: 2rem;
  //     .project-card.col-2 {
  //       // height: 400px;
  //       img {
  //         object-position: top;
  //       }
  //     }
  //     .project-card {
  //       img {
  //         height: 120%;
  //         object-position: top;
  //       }
  //       .project-content {
  //         z-index: 8;
  //         p {
  //           max-width: 300px;
  //           font-size: var(--p);
  //         }
  //       }
  //       .tags {
  //         z-index: 9;
  //       }
  //       .overlay {
  //         z-index: 8;
  //       }
  //       .view-project {
  //         z-index: 9;
  //         gap: 1rem;
  //         a {
  //           padding: 1rem;
  //           width: 3rem;
  //           height: 3rem;
  //         }
  //         a:last-of-type {
  //           > * {
  //             margin-left: 0rem;
  //           }
  //         }
  //       }
  //     }
  //     .project-card:first-of-type {
  //       border: 3px solid var(--primary);
  //     }
  //   }
  // }

  // @media screen and (max-width: 850px) {
  // }
`;
