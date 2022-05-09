import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useFoods from '../../hooks/useFoods';

const Myitems = () => {
    const [foods]=useFoods(); 
    const [user] = useAuthState(auth);

    return (
        <div>
            <h1 className='my-4 text-center'>Owner Name:{user.displayName}</h1>
            <p className='card_propt'>Total Products:{foods.length}</p>
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
                            <td className='py-5'></td>

                            <td className='catalog'><img src={food.img} height={100} width={100} alt="" /></td>
                        </tr>)
                    }
                    
                </tbody>
            </table>
        </div>
    );
};

export default Myitems;