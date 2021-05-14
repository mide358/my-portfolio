import Portrait from './images/portrait2.jpg';
import React from 'react';
import Card from 'react-bootstrap/Card';

const AboutImage = () => {
  return (
   <Card className="aboutimgcard" style={{height:'25rem', width:'25rem' }}>


       <Card.Img  src={Portrait}className="about-img-top mypix mx-auto d-block" alt="..."  />
    <Card.Text><h5 className="myjob">Software Developer</h5></Card.Text>

    </Card>
   );
}

export default AboutImage;