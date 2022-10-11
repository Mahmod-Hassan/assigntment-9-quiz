import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';
import Topics from '../Topics/Topics';

const Home = () => {
    return (
        <Container className='my-4'>
            <Header></Header>
            <Topics></Topics>
        </Container>
    );
};

export default Home;