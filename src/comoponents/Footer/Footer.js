import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="container text-center bg-primary">
            <Row className=''>
                <Col>
                    <h3>logo site</h3>
                </Col>
                <Col>
                    <h3>Contuct us</h3>
                </Col>
                <Col>
                <h3>
                    food search
                </h3>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;