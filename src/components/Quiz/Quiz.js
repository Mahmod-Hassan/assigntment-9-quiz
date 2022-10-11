import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Question = ({ quiz }) => {
    console.log(quiz);
    const { question, options } = quiz;
    return (
        <Col className='shadow p-5'>
            <h2>{question}</h2>
            <Row xs={1} md={2} className='g-3'>
                {
                    options.map(option => <Col>
                        <button className='border-0 bg-white'>
                            <input className="form-check-input border border-3 border-primary" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                        </button>

                        <span>{option}</span>

                    </Col>)
                }
            </Row>
        </Col>
    );
};

export default Question;