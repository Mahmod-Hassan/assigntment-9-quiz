import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


const Topic = ({ topic }) => {
    const { logo, name } = topic;
    return (
        <Col>
            <Card>
                <Card.Img className="bg-dark" src={logo} />
                <Card.Body className='d-flex justify-content-between'>
                    <Card.Title>{name}</Card.Title>
                    <Button variant='primary'>start practice</Button>
                </Card.Body>
            </Card>
        </Col>



    );
};

export default Topic;