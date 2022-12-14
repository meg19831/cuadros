import React, { useContext } from "react";
import cartVacio from "./cart-vacio.png"
//contexto

import { CartContext } from "../../contexts/CartContext";


const Cart =()=>{

        const {cart,clearCart,removeProducto,totalPrice,} = useContext (CartContext)
    
        return(
            <div className="cart-map">
{
                cart.length === 0 ? 
                <div className="contenedor-vacio-finalizar">
                    <h4>Tu carrito está vacío</h4>
                    <img src= {cartVacio} alt = {cartVacio} className="carrito-vacio"/>
                    <button className="btn-principal" > Empezar a comprar!</button>
                </div> :

                <div className="cart-map">
                    
            {
                cart.map((prod, indice) =>
                <div className="detail-container" key={indice}>
                    <div className="cardDetalleCarrito">
                        <div className="contenedor-imagen">
                        <img src={prod.imagen} alt="imagen de produto seleccionado"/>                    
                        </div>

                        <div className="descripcion-articulo">
                        <h5>{prod.titulo} {prod.categoria}</h5>
                        <div className="contenedor-detalles">
                            <p className='itemCount'></p>
                            <p className='precio_articulo'>Precio por unidad: ${prod.precio}</p>
                            <span>Cantidad elegida: {prod.quantity}</span>
                            <p>Subtotal: $ {prod.precio * prod.quantity }</p>

                            <button className="btn-secundario" onClick={() => removeProducto(prod.id)}>Eliminar producto</button>

                        </div>

                        </div>

                    </div>
                </div>
                )}
                <div className="contenedor-vacio-finalizar">
                    <p>Total: ${totalPrice()}</p>
                    <div className="botones-carrito">
                    <button className="btn-principal" onClick={clearCart}>Vaciar carrito</button>
                    
                    <button className="btn-principal"> Finalizar compra</button>
                    
                    </div>

                </div>
            </div>
            }            
        </div>
    );
}

export default Cart;