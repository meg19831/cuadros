
import React, { useContext } from "react";
import cartVacio from "./empty-cart.png"
import { Link } from "react-router-dom";

import "./cart.css"
//contexto

import { CartContext } from "../../contexts/CartContext";


const Cart =({id})=>{

        const {cart,clearCart,removeProducto,totalPrice,eliminarPorUnidad} = useContext (CartContext)

      
        
        return(
            <div className="contenedor_cart">
{
                cart.length === 0 ? 
                <div className="contenedor-vacio-finalizar">
                    <h4 className="contenedor-titulo">Tu carrito está vacío</h4>
                    <img src= {cartVacio} alt = {cartVacio} className="img-carrito-vacio"/>
                    <Link to = "/productos" ><button className="btn-empezar-compra" > Empezar a comprar!</button></Link>
                </div> :

                <div className="cart-map">
                    
            {
                cart.map((prod, indice) =>
                <div className="cart-container" key={indice}>
                    <div className="cart_Detalle_Carrito">
                        <div className="contenedor_cart_imagen">
                        <img className="cart_imagen_map" src={prod.imagen} alt= {prod.imagen}/>                    
                    </div>

                        <div className="descripcion_cart_articulo">
                        <h5 className="titulo-cart">{prod.titulo}</h5>
                        <div className="descriptcion_articulo_cart">
                            <p className='descripcion_parrafo_cart'></p>
                            <p className='precio_articulo_cart'><strong>Precio por unidad:</strong> ${prod.precio}</p>
                            <span><strong>Cantidad elegida:</strong> {prod.quantity}</span>
                            <p><strong>Subtotal: </strong>$ {prod.precio * prod.quantity }</p>
                            <p><strong>Total:</strong> ${totalPrice()}</p>
                            <button className='button' disabled={prod.quantity <= 0 && removeProducto(prod.id)} onClick={() => eliminarPorUnidad(prod.id)}> - </button>
                            <button className="btn-secundario" onClick={() => removeProducto(prod.id)}>Eliminar producto</button>
                            
                        </div>
                        </div>
                    </div>
                </div>
                )}
                <div className="contenedor-finalizar">
                    <div className="botones-carrito">
                    <button className="btn-empezar-compra" onClick={clearCart}>Vaciar carrito</button>
                    <Link className="terminar"  to= "/form"><button className="btn-empezar-compra" > Finalizar compra </button></Link>
                    </div>
                </div>
            </div>
            }            
        </div>
    );
}

export default Cart;