import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {

    return (

        // here is the header or narvar
        <Navbar bg="light" className='p-0' expand="lg">
            <Container>
                <Navbar.Brand className='fs-2 fw-bold text-uppercase font-monospace text-danger'>Test Your Level</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">

                        <Link to='/' className='text-decoration-none m-2'>Topics</Link>

                        <Link to='/statictis' className='text-decoration-none m-2'>Statictis</Link>

                        <Link to='/blog' className='text-decoration-none m-2'>Blog</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;