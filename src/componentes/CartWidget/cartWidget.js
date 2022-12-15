import React from "react";
import Carrito from  '../Navbar/carrito.png' 
import { Link } from "react-router-dom";
import { useCartContext } from "../ItemDetail/ItemDetail";
export const CartContext = React.createContext ('')


export const CartWidget =() => {

    const {totalProductos} = useCartContext();
    return (
        <div className=" cartWidget">
            <Link to= "/cart"> 
                <img src= {Carrito } className = "carrito"  alt = {Carrito} />
            </Link>
            <spam> {totalProductos()|| " "} </spam>
        </div>
    )
}

export default CartWidget;

