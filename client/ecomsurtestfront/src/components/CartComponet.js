import React, { Fragment } from 'react';
import ProductComponent from "./ProductComponent"
import ViewCartProducts from "./ViewCartProducts"
const CartComponet=(props) =>{
    return (
        <Fragment>
          <ViewCartProducts/>
          <ProductComponent/>
        </Fragment>
    );
}

export default CartComponet;