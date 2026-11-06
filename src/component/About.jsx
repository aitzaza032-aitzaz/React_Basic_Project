import React from "react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function   About() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="teen ager girl.jpg" />
      <Card.Body>
        <Card.Title>About</Card.Title>
        <Card.Text>
          Hi ! How can i help you .
          <br/>
       <h1>      This is About page of our website.      </h1>  
        </Card.Text>
        <Button variant="primary">go
        <br/>
      
             </Button>
      </Card.Body>
    </Card>
  );
}

export default About;