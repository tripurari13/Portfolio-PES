import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
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
              imgPath={chatify}
              isBlog={false}
              title="sdetProject"
              description="Built a full-stack OpenCart test automation framework with UI, API, and performance testing integrated into a GitHub Actions CI/CD pipeline"
              ghLink="https://github.com/tripurari13/sdetProject"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="chatbot-project"
              description="Developed a RESTful Customer Support Chatbot using Java, Spring Boot, and MySQL, capable of handling queries and storing conversations online"
              ghLink="https://github.com/tripurari13/chatbot-project"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Customer-Billing-System-Project-of-C"
              description="Created a Customer Billing System in C for managing purchases, generating bills, and maintaining customer records."
              ghLink="https://github.com/tripurari13/Customer-Billing-System-Project-of-C"
              demoLink="#"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Empty"
              description=" "
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Empty"
              description="#"
              ghLink="#"
              
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Empty"
              description=""
              ghLink="#"
              
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
