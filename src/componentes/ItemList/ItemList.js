import React from 'react';
import './itemlist.css';
import Item from "../Item/Item"


const  ItemList  = ({prod})=> {
  return (
    <div className='item'>
      {prod.map(prod=><Item prod = {prod} key = {prod.id}/>)}

    </div>
  )
  };

  export default ItemList;

  






