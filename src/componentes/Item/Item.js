
import './item.css'

import React from 'react';
import { Link } from "react-router-dom";




const Item = ({prod})=> {

/*   const [contador, setContador] = useState(0);
      
  const buttonAgregar = () => {
    setContador(contador + 1);
  };

  const buttonRestar = () => {
      setContador(contador - 1);
    }; 

useEffect(()=>{

}, [contador]) */


    return(
        
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
            {/* <div className='botones'>
                  <button disabled={contador <= 0} onClick={buttonRestar} className = "button">-</button>
                  <button disabled={contador >=5} onClick={buttonAgregar} className = "button">+</button>
                </div> */}
          </div>
         {/* <p className='contador'>En el carrito <br></br>{contador}</p> */}
        </div >
        
        )

}

export default Item 