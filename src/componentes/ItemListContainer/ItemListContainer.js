import React,  {useState, useEffect}from "react";
import { useParams } from "react-router-dom";


import ItemList from "../ItemList/ItemList";

import "./item-list-container.css"


const ItemListContainer = () =>{
        const[prod, setProductos ]= useState ([]);

        const {categoria}= useParams ();

      
  
    useEffect(()=>{
      fetch("../data/data.json")
      .then((res)=>res.json())
      .then((obj)=>{
        categoria
        ? setProductos (obj.metodo)
        : setProductos(obj)});
      })

      
    
    return(  

        <div className="productos-list">
         <ItemList prod = {prod}/>
         
        </div>

    )
}
export default ItemListContainer



    
  
  