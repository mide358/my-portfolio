import React from 'react';
import Card from 'react-bootstrap/Card';


const AboutContent = () => {
  return (

      <Card className="about-body " style={{ width: '26rem', height:'25rem' }}>
  <Card.Body>
    <Card.Title><h2 className="d-none d-lg-block">About Me</h2></Card.Title>

    <Card.Text className="about-text">
    <p >Hi, I'm <span className="myname">Iyimide. </span> I'm a multi-talented individual who specialises in creating exceptional and dynamic user experiences and applications.
         I enjoy continuous learning and self development.
        </p>
    </Card.Text>

  </Card.Body>
</Card>




   );
}

export default AboutContent;