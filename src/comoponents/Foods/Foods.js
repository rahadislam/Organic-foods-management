import { Row } from 'react-bootstrap';
import useFoods from '../../hooks/useFoods';
import Food from '../Food/Food';

const Foods = () => {
    const [foods]=useFoods();
    
    return (
        <div className='container my-5 text-center'>
            <h1>Organic Products:{foods.length}</h1>
            <Row className="ms-5">
                {/* slice(0.6) */}
                {foods.map(food=><Food
                 key={food._id}
                 food={food}
                ></Food>)}
            </Row>


        </div>
    );
};

export default Foods;