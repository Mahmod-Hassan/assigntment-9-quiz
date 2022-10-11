import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Topic from '../Topic/Topic';
import Row from 'react-bootstrap/Row';

const Topics = () => {
    const topics = useLoaderData();
    return (
        <Container className='bg-dark p-5 mt-5'>
            <Header></Header>
            <Row xs={1} md={2} lg={4} className="g-4">
                {
                    topics.data.map(topic => < Topic
                        key={topic.id}
                        topic={topic}
                    ></Topic>)
                }
            </Row>
        </Container>
    );
};

export default Topics;