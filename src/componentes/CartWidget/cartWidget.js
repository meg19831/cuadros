import React from "react";
import Carrito from  '../Navbar/carrito.png' 
import { Link } from "react-router-dom";


export const CartWidget =() => {
    return (
        <div className=" cartWidget">
            <Link to= "/cart"> 
                <img src= {Carrito } className = "carrito"  alt = 'carrito' />
            </Link>
        </div>
    )
}

export default CartWidget;

