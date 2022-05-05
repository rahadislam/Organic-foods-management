import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Brand from '../../images/brand.png'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='py-3' bg="light">
                <Container className="fw-bold">
                    
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto fs-5 text-drak"> 
                        <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                        <Navbar.Brand as={Link} to='/home'>
                            <img height={40} src={Brand} alt="" />
                        </Navbar.Brand>
                            <Nav.Link as={Link} to='/addproduct'>Add Product</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;