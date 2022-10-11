import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Nabvar = () => {

    return (

        // here is the header or narvar
        <Navbar sticky='top' bg="dark" className='p-0' expand="lg">
            <Container>
                <Navbar.Brand className='fs-2 fw-bold text-uppercase font-monospace text-danger'>Quiz Test</Navbar.Brand>
                <Navbar.Toggle className='bg-light' aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">


                        <Link to='/topics' className='text-decoration-none m-2 text-white fs-5'>Topics</Link>

                        <Link to='/statictis' className='text-decoration-none m-2 text-white fs-5'>Statictis</Link>

                        <Link to='/blog' className='text-decoration-none m-2 text-white fs-5'>Blog</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Nabvar;