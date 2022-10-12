import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Options = ({ option, correctAnswer }) => {
    console.log(option);
    const [isValid, setIsValid] = useState('abc');
    const handleQuizOptionButton = (e) => {
        let optionValue = e.target.innerText;
        if (optionValue === correctAnswer) {
            right();
            setIsValid(optionValue);
        } else {
            wrong();
            setIsValid('');
        }
    }
    const right = () => toast.success('correct! woow!!')
    const wrong = () => toast.error(`Your answer is wrong`)
    return (
        <Col>
            {
                isValid === correctAnswer ?
                    <button onClick={handleQuizOptionButton} className='w-100 bg-success  border-0 p-1 fs-5 text-light'>{option}</button>
                    :
                    <button onClick={handleQuizOptionButton} className='w-100 bg-secondary  border-0 p-1 fs-5 text-light'>{option}</button>
            }
            <ToastContainer />
        </Col>
    );
};

export default Options;