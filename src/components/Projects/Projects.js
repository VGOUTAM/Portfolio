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
              title="VS Shoppe"
              description="Experience seamless online shopping with our e-Commerce website built using ReactJS for the frontend and NodeJS with Express for the backend. Browse through an extensive collection of fashion for Men, Women, and Kids. Our platform offers a user-friendly interface, efficient wishlist and cart functionalities, and secure login/logout processes. Powered by MongoDB, we ensure a smooth and reliable shopping experience for all our customers."
              ghLink="https://github.com/VGOUTAM/E-Commerce.git"
              demoLink="https://remarkable-licorice-51dfe5.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Weather-App using API"
              description="Project for the demonstration of usage of API service(here openweather map) in our websites. The weather API has been used which shows the weather based on the entered location"
              ghLink="https://github.com/VGOUTAM/City_Weather-using-API-.git"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Keeper App"
              description="A to-do list built using ReactJS , NodeJS and mongoDB"
              ghLink="https://github.com/VGOUTAM/To-do-List.git"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Authentication and Security"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/VGOUTAM/Aunthentication-and-Security.git"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Banking Interface using JavaFX and JDBC"
              description="Interface of banking system with JavaFX and Java database connectivity (JDBC) . Performing CRUD opeartions using MySQL and real-time updation of database on the system as per the transactions "
              ghLink="https://github.com/VGOUTAM/JavaFX-project.git"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Charade game"
              description="A basic guessing game built using Object oriented approach in C++"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
