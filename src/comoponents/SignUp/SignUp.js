import { Button, Col, Form, Row } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SignUp = () => {
    const [createUserWithEmailAndPassword,user,error] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle,user1] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    if(user){
        navigate('/signin')
    }
    if(user1){
        navigate('/signin')
    }
       

    const handelfrom=(event)=>{
        event.preventDefault();
        const email= event.target.email.value;
        const password= event.target.password.value;
        createUserWithEmailAndPassword(email,password);
    }
    return (
        <div>
            <div className='w-75 mx-auto mt-4 shadow p-3 mb-5 bg-white rounded'>
            <Row>
                <Col className='mt-5'>
                    <img width={380} src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-4922762-4097209.png" alt="" />
                </Col>
                <Col className='mt-5'>
                <h3 className="text-center level_box">Sign Up</h3>
            <Form onSubmit={handelfrom}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="level_box">Name:</Form.Label>
                    <Form.Control name="name" id="input_box" type="text" placeholder="Name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="level_box">Email Address:</Form.Label>
                    <Form.Control name="email" id="input_box" type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="level_box">Password:</Form.Label>
                    <Form.Control name="password" id="input_box" type="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="level_box">Password Confirm:</Form.Label>
                    <Form.Control name="conPassword" id="input_box" type="password" placeholder="Password Confirm" required/>
                </Form.Group>
                <p className='level_box'>You have already account? <Link to='/signin'>Sign In</Link></p>
                <p className="success">{user && "You successfully Register"}</p>
                <p className='text-danger'><p>{error && <p>Your register wrong ...please try again!!</p>}</p></p>
                
                <Button variant="primary" id="custom_btn"  type="submit">
                    Sign Up
                </Button>
            </Form>
            <div className="social_auth">
                <button onClick={() => signInWithGoogle()}><img className="google_img" height={40} src="https://www.dlf.pt/png/list/15/155598_google-review-icon-png.png" alt="" /> Google</button>
            </div>
                </Col>
            </Row>
            
        </div>
        </div>
    );
};

export default SignUp;