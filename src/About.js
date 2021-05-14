import React from 'react';
import AboutImage from './AboutImage';
import AboutContent from './AboutContent';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const About = () => {
  return (
    <Row className="about-group">
    <Col lg={5} className="about-me">
      <AboutImage/>
    </Col>


    <Col  lg={1}  className="lines d-none d-lg-block">

    </Col>


<Col lg={6} className="abt-content">
   <AboutContent />

    </Col>

    </Row>


   );
}

export default About;