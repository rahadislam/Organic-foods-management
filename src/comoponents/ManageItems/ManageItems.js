import React from 'react';
import useFoods from '../../hooks/useFoods';
import Manags from './Manags/Manags';

const ManageItems = () => {
    const [foods]=useFoods();
    return (
        <div>
            <h1>Manage Items {foods.length}</h1>
            <table class="table table-hover table-light table-responsive">
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
                        foods.map(food=><Manags 
                        key={food._id}
                        food={food}
                        ></Manags>)
                    }
                    
                </tbody>
            </table>
        </div>
    );
};

export default ManageItems;