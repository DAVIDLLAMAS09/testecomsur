import React from 'react';
import { Container, Row } from "react-bootstrap"
import SingleProduct from "./SingleProduct"
import { connect } from "react-redux"

/* componente de productos donde le pasamos a un componente hijo toda la informacion para ser consumida y/o modificada */

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

/* funcion que nos retorna el estado de la aplicacion y cada vez que se modifica algo del estado se vualve a llamar y nos trae los nuevos datos del estado */
const mapStateToprops=(state)=>{
    return {
        state
    }
}

/* conectamos nuestro componente al store de redux */
export default connect(mapStateToprops)(ProductComponent);
