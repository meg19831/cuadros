import React from "react";
import './itemDetail.css'
import {  Link} from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount"




const ItemDetail = ({prod }) => {

    


    /* const [goToCart, setGoToCart]= useState(false) */

    

    /* const onAdd = (quantity)=>{
        setGoToCart (true)
       } */



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
                    <ItemCount/>
            </div>
            {/* <button disabled= {stock <= 0 } onClick ={agregarProducto} > Agregar al carrito</button> */}
        
                {/* {
                    goToCart 
                    ? <Link to= "/cart" prod = {prod} key = {prod.id}> Terminar Compra</Link>
                    :<ItemCount initial = {1} stock ={5} onAdd ={onAdd}/> 
                } */}
            
            <div >
                <Link to = "/productos" ><button className="boton"> Atrás</button></Link>
            </div>
        </>
    )
}

export default ItemDetail;