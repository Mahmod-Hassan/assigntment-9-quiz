import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Options from '../Options/Options';


const Quiz = ({ quiz }) => {
    const { question, options, correctAnswer } = quiz;
    const showCorrectAnswer = () => toast.info(`correct answer is ${correctAnswer}`)
    return (
        <Col xs={10} lg={7} className='shadow-lg p-5 rounded mx-auto'>
            <div className='d-flex'>
                <h2 className='mb-4'>
                    {
                        question.slice(3, -4)
                    }
                </h2>
                <button onClick={showCorrectAnswer} className='border-0 bg-white'>
                    <FontAwesomeIcon icon={faEye} />
                </button>
            </div>


            <Row xs={1} md={2} className='g-3'>
                {
                    options.map((option, idx) => <Options
                        key={idx}
                        option={option}
                        correctAnswer={correctAnswer}
                    >
                    </Options>)
                }


            </Row>
        </Col>


    );
};

export default Quiz;