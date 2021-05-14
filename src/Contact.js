import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Contact = () => {
  return (

     <Form>

       <Row>
         <Col className="contact-head" lg={5}>

         <h2>Get in Touch</h2>
         </Col>

         <Col className="contact-form" lg={5}>
         <Form.Control type="text" placeholder="Your name" id="form-border"/>
         <br/>
         <Form.Control type="email" placeholder="Email" id="form-border"/>
         <br/>
         <Form.Control as="textarea" rows={3} id="form-border"/>

         <Button className="contact-btn" variant="primary" size="" block> Send</Button>
         </Col>

       </Row>

     </Form>

   );
}

export default Contact;