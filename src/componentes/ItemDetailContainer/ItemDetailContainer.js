import React, { useEffect, useState } from "react"
import ItemDetail  from "../ItemDetail/ItemDetail"
import {useParams} from "react-router-dom";
import "./itemDetailContainer.css"




export const ItemDetailContainer = () => {
    const [prod, setProductos] = useState([]);
  
      const {id} = useParams ();


    useEffect(() => {
        
    fetch('../data/data.json')
    .then((res) => res.json())
    .then((data)=>setProductos(data.find((item)=> item.id === parseInt(id))))
},[id])
    
  
    return(

    <div className="container-detail">
            <ItemDetail prod={prod}/>
        </div>
    );
          }
  export default ItemDetailContainer;
  
  /* const cuadros = [
  {
    "titulo": "Linea Amor",
    "id": 1,
    "precio": 2000,
    "imagen":  "../assets/img/amor.jpg",
    "contenido": "Cuadro",
  },
  {
    "titulo": "Linea Flores",
  "id": 5,
  "precio": 4000,
  "imagen": "../assets/img/flores.jpg",
  "contenido":
    "Cuadro"
},
]; */

//PROMESA MOCKEADA

/* useEffect(() => {
        const  getData = new Promise((resolve) => {
          setTimeout (()=> {
            resolve (cuadros);}
            ,2000);
        })

        if (categoriaId) {
          getData.then (res=> setProductos(res.filter(cuadro =>cuadro.id=== parseInt (categoriaId))))
        }else{
          getData.then (res=> setProductos(res))
        }
      },[categoriaId]) */
        