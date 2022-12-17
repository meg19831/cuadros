import React,  {useState, useEffect}from "react";
import Loading from "../Loading/Loading"
import ItemList from "../ItemList/ItemList";
import "./item-list-container.css"


const ItemListContainer = () =>{
        const[prod, setProductos ]= useState ([]);
        const [loading, setLoading]= useState(true);

  

        /* const {categoria}= useParams (); */

      
  
    useEffect(()=>{
      setTimeout (()=>{
        fetch("../data/data.json")
      .then((res)=>res.json())
      .then((obj)=>setProductos(obj))
      .finally(()=> setLoading(false))
      },2000)
      },[])
      

      
    
    return(  
<>
{
  loading 
  ? <Loading/>
  :
        <div className="productos-list">
         <ItemList prod = {prod}/>
         
        </div>
}
</>
    )
}
export default ItemListContainer



    
  
  