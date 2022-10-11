import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const Quiz = ({ quiz }) => {
    console.log(quiz);
    const [answer, setAnswer] = useState();
    const handleCheckboxButton = (e) => {
        console.log(e.target)
        setAnswer(e.target.innerText);
    }
    const { question, options } = quiz;
    return (
        <Col className='shadow-lg p-5 bg-dark text-light rounded'>
            <h2 className='mb-4'>
                {
                    question.slice(3, -4)
                }
            </h2>
            <Row xs={1} md={2} className='g-3'>
                {
                    options.map(option => <Col>
                        <button onClick={handleCheckboxButton} className='bg-success text-white w-100 border-0 rounded p-2 text-start'>
                            <input className="form-check-input border border-5 p-2 border-primary me-3" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />

                            {option}

                        </button>

                    </Col>)
                }
            </Row>
        </Col>
    );
};

export default Quiz;