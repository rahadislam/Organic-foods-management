import React from 'react';
import { Accordion, Carousel, Col, Container, ProgressBar, Row } from 'react-bootstrap';
import furts from '../../images/fruts.png';
import Foods from '../Foods/Foods';
import './home.css';

const Home = () => {
    return (
        <>
            <div className='bg-light'>
                <Container className="py-5">
                    <Row>
                        <Col sm={7} className="pt-5">
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
            <Carousel>
                <Carousel.Item>
                    <img
                        height={600}

                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1599076480160-0a92fb6315e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZydXRzJTIwYmFubmFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt="First slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height={600}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1454526722187-c415145319f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZnJ1dHMlMjBiYW5uYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                        alt="Second slide"
                    />

                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img height={600}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1533998616656-0809bbef1040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZydXRzJTIwYmFubmFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt="Third slide"
                    />

                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className="our-service">
                <Row>
                    <Col className='my-5'>
                        <h2 className="text-center info">About us </h2>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Why buy Orgnic Foods</Accordion.Header>
                                <Accordion.Body>
                                We all know we need to be eating organic but there are several reasons we don’t. One of the main ones being cost and that for some it’s inaccessible. Choosing organic means we’re selecting items that are free of pesticides and harmful chemicals that have been linked to cancer and hormonal disruption. While many of us may not be able to eat organic all the time, the Environmental Working Group put out a list that highlights the different types of produce that with the highest pesticide concentrations. This allows us, as shoppers, to make selective and informed decisions to go organic when we need to. With the promise of fresh fruits and vegetables as the weather warms up, we thought we should have another look at the list of these top 10 organic fruits and veggies that we all need to be eating. Have you made the organic switch?
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Our best Apples Friuts ?</Accordion.Header>
                                <Accordion.Body>
                                They say an apple a day keeps the doctor away…well, maybe not if it’s a conventional apple. Apples are number one on the Environmental Working Group’s “Dirty Dozen” list, meaning they’re the most heavily sprayed with pesticides. According to the analysis, 99 percent of apple samples, after washing, tested positive for at least one pesticide residue.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                    </Col>
                    <Col className='my-5'>
                        <h3>Home Service:</h3>
                        <ProgressBar animated now={45} />
                        <h3>Help:</h3>
                        <ProgressBar variant="info" now={90} />
                        <h3>Payment Service:</h3>
                        <ProgressBar variant="warning" now={60} />
                        <h3>Organic:</h3>
                        <ProgressBar variant="danger" now={80} />
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Home;