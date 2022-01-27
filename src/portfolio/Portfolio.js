import React from 'react'
// import Container from "react-bootstrap/Container";
// import Card from "react-bootstrap/Card";
// import CardDeck from "react-bootstrap/CardDeck";
// import Col from "react-bootstrap/Col";
import { Card, CardDeck, Col, Container } from 'react-bootstrap'
import PortfolioButton from './PortfolioButton'
import Project1 from '../images/weather.png'
import Project2 from '../images/prog2.png'
import Project3 from '../images/prog1.png'
import Project4 from '../images/todo-app.png'
import Project5 from '../images/Iyimides-CV.png'
import Project6 from '../images/snapshot.png'
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
              href="https://grp2-weather.netlify.app/"
            >
              <PortfolioButton />
            </a>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="port-col">
            <Card.Img
              src={Project2}
              className="d-block portfolio-img"
              alt="..."
            />
            <Card.Text className="card-text"> Google website clone </Card.Text>
            <a
              id="test"
              target="_blank"
              rel="noreferrer"
              href="https://digital-initiative-midew2-2.netlify.app/"
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
            <Card.Text className="card-text"> A blog site</Card.Text>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://digital-initiative-midew2.netlify.app/"
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
            <Card.Text className="card-text">
              My curriculum Vitae(CV) in html and css
            </Card.Text>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://mide358.github.io/iyimides-cv/"
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
            <Card.Text className="card-text">A website clone</Card.Text>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://snapshot-design.netlify.app/"
            >
              <PortfolioButton />
            </a>
          </Card>
        </Col>
      </CardDeck>
    </Container>
  )
}

export default Portfolio
