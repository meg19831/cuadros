import React from "react";
import Carrito from  '../Navbar/carrito.png' 
import { Link } from "react-router-dom";
import { useCartContext } from "../ItemDetail/ItemDetail";
import "./cartWidget.css"
export const CartContext = React.createContext ('')


export const CartWidget =() => {

    const {totalProductos} = useCartContext();
    return (
        <div className=" cartWidget">
            <Link to= "/cart"> 
                <img src= {Carrito } className = "carrito"  alt = {Carrito} />
            </Link>
            <p className="cantidad"> {totalProductos()|| " "} </p>
        </div>
    )
}

export default CartWidget;

