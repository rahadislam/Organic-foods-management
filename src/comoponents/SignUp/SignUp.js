import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <div className='w-75 mx-auto mt-4 shadow p-3 mb-5 bg-white rounded'>
            <Row>
                <Col className='mt-5'>
                    <img width={380} src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-4922762-4097209.png" alt="" />
                </Col>
                <Col className='mt-5'>
                <h3 className="text-center level_box">Sign Up</h3>
            <Form className="">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="level_box">Name:</Form.Label>
                    <Form.Control id="input_box" type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="level_box">Email Address:</Form.Label>
                    <Form.Control id="input_box" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="level_box">Password:</Form.Label>
                    <Form.Control id="input_box" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="level_box">Password Confirm:</Form.Label>
                    <Form.Control id="input_box" type="password" placeholder="Password Confirm" />
                </Form.Group>
                <p className='level_box'>You have already account? <Link to='/signin'>Sign In</Link></p>
                
                <Button variant="primary" id="custom_btn" type="submit">
                    Sign Up
                </Button>
            </Form>
            <div className="social_auth">
                <button><img className="google_img" height={40} src="https://www.dlf.pt/png/list/15/155598_google-review-icon-png.png" alt="" /> Google</button>
            </div>
                </Col>
            </Row>
            
        </div>
        </div>
    );
};

export default SignUp;