import "./itemCount.css"
import { useState} from "react"

export const ItemCount = ({initial, stock, onAdd} ) =>{

    const [count, setCount] =useState (initial)

    const decrease =()=>{
        setCount( count -1)
    }

    const increse =()=>{
        setCount (count +1)
    }

    const agregarProducto =()=>{
        
        onAdd  (count)
    }

    return(
        <>
        <div className="counter">
            <button disabled={count <= 0}  onClick={decrease} className = "button">  -  </button>
            <span className="span">  {count}  </span>
            <button disabled={count >= stock }  onClick={increse} className = "button">  +  </button>
            <button disabled= {stock <= 0 } onClick ={agregarProducto} className="botonAgregar"> Agregar al carrito</button>
        </div>
        </>
    )
}

export default ItemCount

