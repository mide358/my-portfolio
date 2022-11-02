import React from 'react';
// import Container from "react-bootstrap/Container";
// import Card from "react-bootstrap/Card";
// import CardDeck from "react-bootstrap/CardDeck";
// import Col from "react-bootstrap/Col";
import { Card, CardDeck, Col, Container } from 'react-bootstrap';
import PortfolioButton from './PortfolioButton';
import Project1 from '../images/weather.png';
import Project2 from '../images/recipe2.png';
import Project3 from '../images/rccg.png';
import Project4 from '../images/todo-app.png';
import Project5 from '../images/customer.png';
import Project6 from '../images/loan.png';
const Portfolio = () => {
  return (
    <Container
      fluid
      className="portfolio-main mt-5"
      style={{ backgroundColor: '#2e2f3e' }}
    >
      <h2 className="d-none d-md-block pt-5">Portfolio</h2>

      <CardDeck className="port-row row-one">
        <Col lg={4}>
          <Card className="port-col">
            <Card.Img
              src={Project1}
              className=" d-block portfolio-img"
              alt="..."
            />
            <Card.Text className="card-text">
              A weather app built with react js
            </Card.Text>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://weatherappbymide.netlify.app/"
            >
              <PortfolioButton />
            </a>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="port-col">
            <Card.Img
              src={Project2}
              className=" d-block portfolio-img"
              alt="..."
            />
            <Card.Text className="card-text">A Recipe App</Card.Text>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://freshfoodzone.netlify.app/"
            >
              <PortfolioButton />
            </a>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="port-col">
            <Card.Img
              src={Project3}
              className=" d-block portfolio-img"
              alt="..."
            />
            <Card.Text className="card-text"> A website</Card.Text>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://rccgroyalfamily.com/"
            >
              <PortfolioButton />
            </a>
          </Card>
        </Col>
      </CardDeck>

      {/*  */}

      <CardDeck className="port-row">
        <Col lg={4}>
          <Card className="port-col">
            <Card.Img
              src={Project4}
              className=" d-block portfolio-img"
              alt="..."
            />
            <Card.Text className="card-text">A To-Do app</Card.Text>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://mide-todo-app.netlify.app/"
            >
              <PortfolioButton />
            </a>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="port-col">
            <Card.Img
              src={Project5}
              className=" d-block portfolio-img"
              alt="..."
            />
            <Card.Text className="card-text">A Movie Watchlist App</Card.Text>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://movie-watchlist-mide.netlify.app/"
            >
              <PortfolioButton />
            </a>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="port-col">
            <Card.Img
              src={Project6}
              className=" d-block portfolio-img"
              alt="..."
            />
            <Card.Text className="card-text">A loan App</Card.Text>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://loan-app-mide.netlify.app/"
            >
              <PortfolioButton />
            </a>
          </Card>
        </Col>
      </CardDeck>
    </Container>
  );
};

export default Portfolio;
