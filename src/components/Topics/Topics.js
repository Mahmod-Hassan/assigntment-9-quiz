import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Topic from '../Topic/Topic';
import Row from 'react-bootstrap/Row';

const Topics = () => {
    const topics = useLoaderData();
    console.log(topics.data)
    return (
        <Container>
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