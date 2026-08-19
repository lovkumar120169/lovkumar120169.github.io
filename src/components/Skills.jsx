import React from "react";
import styled from "styled-components";
import Ticker from "framer-motion-ticker";

export const Skills = () => {
  return (
    <SKILLS id="skills">
      <h3>My Stack</h3>


      {/* ================= DEVELOPMENT ================= */}

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
            <p className="skills-card-name">React</p>
          </div>

          <div className="skills-card">
            <img src="/React.svg" className="skills-card-img" />
            <p className="skills-card-name">React Native</p>
          </div>

          <div className="skills-card">
            <img src="/Mongoose.svg" className="skills-card-img" />
            <p className="skills-card-name">Mongoose</p>
          </div>

          <div className="skills-card">
            <img src="/Express.svg" className="skills-card-img" />
            <p className="skills-card-name">EXPRESS</p>
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
            <img
              src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
              className="skills-card-img"
            />
            <p className="skills-card-name">BootStrap</p>
          </div>

          <div className="skills-card">
            <img
              src="https://img.stackshare.io/service/12421/rzylUjaf_400x400.jpg"
              className="skills-card-img"
            />
            <p className="skills-card-name">Chakra UI</p>
          </div>

          {/* New Development Skills */}

          <div className="skills-card">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              className="skills-card-img"
            />
            <p className="skills-card-name">PYTHON</p>
          </div>

          <div className="skills-card">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
              className="skills-card-img"
            />
            <p className="skills-card-name">SQL</p>
          </div>

          <div className="skills-card">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
              className="skills-card-img"
            />
            <p className="skills-card-name">POSTGRESQL</p>
          </div>

        </Ticker>
      </div>


      {/* ================= MACHINE LEARNING ================= */}

      <div className="skills-row">

        <h4>Machine Learning</h4>

        <Ticker duration={60} direction={1} className="container">

          <div className="skills-card">
            <img
              src="SK_learn.png"
              className="skills-card-img"
            />
            <p className="skills-card-name">SCIKIT-LEARN</p>
          </div>

          <div className="skills-card">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
              className="skills-card-img"
            />
            <p className="skills-card-name">TENSORFLOW</p>
          </div>

          <div className="skills-card">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
              className="skills-card-img"
            />
            <p className="skills-card-name">PYTORCH</p>
          </div>

          <div className="skills-card">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
              className="skills-card-img"
            />
            <p className="skills-card-name">PANDAS</p>
          </div>

          <div className="skills-card">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
              className="skills-card-img"
            />
            <p className="skills-card-name">NUMPY</p>
          </div>

          <div className="skills-card">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg"
              className="skills-card-img"
            />
            <p className="skills-card-name">OPENCV</p>
          </div>

          <div className="skills-card">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg"
              className="skills-card-img"
            />
            <p className="skills-card-name">MATPLOTLIB</p>
          </div>

          {/* Concepts */}

          <div className="skills-card">
            <img
              src="/EDA.png"
              className="skills-card-img"
            />
            <p className="skills-card-name">EDA</p>
          </div>

          <div className="skills-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png"
              className="skills-card-img"
            />
            <p className="skills-card-name">FEATURE ENGINEERING</p>
          </div>

          <div className="skills-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3067/3067256.png"
              className="skills-card-img"
            />
            <p className="skills-card-name">MODEL EVALUATION</p>
          </div>

          <div className="skills-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/8637/8637101.png"
              className="skills-card-img"
            />
            <p className="skills-card-name">DEEP LEARNING</p>
          </div>

          <div className="skills-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2103/2103633.png"
              className="skills-card-img"
            />
            <p className="skills-card-name">PCA</p>
          </div>

        </Ticker>

      </div>


      {/* ================= AI & GENERATIVE AI ================= */}

      <div className="skills-row">

        <h4>AI & Generative AI</h4>

        <Ticker duration={60} direction={-1} className="container">

          <div className="skills-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/8637/8637101.png"
              className="skills-card-img"
            />
            <p className="skills-card-name">GENERATIVE AI</p>
          </div>

          <div className="skills-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2103/2103633.png"
              className="skills-card-img"
            />
            <p className="skills-card-name">LLMs</p>
          </div>

          <div className="skills-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1006/1006363.png"
              className="skills-card-img"
            />
            <p className="skills-card-name">RAG</p>
          </div>

          <div className="skills-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
              className="skills-card-img"
            />
            <p className="skills-card-name">AGENTIC AI</p>
          </div>

          <div className="skills-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1006/1006363.png"
              className="skills-card-img"
            />
            <p className="skills-card-name">CORRECTIVE RAG</p>
          </div>

          <div className="skills-card">
            <img
              src="/nlp_logo.webp"
              className="skills-card-img"
            />
            <p className="skills-card-name">NLP</p>
          </div>

          <div className="skills-card">
            <img
              src="/cv_logo_1.jpg"
              className="skills-card-img"
            />
            <p className="skills-card-name">COMPUTER VISION</p>
          </div>

          <div className="skills-card">
            <img
              src="/hugging_face_logo.png"
              className="skills-card-img"
            />
            <p className="skills-card-name">HUGGING FACE</p>
          </div>

          <div className="skills-card">
            <img
              src="/langchain_logo.webp"
              className="skills-card-img"
            />
            <p className="skills-card-name">LANGCHAIN</p>
          </div>

          <div className="skills-card">
            <img
              src="/langchain_logo.webp"
              className="skills-card-img"
            />
            <p className="skills-card-name">LANGGRAPH</p>
          </div>

          <div className="skills-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/8637/8637101.png"
              className="skills-card-img"
            />
            <p className="skills-card-name">TRANSFORMERS</p>
          </div>

          <div className="skills-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1006/1006363.png"
              className="skills-card-img"
            />
            <p className="skills-card-name">PROMPT ENGINEERING</p>
          </div>

          <div className="skills-card">
            <img
              src="/openai_logo.svg"
              className="skills-card-img"
            />
            <p className="skills-card-name">OPENAI API</p>
          </div>

          <div className="skills-card">
            <img
              src="/gemini_logo.webp"
              className="skills-card-img"
            />
            <p className="skills-card-name">GEMINI</p>
          </div>

          <div className="skills-card">
            <img
              src="/Ollama-logo.webp"
              className="skills-card-img"
            />
            <p className="skills-card-name">OLLAMA</p>
          </div>

        </Ticker>

      </div>


      {/* ================= CLOUD & MLOPS ================= */}

      <div className="skills-row">

        <h4>Cloud & MLOps</h4>

        <Ticker duration={60} direction={1} className="container">

          <div className="skills-card">
            <img
              src="/aws_logo.png"
              className="skills-card-img"
            />
            <p className="skills-card-name">AWS</p>
          </div>

          <div className="skills-card">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
              className="skills-card-img"
            />
            <p className="skills-card-name">DOCKER</p>
          </div>

          <div className="skills-card">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg"
              className="skills-card-img"
            />
            <p className="skills-card-name">CI/CD</p>
          </div>

          <div className="skills-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1006/1006363.png"
              className="skills-card-img"
            />
            <p className="skills-card-name">BEDROCK</p>
          </div>

          <div className="skills-card">
            <img
              src="/aws_logo.png"
              className="skills-card-img"
            />
            <p className="skills-card-name">ECS FARGATE</p>
          </div>

          <div className="skills-card">
            <img
              src="/aws_logo.png"
              className="skills-card-img"
            />
            <p className="skills-card-name">ECR</p>
          </div>

          <div className="skills-card">
            <img
              src="/aws_logo.png"
              className="skills-card-img"
            />
            <p className="skills-card-name">EC2</p>
          </div>

          <div className="skills-card">
            <img
              src="/aws_logo.png"
              className="skills-card-img"
            />
            <p className="skills-card-name">LAMBDA</p>
          </div>

          <div className="skills-card">
            <img
              src="/aws_logo.png"
              className="skills-card-img"
            />
            <p className="skills-card-name">S3</p>
          </div>

          <div className="skills-card">
            <img
              src="/aws_logo.png"
              className="skills-card-img"
            />
            <p className="skills-card-name">IAM</p>
          </div>

          <div className="skills-card">
            <img
              src="/mlflow_logo.svg"
              className="skills-card-img"
            />
            <p className="skills-card-name">MLFLOW</p>
          </div>

          <div className="skills-card">
            <img
              src="/ml_ops_logo.webp"
              className="skills-card-img"
            />
            <p className="skills-card-name">MLOPS</p>
          </div>

          <div className="skills-card">
            <img
              src="/llmops_logo.jpeg"
              className="skills-card-img"
            />
            <p className="skills-card-name">LLMOPS</p>
          </div>

          <div className="skills-card">
            <img
              src="/model_deployment.png"
              className="skills-card-img"
            />
            <p className="skills-card-name">MODEL DEPLOYMENT</p>
          </div>

        </Ticker>

      </div>


      {/* ================= DATABASES & VECTOR DATABASES ================= */}

      <div className="skills-row">

        <h4>Databases</h4>

        <Ticker duration={30} direction={-1} className="container">

          <div className="skills-card">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
              className="skills-card-img"
            />
            <p className="skills-card-name">MYSQL</p>
          </div>

          <div className="skills-card">
            <img
              src="/Mongo.svg"
              className="skills-card-img"
            />
            <p className="skills-card-name">MONGODB</p>
          </div>

          <div className="skills-card">
            <img
              src="/faiss_logo.jpeg"
              className="skills-card-img"
            />
            <p className="skills-card-name">FAISS</p>
          </div>

          <div className="skills-card">
            <img
              src="/croma_logo.ico"
              className="skills-card-img"
            />
            <p className="skills-card-name">CHROMADB</p>
          </div>

          <div className="skills-card">
            <img
              src="/pinecone_logo.jpg"
              className="skills-card-img"
            />
            <p className="skills-card-name">PINECONE</p>
          </div>

        </Ticker>

      </div>


      {/* ================= ZOHO ================= */}

      <div className="skills-row">
        <h4>Zoho</h4>
        <Ticker duration={30} direction={1} className="container">

          <div className="skills-card">
            <img
              src="/zoho_crm.jpeg"
              className="skills-card-img"
            />
            <p className="skills-card-name">Zoho CRM</p>
          </div>

          <div className="skills-card">
            <img
              src="/catalyst-logo.png"
              className="skills-card-img"
            />
            <p className="skills-card-name">Zoho Catalyst</p>
          </div>

          <div className="skills-card">
            <img
              src="/creator_logo.png"
              className="skills-card-img"
            />
            <p className="skills-card-name">Zoho Creator</p>
          </div>

          <div className="skills-card">
            <img
              src="/sign_logo.png"
              className="skills-card-img"
            />
            <p className="skills-card-name">Zoho Sign</p>
          </div>

          <div className="skills-card">
            <img
              src="/flow_logo.png"
              className="skills-card-img"
            />
            <p className="skills-card-name">Zoho Flow</p>
          </div>

          <div className="skills-card">
            <img
              src="/Zoho_Writer.png"
              className="skills-card-img"
            />
            <p className="skills-card-name">Zoho Write</p>
          </div>

          <div className="skills-card">
            <img
              src="/sheet_logo.png"
              className="skills-card-img"
            />
            <p className="skills-card-name">Zoho Sheet</p>
          </div>

          <div className="skills-card">
            <img
              src="/pagesense_log.png"
              className="skills-card-img"
            />
            <p className="skills-card-name">Zoho PageSense</p>
          </div>

          <div className="skills-card">
            <img
              src="/analatycs.png"
              className="skills-card-img"
            />
            <p className="skills-card-name">Zoho Analytics</p>
          </div>

          <div className="skills-card">
            <img
              src="/form_logo.png"
              className="skills-card-img"
            />
            <p className="skills-card-name">Zoho Form</p>
          </div>

        </Ticker>



      </div>


      {/* ================= TOOLS ================= */}

      <div className="skills-row">
        <h4>Tools</h4>
        <Ticker duration={30} direction={-1} className="container">

          <div className="skills-card">
            <img
              src="https://yt3.ggpht.com/a/AATXAJyipXRhLYbGmgiIFejFligw7RnbiBhI9ahUxQ=s900-c-k-c0xffffffff-no-rj-mo"
              className="skills-card-img"
            />
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

          <div className="skills-card">
            <img
              src="https://global-uploads.webflow.com/5ebea55066f36f531dec5b32/62bf68f37b012285a9f7ac59_83326223-3491-4a4b-8c35-72a786e597d5.png"
              className="skills-card-img"
            />
            <p className="skills-card-name">NodeMailer</p>
          </div>

        </Ticker>



      </div>


      {/* ================= PLATFORMS ================= */}

      <div className="skills-row">

        <h4>Platforms</h4>

        <Ticker duration={60} direction={1}>

          <div className="skills-card">
            <img src="/vercel.svg" className="skills-card-img" />
            <p className="skills-card-name">Vercel</p>
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
            <img
              src="https://companieslogo.com/img/orig/GTLB-a915f681.png?download=true"
              className="skills-card-img"
            />
            <p className="skills-card-name">GitLab</p>
          </div>

          <div className="skills-card">
            <img
              src="/render_logo.png"
              className="skills-card-img"
            />
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
  padding: 2rem 0rem;
  h3 {
    color: black;
    margin-bottom: 1rem;
  }
  h4 {
    color: black;
        width: 30%;
  }
  .skills-row {
    width: 95%;
    margin-inline: auto;
    padding: 0.5rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    .skills-card {
      // background: var(--background-lightest);
      color: black;
      border-left: 0.5px solid rgba(0, 0, 0, 0.203);
      font-weight: 500;
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
