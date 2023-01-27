import React from 'react';
import './Contractjob.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Textcoldescribe = () => {
    return(
        <>
        <Container>
            <Row className='textrow'>
                    <Col sm={12} className='textcol'>
                        <h4>Know your Need</h4>
                        <p>Our team will assess your experience and education to suggest the right path for your 
                        career growth. With proper training from our experts, we are confident that we will steer
                         you in the right direction to succeed in your desired profession field.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
} 

export default Textcoldescribe