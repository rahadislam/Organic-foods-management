import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const ProductUpdate = () => {
    const { id } = useParams();
    const { register, handleSubmit } = useForm();
    
    const onSubmit = data => {
        fetch(`http://localhost:5000/foods/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);

            })


    };

    return (
        <div className="container">
            <Row>
                <Col>
                {/* <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    Description:{description}
                    </Card.Text>
                    <p>Price:{price}</p>
                    <p>Quantity:{quantity}</p>
                    <p>Supplier:{supplier}</p>
                    
                    <Link to={`/updateitems/${_id}`} variant="primary" >Update</Link>
                </Card.Body>
            </Card> */}

                </Col>
                <Col>
                    <h3 className='addItems'>Update Food Items</h3>
                    <form className='add_from' onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder='Name' {...register("name")} /> <br />
                        <input placeholder='Price' type="text" {...register("price")} /> <br />
                        <input placeholder='Quantity' type="text" {...register("quantity")} /> <br />
                        
                        <input className='add_btn' type="submit" value='Update Items' />
                    </form>
                </Col>
            </Row>
        </div>
    );
};

export default ProductUpdate;