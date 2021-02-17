import '../App.css';
import React,{useState} from 'react';
import { Col, Button }from "react-bootstrap"

/* componente hijo de productComponent */
const SingleProduct=({ currency, id, imageURL, name, price, dispatch,cart })=> {
    const [thisProduct,setThisProduct]=useState({currency, id, imageURL, name, price})
    const [list,setList]=useState(cart);
    const list2 = cart
    
    /* funcion que agrega un producto al carrito y actualizamos el store de redux a traves de un dispatch */
    const addToCart =()=>{
        let copyList = list2
        console.log(copyList)
        let existProduct = copyList.findIndex(elem=>thisProduct.id === elem.id)
        console.log("existe: ",existProduct) 
        
        /* si el producto existe se modifica el objeto cambiando su precio y actualizamos el estado */
        if(existProduct !== -1){
            console.log("dentro de la condicion: ",list2)
            let indexProduct = list2.findIndex(elem=> elem.id === thisProduct.id)
            console.log("index condicion: ",indexProduct)
          
            let elementExist= list2.find(element=> element.id === thisProduct.id)
            let newobject = {...elementExist,price:elementExist.price+thisProduct.price} 
            list2[indexProduct] = newobject
            

            dispatch({
                type:"setProductToCart",
                payload:list2
            })

           return false
        }
        setList(list2.push(thisProduct) )
        
        console.log("statte list",list)
        dispatch({
            type:"setProductToCart",
            payload:list2
        })
    }
    
    return (
            <Col md={4}>
                <section className="product-card-single">

                
                <img src={imageURL} alt={name}/>
                <div className="product-single-name">{name}</div>
                <div className="product-single-price">{currency}{price}</div>
                <Button variant="primary btn-cart add-cart" onClick={addToCart}>Add item to cart</Button>
                </section>
               
            </Col>  
    );
}

export default SingleProduct  