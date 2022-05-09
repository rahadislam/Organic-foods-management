import React from 'react';
import useFoods from '../../hooks/useFoods';
import './ManageItems.css';

const ManageItems = () => {
    const [foods,setfoods]=useFoods();
    const handelDelete=(id)=>{
        const url=(`http://localhost:5000/foods/${id}`);
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            const uiUpdate=foods.filter(fd=>fd._id !== id);
            setfoods(uiUpdate);
            console.log(data);
        })

    }
    return (
        <div>
            <h1>Manage Items {foods.length}</h1>
            <table className="table table-hover table-light table-responsive">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name <img height={20} src="https://d2v9ipibika81v.cloudfront.net/uploads/sites/210/Profile-Icon.png" alt="" /></th>
                        <th scope="col">Supplier <img src="https://cdn-icons-png.flaticon.com/512/4237/4237837.png" height={20} alt="" /></th>
                        <th scope="col">Price <img src="https://www.pikpng.com/pngl/b/77-772704_low-cost-icon-cheap-price-icon-clipart.png" height={20} alt="" /></th>
                        
                        <th scope="col">Quantity <img src="https://icon-library.com/images/quantity-icon/quantity-icon-3.jpg" height={20} alt="" /></th>
                        <th scope="col">Fruits Catalog <img src="https://icon-library.com/images/catalog-icon/catalog-icon-26.jpg" height={20} alt="" /></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        foods.map(food=><tr key={food._id}>
                            <td className='py-5'>{food._id}</td>
                            <td className='py-5'>{food.name}</td>
                            <td className='py-5'>{food.supplier}</td>
                            <td className='py-5'><img src="https://www.pikpng.com/pngl/b/77-772704_low-cost-icon-cheap-price-icon-clipart.png" height={20} alt="" /> {food.price}</td>
                            <td className='py-5'>{food.quantity}</td>
                            <td className='catalog'><img src={food.img} height={100} width={100} alt="" /> <button className='my-3 mx-3 delete_btn' onClick={()=>handelDelete(food._id)}>Delete</button></td>
                        </tr>)
                    }
                    
                </tbody>
            </table>
        </div>
    );
};

export default ManageItems;