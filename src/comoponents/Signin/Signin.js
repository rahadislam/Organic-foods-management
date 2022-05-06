import React from 'react';
import { Button, Form,Row,Col } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Signin.css';

const Signin = () => {
    const [signInWithEmailAndPassword, user,error,] = useSignInWithEmailAndPassword(auth);
    
    const [signInWithGoogle,user1] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    if(user || user1){
        navigate('/home')
    }

    const handelfrom=(event)=>{
        event.preventDefault();
        const email= event.target.email.value;
        const password= event.target.password.value;
        signInWithEmailAndPassword(email,password);
    }
    return (
        <div className='w-75 mx-auto mt-4 shadow p-3 mb-5 bg-white rounded'>
            <Row>
                <Col className='mt-5'>
                    <img width={400} src="https://media.istockphoto.com/vectors/people-vector-illustration-flat-cartoon-character-landing-page-vector-id1137712472?b=1&k=20&m=1137712472&s=612x612&w=0&h=tThl_ZiOIv2rvfHrdZyhB7qlvc9dEzD8DGkbYk_tbo4=" alt="" />
                </Col>
                <Col className='mt-5'>
                <h3 className="text-center level_box">Sign In</h3>
            <Form onSubmit={handelfrom}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="level_box">Email Address:</Form.Label>
                    <Form.Control name="email" id="input_box" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="level_box">Password</Form.Label>
                    <Form.Control name="password" id="input_box" type="password" placeholder="Password" />
                </Form.Group>
                <p className='level_box'>You have no accout then <Link to='/signup'>Sign Up</Link></p>
                
                <Button variant="primary" id="custom_btn" type="submit">
                    Sign In
                </Button>
            </Form>
            <div className="social_auth">
                <button onClick={() => signInWithGoogle()}><img className="google_img" height={40} src="https://www.dlf.pt/png/list/15/155598_google-review-icon-png.png" alt="" /> Google</button>
            </div>
                </Col>
            </Row>
            
        </div>
    );
};

export default Signin;