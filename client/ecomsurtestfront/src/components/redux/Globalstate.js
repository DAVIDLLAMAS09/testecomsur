import React, { useEffect, useState } from 'react';
import { createStore } from "redux";
import {Provider} from "react-redux";


export const SetProductToCart = "setProductToCart"
export const deleteProductToCart = "deleteProductToCart"



function Globalstate({children}) {
    const [data,setData]=useState([])
    const endpoint = 'http://localhost:1337/items';

   

    const getProducts=()=>{
        fetch(endpoint,{
        method:"GET",
        headers:{
            'Content-Type': 'application/json'
        } 
        })
        .then(response=> response.json())
        .then(data=>{
            setData(data.catalog)
        })
        .catch(err=>console.log(err))
    }

    const initialState ={
        data,
        cart:[],
        totalPrice:0
    }

    const cartShopping = ( state = initialState,action)=>{
        console.log(action)
        switch (action.type) {
            case SetProductToCart:{
                return {
                    ...state,
                    cart:action.payload
                }
            }
            case deleteProductToCart:{
                return{
                    ...state,
                    cart:action.payload
                }
            }
                
            default:
                return state;
        }
    }
    const store = createStore(cartShopping)

    useEffect(()=>{
        getProducts();
    },[])

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}

export default Globalstate;