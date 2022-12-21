import './item.css'
import { Link } from "react-router-dom";



const Item = ({prod})=> {
  
    return(
        <>
        {
        
        <div className='item2'>
        
        <img src ={prod.imagen}className="imagen" alt ={prod.id}/>
        <p className="card-titulo"> 
        {prod.titulo}
        </p>
        <p className="precio">{prod.precio}</p>
        <p className="contenido-cuadros">{prod.contenido}</p>
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