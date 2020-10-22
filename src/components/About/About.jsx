import React from 'react';
import Header from '../shared/Header/Header';
import { Card, Container } from 'react-bootstrap';

const About = () => {
  return (
    <>
    <Header title='About'/>


        {/* You need a paragraph describing a fun fact about you */}
    <Container>
      <h1 className="m-5 text-center">The truth </h1>


        <Card>
          <Card.Text className="p-5">



        <p>
          The only false fact is " I start coding when I was 14 years old ". 
          I was 20 when I had the first contact with programming, and I start studying it when I was already 24.
          
        </p>
        <p>
        I tore my ligament playing rugby 5 years ago, and to be able to play again they need to use a real ligament to tie the scapula in place. I just played once or twice after that .-.
        </p>

          </Card.Text>
        </Card>
    </Container>
    </>
  );
}
 
export default About;