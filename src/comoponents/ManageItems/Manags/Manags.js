import React from 'react';
import './Manags.css'

const Manags = ({food}) => {
    const { img, price, name,quantity,supplier,_id} = food;

    const handelDelete=(id)=>{
        console.log(id);
    }
    return (
        <tr>
            <td className='py-5'>{_id}</td>
            <td className='py-5'>{name}</td>
            <td className='py-5'>{supplier}</td>
            <td className='py-5'><img src="https://www.pikpng.com/pngl/b/77-772704_low-cost-icon-cheap-price-icon-clipart.png" height={20} alt="" /> {price}</td>
            <td className='py-5'>{quantity}</td>
            <td className='catalog'><img src={img} height={100} width={100} alt="" /> <button className='my-3 mx-3 delete_btn' onClick={()=>handelDelete(_id)}>Delete</button></td>
        </tr>
    );
};

export default Manags;