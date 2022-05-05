import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import furts from '../../images/fruts.png';
import Foods from '../Foods/Foods';
import './home.css';

const Home = () => {
    return (
        <>
        <div className='bg-light'>
            <Container className="py-5">
                <Row>
                    <Col sm={7}  className="pt-5">
                        <h2 className='header-text pb-3'>Our Organic Food</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis exercitationem fugit, cumque nostrum quibusdam culpa necessitatibus sequi quae officiis assumenda maxime repellat vel aspernatur odio iusto adipisci! Hic, nam ratione.</p>
                        <button className="visit my-3">Visit</button>
                        <div className="social_icon">
                            <img className='shadow bg-body' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Facebook-icon-1.png/640px-Facebook-icon-1.png" alt="" />
                            <img className='shadow bg-body' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="" />
                            <img className='shadow bg-body' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png" alt="" />
                            <img className='shadow bg-body' src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="" />
                        </div>
                    </Col>
                    <Col sm={5}>
                        <img className="img-fluid" src={furts} alt="" />
                    </Col>
                </Row>
                
            </Container>    
        </div>
        <Foods></Foods>
        </>
    );
};

export default Home;