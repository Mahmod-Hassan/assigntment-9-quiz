import React from 'react';
import { Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Options = ({ option, correctAnswer }) => {
    console.log(option);
    const handleQuizOptionButton = (e) => {
        console.log(e.target.innerText);
        if (e.target.innerText === correctAnswer) {
            right();

        } else {
            wrong();
        }
    }
    const right = () => toast.success('correct! woow!!')
    const wrong = () => toast.error(`Your answer is wrong`)
    return (
        <Col>
            <button onClick={handleQuizOptionButton} className='w-100 bg-success border-0 p-1 fs-5 text-light'>{option}</button>
            <ToastContainer />
        </Col>
    );
};

export default Options;