import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import calculator from "../../Assets/Projects/calculator.png";
import mapmypath from "../../Assets/Projects/MapMyPath.png";
import searchingvisualizer from "../../Assets/Projects/SearchingVisualizer.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects that I've worked upon.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mapmypath}
              isBlog={false}
              title="Map My Path"
              description="A path finding, algorithm visualizer. The project is made using HTML, CSS, Javascript, Express, Node.js and deployed using Heroku. It helps to visualize the in depth working of different algorithms like A* Search, Dijkstra, Depth First and Breadth First Search."
              link="https://github.com/techabhi08/MapMyPath"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={searchingvisualizer}
              isBlog={false}
              title="Searching Sorting Visualizer"
              description="The project, as the name suggests is a sorting and searching visualizer which helps to visualize the working of searching and sorting algorithms. The project is build using HTML5, CSS3, Javascript and Firebase."
              link="https://github.com/techabhi08/Searching-Sorting-Visualizer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Income Tax Calculator"
              description="Income Tax Calculator(Forked) is an Open Source Project to which I contributed. The project is build upon Python and tkInter Module. It is a GUI which helps user to calculate the total tax amount that he/she has to pay depending upon the salary and the redumptions."
              link="https://github.com/techabhi08/Income-Tax-Calcultor"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
