import { Card, Col, Row, Toast, ToastContainer } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useUpdate from '../../hooks/useUpdate';

const ProductUpdate = () => {
    const { id } = useParams();
    const { register, handleSubmit } = useForm();
    const [update]=useUpdate(id);
    console.log(update);

    
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
                alert("Successfully update")

            })


    };

    return (
        <div className="container">

            <Row>
                <Col>
                 <Card className="shadow p-3 mb-5 bg-white rounded my-3" style={{ width: '20rem' }}>
                <Card.Img variant="top" src={update.img} />
                <Card.Body>
                    <Card.Title>{update.name}</Card.Title>
                    <p>Price:{update.price}</p>
                    <p>Quantity:{update.quantity}</p>
                    <p>Supplier:{update.supplier}</p>
                </Card.Body>
            </Card> 

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