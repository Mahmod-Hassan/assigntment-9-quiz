import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Header = () => {
    return (
        <Row xs={1} md={2} className='d-flex my-5'>
            {/* my Image */}
            <Col md={3} className='text-center'>
                <img className='img-fluid rounded-4' width={200} height={200} src="https://media.istockphoto.com/vectors/quiz-time-neon-sign-style-text-vector-id1290210769?k=20&m=1290210769&s=612x612&w=0&h=M8Y2QEzA_KrYmTxsOwvfNTOegawrjC0UGmj86zJJBF0=" alt="" />
            </Col>


            <Col md={9}>
                <h4 className='text-light lead'> <span className='fs-1 text-danger'>HI !!! </span>You can test your programming knoladge in this site. Here are many quizes on different topics about web-development that you can try.You can improve your skill in this website. So start now...</h4>
            </Col>

        </Row>
    );
};

export default Header;