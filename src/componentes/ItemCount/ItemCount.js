import "./itemCount.css"
import { useState} from "react"

export const ItemCount = ( onAdd, stock) =>{

    const [count, setCount] =useState (1)

    const decrease =()=>{
        setCount( count -1)
    }

    const increse =()=>{
        setCount (count +1)
    }

    const agregarProducto =()=>{
        onAdd(count)
    }

    return(
        <>
        <div className="counter">
            <button disabled={count <= 0}  onClick={decrease}> - </button>
            <span> {count}</span>
            <button disabled={count >= stock }  onClick={increse}> + </button>
            <button disabled= {stock <= 0 } onClick ={agregarProducto} > Agregar al carrito</button>
        </div>
        </>
    )
}

export default ItemCount

