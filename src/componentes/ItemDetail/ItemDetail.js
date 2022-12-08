import React from "react";
import './itemDetail.css'
import {  Link} from "react-router-dom";




const ItemDetail = ({prod }) => {
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
            <div >
                <Link to = "/productos" ><button className="boton"> Atrás</button></Link>
            </div>
        </>
    )
}

export default ItemDetail;