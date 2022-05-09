import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Brand from '../../images/brand.png'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='py-3' bg="light">
                <Container className="fw-bold">
                    
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto fs-5 text-drak"> 
                        <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                        {
                            user && <Nav.Link as={Link} to='/manageitems'>Manage Items</Nav.Link>
                        }
                        
                        <Navbar.Brand as={Link} to='/home'>
                            <img height={40} src={Brand} alt="" />
                        </Navbar.Brand>
                        {
                            user && <Nav.Link as={Link} to='/Additems'>Add Item</Nav.Link>
                        }
                            
                            {
                                user && <Nav.Link as={Link} to='/myitems'>My Items</Nav.Link> 
                            }
                            
                            {
                                user ? <Nav.Link as={Link} to='/signin' onClick={handleSignOut}>Sign Out</Nav.Link>
                                :
                                <Nav.Link as={Link} to='/signin'>Sign In</Nav.Link>
                            }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;