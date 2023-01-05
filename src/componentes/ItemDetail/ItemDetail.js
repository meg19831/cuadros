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
            <div className="item_detail">
                <p className="item_detail_titulo_cuadros"> 
                    {prod.titulo}
                </p> 
                <div className="div-imagen-detail">
                <img src = {prod.imagen}  className="imagen-detail" alt = {prod.imagen}/> 
                <p className="precio">Precio $ {prod.precio}</p>
                <p className="contenido-cuadros">{prod.contenido}</p>
                <ItemCount prod = {prod} initial = {1} stock ={5} onAdd ={onAdd}/> 
                </div>
                
            </div>
                <Link className="terminar" to= "/cart" ><button  className="boton-terminar" >Terminar Compra </button></Link>
                    
                <Link className="terminar"  to = "/productos" ><button className="boton"> Atrás</button></Link>
        </>
    )
}

export default ItemDetail;