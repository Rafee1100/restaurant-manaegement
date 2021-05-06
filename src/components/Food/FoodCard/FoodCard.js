import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const FoodCard = (props) => {
    const {id,title,img}=props.food
    const history=useHistory();
    const handleClick=(id)=>{
        const url=`/${id.id}`
        history.push(url)
    }
    return (
        <Col md={4} className="mb-4" onClick={()=>handleClick(props.food)} >
            <Card style={{height:'400px'}}>
                <Card.Img style={{height:'300px'}}  src={img} />
                <Card.Title style={{height:'80px'}}  className="d-flex align-items-center justify-content-center">{title}</Card.Title>
                
            </Card>
        </Col>
    );
};

export default FoodCard;