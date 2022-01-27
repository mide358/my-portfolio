import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const Contact = () => {
  return (
    <Container fluid className="contact-main">
      <Row>
        <Col className="contact-head mt-5" lg={5}>
          <h2>
            Get in <span>Touch</span>
          </h2>
        </Col>

        <Col className="contact-me" lg={5}>
          <Card
            className="contact-text"
            style={{ width: "26rem", height: "5rem" }}
          >
            <Card.Text>Email: iyimide.adegunloye@gmail.com</Card.Text>
          </Card>
          <br></br>
          <Card
            className="contact-text"
            style={{ width: "26rem", height: "5rem" }}
          >
            <Card.Text>Phone: +234 7057454542 / +234 7080855800</Card.Text>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
