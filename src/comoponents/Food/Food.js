import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Food = ({ food }) => {
    const { description, img, price, name } = food;
    return (
        <Col className="my-3">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">Update</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Food;