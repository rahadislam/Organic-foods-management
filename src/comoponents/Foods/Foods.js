import { Row } from 'react-bootstrap';
import useFoods from '../../hooks/useFoods';
import Food from '../Food/Food';

const Foods = () => {
    const [foods]=useFoods();
    
    return (
        <div className='container my-5 text-center'>
            <h1>Organic Products</h1>
            {/* {
                foods && <div className="spinner-border" role="status">
                <span className="sr-only"></span>
                </div>
            } */}
            
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