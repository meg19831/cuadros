import './inicio.css'
import galeria  from "../Inicio/galeria.png";

import React, { useEffect } from 'react';


const Inicio = () => {
  useEffect(() => {
    

    return () => {
      
    };
  }, []);

  return (
    <div className='inicio-container'> 
    <div>
      <h1 className='titulo-inicio'>Elige las Laminas que mas te gustan para tu Hogar</h1>
      < img src= {galeria }  className = "galeria"  alt = 'galeria' />
    </div>
    </div>
  );
};

export default Inicio;