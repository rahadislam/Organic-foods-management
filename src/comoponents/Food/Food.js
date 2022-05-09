import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Food = ({ food }) => {
    const { description, img, price, name,quantity,supplier,_id } = food;
    return (
        <Col className="my-3 ">
            <Card className="shadow p-3 mb-5 bg-white rounded my-3" style={{ width: '20rem' }}>
                <Card.Img variant="top" height={200} src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    Description:{description.slice(0,100)}
                    </Card.Text>
                    <p className='card_propt'>Price: ${price}</p>
                    <p className='card_propt'>Quantity:{quantity}</p>
                    <p className='card_propt'>Supplier:{supplier}</p>
                    
                    <Link className='update_btn' to={`/updateitems/${_id}`} variant="primary" >Update</Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Food;