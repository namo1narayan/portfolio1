import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./CertificatesCards";
import Particle from "../Particle";
import pmyc from "../../Assets/Certificates/pmyc.png";
import ac from "../../Assets/Certificates/ac.png";
import reactjs from "../../Assets/Certificates/reactjs.png";
import internship from "../../Assets/Certificates/internship.png";
import ff from "../../Assets/Certificates/ff.png";
import a from "../../Assets/Certificates/a.png";
import du1 from "../../Assets/Certificates/du1.png";
import al from "../../Assets/Certificates/al.png";
import yc from "../../Assets/Certificates/yc.jpg";
import poetry from "../../Assets/Certificates/poetry.png";
import vq from "../../Assets/Certificates/vq.png";

function Certificates() {
    return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Certificates
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} >
              <ProjectCard
                color="yellow"
                imgPath={internship}
              />
            </Col>

            <Col md={4} >
              <ProjectCard
                imgPath={reactjs}
              />
            </Col>

            <Col md={4} >
              <ProjectCard
                imgPath={ac}
              />
            </Col>


            <Col md={4} >
              <ProjectCard
                imgPath={pmyc}
              />
            </Col>

            <Col md={4} >
              <ProjectCard
                imgPath={ff}
              />
            </Col>

            <Col md={4} >
              <ProjectCard
                imgPath={a}
              />
            </Col>

            <Col md={4} >
              <ProjectCard
                imgPath={vq}
              />
            </Col>

            <Col md={4} >
              <ProjectCard
                imgPath={yc}
              />
            </Col>

            <Col md={4} >
              <ProjectCard
                imgPath={poetry}
              />
            </Col>

            <Col md={4} >
              <ProjectCard
                imgPath={al}
              />
            </Col>

            <Col md={4} >
              <ProjectCard
                imgPath={du1}
              />
            </Col>



            </Row>
            </Container>
            </Container>
             );
            }
            export default Certificates;