import React from "react";
import Card from "react-bootstrap/Card";

const AboutContent = () => {
  return (
    <Card
      className="about-body mx-auto"
      style={{ width: "26rem", height: "28rem" }}
    >
      <Card.Body>
        <Card.Title>
          <h2 className="d-none d-lg-block">About Me</h2>
        </Card.Title>

        <Card.Text className="about-text mx-auto">
          Hi, I am <span className="myname">Iyimide. </span>
          <br></br>I am a Front-end developer who specializes in creating
          exceptional and dynamic user experiences, web pages and web
          applications. I currently work with JavaScript, React JS, HTML, CSS
          and Bootstrap. <br></br>I enjoy continuous learning and self
          development.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AboutContent;
