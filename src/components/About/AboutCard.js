import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Namo Narayan </span>
            from <span className="purple"> Bihar, India.</span>
            <br />I am a front end web developer,Pursuing B.Tech from Lovely Professional University,Punjab
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Spiritualism
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "By Spiritualism and Science "{" "}
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Lets Change The world !"{" "}
          </p>
          <footer className="blockquote-footer">Namo Narayan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;