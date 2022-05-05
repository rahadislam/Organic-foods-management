import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import furts from '../../images/fruts.png'

const Home = () => {
    return (
        <div className='bg-light'>
            <Container>
                <Row>
                    <Col sm={7}>sm=8</Col>
                    <Col sm={5}>
                        <img className="img-fluid" src={furts} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;