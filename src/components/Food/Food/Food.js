import React from 'react';
import { Container, Row } from 'react-bootstrap';
import foodCollection from '../../../Data/FoodData'
import FoodCard from '../FoodCard/FoodCard';


const Food = (props) => {
    const {item}=props
    const breakfast=foodCollection.slice(0,10)
    const lunch=foodCollection.slice(10,20)
    const dinner=foodCollection.slice(20,30)
    return (
       <Container>
            <Row className="mt-5">
            {
                item==='Breakfast' ?breakfast.map(food=><FoodCard key={food.id} food={food}/>):item==='Lunch'?lunch.map(food=><FoodCard key={food.id} food={food}/>):dinner.map(food=><FoodCard key={food.id} food={food}/>)
            }
        </Row>
       </Container>
    );
};

export default Food;