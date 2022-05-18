import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Abhinay Garg </span>
            from <span className="purple"> Indore, Madhya Pradesh, India.</span>
            <br />I am a 3rd Year student at Vellore Institute of Technology, VIT Bhopal.
            <br />
            <br />
            Apart from coding, some other soft skills and Interests that I posses:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Event Management
            </li>
            <li className="about-activity">
              <ImPointRight /> Leadership
            </li>
            <li className="about-activity">
              <ImPointRight /> Fast learner
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Table Tennis
            </li>
            <li className="about-activity">
              <ImPointRight /> Adventures
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Life isn't about finding yourself it's about creating yourself!"{" "}
          </p>
          <footer className="blockquote-footer">Abhinay Garg</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
