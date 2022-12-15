import './item.css'
import React from 'react';
import { Link } from "react-router-dom";
import Loading from '../Loading/Loading';





const Item = ({prod})=> {


    return(
        <>
        {

            Object.keys(prod).length === 0 ? 
            <div><Loading/></div> :
        <div className='item2'>
        
        <img src ={prod.imagen}className="imagen" alt ={prod.id}/>
        <p className="card-titulo"> 
            <strong>{prod.titulo}</strong>
        </p>
        <p className="precio">{prod.precio}</p>
        <p className="contenido-cuadros">{prod.contenido}</p>
        <p className="producto-id"> {prod.id}</p>
          <div className =" buttonContainer">
            <div className='botonDetalle'>
              <Link to={`/item/${prod.id}`} className="buttonHand"><button className='detalle'>Ver Detalle</button></Link>
          </div>
          </div>
        </div >
        }
        </>
        )

}

export default Item 