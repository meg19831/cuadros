import React,  {useState, useEffect}from "react";


import ItemList from "../ItemList/ItemList";

import "./item-list-container.css"


const ItemListContainer = () =>{
        const[prod, setProductos ]= useState ([]);

      
  
    useEffect(()=>{
      fetch("../data/data.json")
      .then((res)=>res.json())
      .then((obj)=>setProductos(obj))
    })

      
    
    return(  

        <div className="productos-list">
         <ItemList prod = {prod}/>
         
        </div>

    )
}
export default ItemListContainer



    
  
  