import React from 'react';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


const Topic = ({ topic }) => {
    const { logo, name, id } = topic;
    return (
        <Col>
            <Card>
                <Card.Img className="bg-dark" src={logo} />
                <Card.Body className='d-flex justify-content-between'>
                    <Card.Title className='text-success'>{name}</Card.Title>
                    <Link to={`/topics/${id}`} className='text-decoration-none bg-primary text-white px-2 pt-1 rounded-1'>start practice</Link>
                </Card.Body>
            </Card>
        </Col>



    );
};

export default Topic;