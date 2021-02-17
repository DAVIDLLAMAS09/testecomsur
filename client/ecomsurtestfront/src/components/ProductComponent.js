import React from 'react';
import { Container, Row } from "react-bootstrap"
import SingleProduct from "./SingleProduct"
import { connect } from "react-redux"

const ProductComponent=({state,dispatch})=> {  
    const { data, cart} = state
    return (
        <Container>
             <Row>
                {
                    data.map(product=> <SingleProduct  key={product.id} {...product} dispatch={dispatch} cart={cart}/>)
                } 
            </Row>
        </Container>
    );
}

const mapStateToprops=(state)=>{
    return {
        state
    }
}

export default connect(mapStateToprops)(ProductComponent);
