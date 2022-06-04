import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bb from "../../Assets/Projects/bb.jpeg";
import resume from "../../Assets/Projects/resume.png";
import D_AI from "../../Assets/Projects/D_AI.png";
import rpg from "../../Assets/Projects/rpg.png";
import nutrition from "../../Assets/Projects/nutrition.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rpg}
              isBlog={false}
              title="Random Password Generator"
              description="It is Python project. In which user enter his name and password length and on clicking generate password it generate a random password ."
              link="https://github.com/namo1narayan/random-password-generator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="PHP and MySQL"
              description="My personal blog page build with PHP and MySQL by which we post our blog.It is basically Admin side blog website. We can perform CRUD operation as Hard code and Soft code."
              link="https://github.com/namo1narayan/blogging"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resume}
              isBlog={false}
              title="Resume using HTML and CSS"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/namo1narayan/resume"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bb}
              isBlog={false}
              title="Blood Bank using Android Studio"
              description="It is Mobile Application ,develope on Android Studio by using java and firebase with many functionality "
              link="https://github.com/namo1narayan/BloodBank_Android_studio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={D_AI}
              isBlog={false}
              title="Dataset AI"
              description="This project is developed on Google colaboratory using jupyter notebook and python,which is basically a payment prediction model using Artificial intelligence (AI)."
              link="https://github.com/namo1narayan/highradius-python"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nutrition}
              isBlog={false}
              title="blog website frontend"
              description="Using with bootstrap application this website is generated."
              link="https://github.com/namo1narayan/healthy-nutrition"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;