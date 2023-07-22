import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey there !! , I am <span className="purple">Vachaspati Goutam </span>
            from <span className="purple"> Jharkhand, India.</span>
            <br /> I am a final year student in pursuing Bachelors of Engineering at NMIT, Bengaluru.
            <br />Department : 
            <span className="purple">Computer Science and Engineering</span>
            
            
          <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading about geo-poilitics
            </li>
            <li className="about-activity">
              <ImPointRight /> Hitting the gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The master has failed more than a beginner has ever tried"{" "}
          </p>
          <i>
          <footer className="blockquote-footer">Vachaspati</footer>
            
          </i>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
