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
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                {option}
                            </label>
                        </div>
                    </Col>)
                }
            </Row>
        </Col>
    );
};

export default Question;