import React from 'react'
import Background from './images/prog1.jpeg'
import Container from 'react-bootstrap/Container'


const HomeImage = () => {
  return (
    <Container fluid className="image-container" style={{backgroundColor:' #0f0e17', opacity: ''}}>
      <img  src={Background} alt="..." className="image-cover" />


    </Container>
   );
}

export default HomeImage;