import React from 'react';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Col from 'react-bootstrap/Col'
import PortfolioButton from './PortfolioButton'
import Project1 from './images/prog1.png';
import Project2 from './images/prog2.png';
import Project3 from './images/prog3.png';
import Project4 from './images/todo-app.png';
import Project5 from './images/Iyimides-CV.png';
import Project6 from './images/snapshot.png';
const Portfolio = () => {
  return (
    <Container  fluid className="portfolio-main" style={{backgroundColor:'#2e2f3e' }}>

      <h2 className="d-none d-md-block">Portfolio</h2>


        <CardDeck className="port-row row-one">
          <Col lg={4}>
     <Card className="port-col" >
      <Card.Img src={Project1} className=" d-block portfolio-img" alt="..." />
      <PortfolioButton url="https://digital-initiative-midew2.netlify.app/" />
      </Card>
      </Col>
      <Col lg={4}>
     <Card className="port-col" >
      <Card.Img src={Project2} className="d-block portfolio-img" alt="..."/>
      <PortfolioButton url="https://digital-initiative-midew2-2.netlify.app/" />
        </Card>
        </Col>
        <Col lg={4}>
       <Card className="port-col" >
        <Card.Img src={Project3} className=" d-block portfolio-img" alt="..."/>
        <PortfolioButton url="https://digital-initiative-midew3.netlify.app/" />
      </Card>
      </Col>
      </CardDeck>

      {/*  */}

        <CardDeck className="port-row">
        <Col lg={4} >
      <Card className="port-col" >
      <Card.Img src={Project4} className=" d-block portfolio-img" alt="..."/>
      <PortfolioButton url="https://mide-todo-app.netlify.app/"/>
        </Card>
       </Col>
       <Col lg={4}>
       <Card className="port-col" >
        <Card.Img src={Project5} className=" d-block portfolio-img" alt="..."/>
        <PortfolioButton url="https://mide358.github.io/iyimides-cv/"/>
      </Card>
      </Col >
      <Col lg={4}>
     <Card className="port-col" >
      <Card.Img src={Project6} className=" d-block portfolio-img" alt= "..."/>
      <PortfolioButton url="https://snapshot-design.netlify.app/"/>
      </Card>
      </Col>
      </CardDeck>


    </Container>
   );
}

export default Portfolio;
