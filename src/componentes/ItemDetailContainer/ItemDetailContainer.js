import React, { useEffect, useState } from "react"
import { getFirestore,doc,getDoc,} from "firebase/firestore";
import ItemDetail  from "../ItemDetail/ItemDetail"
import {useParams} from "react-router-dom";
import "./itemDetailContainer.css"




export const ItemDetailContainer = () => {
  const [prod, setProd] = useState([]);
  // useParams return a string
  const { id } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'productos', id);
    getDoc(queryDoc)
    .then(res => setProd({id:res.id, ...res.data()}))
   
  }, [id]);
  
    return(

    <div className="container-detail">
            <ItemDetail prod={prod} />
        </div>
    );
          }
  export default ItemDetailContainer;
  