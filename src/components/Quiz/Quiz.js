import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const Quiz = ({ quiz }) => {
    const { question, options, correctAnswer } = quiz;
    const [answerValidation, setAnswerValidation] = useState();

    const handleQuizButton = (index) => {
        console.log(index);
        if (options[index] === correctAnswer) {
            setAnswerValidation(true)
        } else {
            setAnswerValidation(false);
        }

    }

    return (
        <Col className='shadow-lg p-5 bg-dark text-light rounded'>
            <h2 className='mb-4'>
                {
                    question.slice(3, -4)
                }
            </h2>
            <Row xs={1} md={2} className='g-3'>
                {
                    options.map((option, idx) => <Col key={idx} >
                        <button onClick={() => handleQuizButton(idx)} className={'bg-light w-100 border-0 rounded p-2 text-start'}>{option}</button>
                    </Col>
                    )
                }

            </Row>
        </Col>


    );
};

export default Quiz;