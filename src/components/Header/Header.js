import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Header = () => {
    return (
        <Row xs={1} md={2} className='d-flex my-5'>
            {/* my Image */}
            <Col md={3} className='text-center'>
                <img className='img-fluid rounded-4' width={200} height={200} src="https://scontent.fdac2-1.fna.fbcdn.net/v/t1.6435-9/56971059_162027111467229_6597350545848008704_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeG8ydQl5CtcyLLmB0IX-1OcqBIe1-rxpD-oEh7X6vGkP831d6qXYwjCnyQbTNfTxvD3pOL94PtL5H3Iao3QV-iQ&_nc_ohc=CrD0cAMJ12AAX_l4UWB&_nc_ht=scontent.fdac2-1.fna&oh=00_AT-wvVjC76SErXrWd2JRYspby2Z6SCkXzp7PXuYHxKr21w&oe=636BE1CE" alt="" />
            </Col>


            <Col md={9}>
                <h4 className='text-primary'> <span className='fs-1 text-danger'>HI !!!</span>You can test your programming knoladge in this site. Here are many topics and quizes on web-development that you can try.You can improve your skill in my website. So start now...</h4>
            </Col>

        </Row>
    );
};

export default Header;