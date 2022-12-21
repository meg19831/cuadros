import React,  {useState, useEffect}from "react";
import Loading from "../Loading/Loading"
import { getFirestore,collection,getDocs, query, where } from "firebase/firestore";
import ItemList from "../ItemList/ItemList";
import "./item-list-container.css"
import { Link, useParams } from "react-router-dom";


const ItemListContainer = () =>{
  const[prod, setProductos ]= useState ([]);
  const [loading, setLoading]= useState(true);
  const { categoriaId } = useParams()



  useEffect(() => {

    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'productos');
    if(categoriaId){
      const queryFilter = query(queryCollection, where('categoria', '==', categoriaId))
      getDocs(queryFilter)
        .then(res => setProductos(res.docs.map(prod => ({id:prod.id, ...prod.data()}))))
    }else{
      getDocs(queryCollection)
      .then(res => setProductos(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
      .finally(()=> setLoading(false))
    }
  
}, [categoriaId]);
  
      
      return(  
<>
{
  loading 
  ? <Loading/>
  :
  <>
  <div className="contenedor-categorias">
        <div className="button-container">
          <Link to= {'/categoria/amor'}><button className="boton-categoria" >Categoria amor</button></Link>
          <Link to= {'/categoria/flores'}><button className="boton-categoria" >Categoria flores</button></Link>
        </div>
        <ItemList prod = {prod}/>
    </div>
        </>
}
</>
    )
}
export default ItemListContainer



    
  
  