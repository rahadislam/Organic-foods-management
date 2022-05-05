import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Food from '../Food/Food';

const Foods = () => {
    const [foods,setfoods]=useState([]);
    useEffect(()=>{
        fetch('https://young-gorge-58267.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setfoods(data));
    },[])
    return (
        <div className='container my-5 text-center'>
            <h1>Organic Products:{foods.length}</h1>
            <Row className="ms-5">
                {foods.slice(0,6).map(food=><Food
                 key={food._id}
                 food={food}
                ></Food>)}
            </Row>


        </div>
    );
};

export default Foods;