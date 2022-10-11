import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Question = ({ quiz }) => {
    console.log(quiz);
    const { question, options } = quiz;
    return (
        <Col className='bg-primary text-white p-4'>
            <h2>{question}</h2>
            <Row xs={1} md={2}>
                {
                    options.map(option => <Col>
                        <div>{option}</div>
                    </Col>)
                }
            </Row>
        </Col>
    );
};

export default Question;