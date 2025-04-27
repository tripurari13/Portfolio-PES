import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tripurari Kumar </span>
            from <span className="purple"> Bihar, India.</span>
            <br />
            I am currently pursuing a B.Tech degree in Computer Science and Engineering.
            <br />
            I have a strong interest in software development and problem-solving.
            <br />
            <br />
            Apart from coding, I enjoy engaging in a variety of other activities that keep me inspired and balanced.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Poems
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Tripurari</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
