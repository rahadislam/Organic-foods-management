import React from 'react';
import { useForm } from "react-hook-form";
import './Additems.css';

const Additems = () => {
    const { register, handleSubmit} = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/foods',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result);
        })
    };

    
    return (
        <div className='w-50 mx-auto'>
            <h3 className='addItems'>Add Food Items</h3>
            <form className='add_from' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Name' {...register("name")} /> <br />
                <textarea className='description' placeholder='Description' {...register("description")} /> <br />
                <input placeholder='Price' type="text" {...register("price")} /> <br />
                <input placeholder='Quantity' type="text" {...register("quantity")} /> <br />
                <input placeholder='Img' type="text" {...register("img")} /><br />
                <input placeholder='Supplier Name' type="text" {...register("supplier")} /> <br />
                <input className='add_btn' type="submit" value='Add Items'/>
            </form>
        </div>
    );
};

export default Additems;