import React, { Fragment } from 'react';
import ProductComponent from "./ProductComponent"
import ViewCartProducts from "./ViewCartProducts"

/* componente donde incluimos el componente de vista y el componente copn todos los prodcutos */
const CartComponet=(props) =>{
    return (
        <Fragment>
          <ViewCartProducts/>
          <ProductComponent/>
        </Fragment>
    );
}

export default CartComponet;