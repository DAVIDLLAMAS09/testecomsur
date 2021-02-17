import React, { useState } from 'react';
import { Container, Button, Modal } from 'react-bootstrap';
import {connect} from "react-redux"


/* componente donde se visualiza si hay productos en el carrito */
const ViewCartProducts=({state, dispatch})=> {
    const [modalShow, setModalShow] = useState(false);
    const { cart } = state;
    console.log(cart)
  
    let suma = cart.length > 0 ? cart.reduce((sum,value)=> sum + value.price,0) : 0;
    console.log(suma)
   
    return (
        <div className="header-cart">
            <div className="background-header"></div>
            <Container>
                {/* si esta vacio el estado de cart mandamos un aviso en caso contrario mostramos un total y un boton para abrir el modal del carrito */}
                {
                    cart.length > 0 ? (
                        <>
                            <h2>View shopping cart</h2>
                            <Button variant="primary btn-cart-view add-cart " onClick={()=>setModalShow(true)}>View Products - ${suma}</Button>
                            <ComponentModalProducts show={modalShow} onHide={()=>setModalShow(false)} cart={cart} total={suma} dispatch={dispatch}/>
                        </>
                    ) : (
                        <div className="sidebar-cart">
                            <h2>Your cart is currently empty.</h2>
                            <Button variant="primary btn-cart-view add-cart" >Total  ${suma}</Button>
                        </div>
                    )
                }
            </Container>
        </div>
    );
}


/* componente del modal de productos que hay en el carrito y donde se elimina un producto y-o varios */
const ComponentModalProducts=({cart,total,dispatch,...props})=> {
    const [onCart,setOnCart]=useState(cart)
    let onCart2 = [...cart]
   
    const removetoCart =(pro)=>{
        //console.log(onCart2)  
        //console.log("produxtos",onCart2)
       // console.log(index)
        let removeProduct = onCart2.filter(item => item.id !== pro.id)
        //alert(JSON.stringify(removeProduct))
        setOnCart(removeProduct)
         dispatch({
             type:"deleteProductToCart",
             payload:removeProduct
         })
        
    }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="text-center" closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {
                onCart.map(elem=> (
                    <div class="card" style={{marginTop:20,boxShadow: 'rgb(46 208 72 / 28%) 0px 0px 25px',border:'none'}}>
                        <div className="card-content">
                        <div className="card-body">
                            <div className="media d-flex">
                            <div className="align-self-center">
                                <img src={elem.imageURL} alt={elem.name} style={{width:'20%',borderRadius:20}}/>
                                <p className="name-product-modal">{elem.name}</p>
                            </div>
                            <div className="media-body text-right" >
                                <h3>{elem.currency}{elem.price}</h3>
                               <Button style={{position:'absolute',right:0,bottom:0}} onClick={()=>removetoCart(elem)} variant="danger">Remove item from cart</Button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                ))
            }
            <p style={{textAlign:'right',fontSize:18,fontWeight:'bold',marginTop:10,paddingRight:10}}>TOTAL: MXN ${total}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  const mapsStateToprops =(state)=>{
    return {
        state
    }
}
export default connect(mapsStateToprops)(ViewCartProducts)