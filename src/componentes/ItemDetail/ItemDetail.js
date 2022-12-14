import React, {useContext, useState} from "react";
import './itemDetail.css'
import {  Link} from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../contexts/CartContext";



 export const useCartContext = () => useContext( CartContext); 


const ItemDetail = ({prod }) => {


    const [goToCart, setGoToCart]= useState (false);
    
    const {addProduct}= useCartContext()


    const onAdd = (quantity)=>{
        setGoToCart (true)
        addProduct(prod, quantity)
    }

    return(
        < >
            <div className="detail">
                <p className="titulo-cuadros"> 
            <strong>{prod.titulo}</strong>
                </p> 
                <img src = {prod.imagen}  className="imagen-detail" alt = {prod.imagen}/> 
                <p className="precio">Precio $ {prod.precio}</p>
                <p className="contenido-cuadros">{prod.contenido}</p>
                <p className="contenido-id"> {prod.id}</p>
            </div>
            {/* <button disabled= {stock <= 0 } onClick ={agregarProducto} > Agregar al carrito</button> */}
            
                {
                    goToCart 
                    ? <Link to= "/cart" ><button className="boton-terminar">Terminar Compra </button></Link>
                    
                    :<ItemCount initial = {1} stock ={5} onAdd ={onAdd}/> 
                }
            
            <div >
                <Link to = "/productos" ><button className="boton"> Atrás</button></Link>
            </div>
        </>
    )
}

export default ItemDetail;