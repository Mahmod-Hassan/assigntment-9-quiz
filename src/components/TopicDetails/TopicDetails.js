import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const TopicDetails = () => {

    const details = useLoaderData();
    const questions = details.data.questions;


    return (
        <Container>
            <Row className='g-4 mt-4'>
                <h1 className='text-center text-primary'>Quiz of {details.data.name}</h1>
                {
                    questions.map(quiz => <Quiz
                        key={quiz.id}
                        quiz={quiz}
                    >
                    </Quiz>)
                }
            </Row>
        </Container>

    );
};

export default TopicDetails;