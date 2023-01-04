import {toast} from "react-hot-toast"
import React, {useEffect, useState} from 'react'

export const CartContext = React.createContext ('')


//localStorage

const getLocalStorage = () => {
    let cart = localStorage.getItem('cart')
    if(cart){
      return(cart = JSON.parse(localStorage.getItem('cart')));
    }else{
      return [];
    }
  }
  
  const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(getLocalStorage());
  
    useEffect(()=> {
      localStorage.setItem('cart', JSON.stringify(cart));
    },[cart])

    // agregar productos al carrito

    const addProduct = (item, quantity)=>{
        toast.success('Agregaste un Producto!')
         if (isInCart(item.id)) {
        setCart(cart.map(prod=>{
            return prod.id === item.id ?{...prod, quantity:prod.quantity + quantity}: prod
        }))
    }else {
        setCart([...cart, {...item, quantity}])
    }
    }
  

    //para eliminar producto del carrito

    const clearCart = ()=> setCart ([])

    //para saber si un producto esta en el carrito

    const isInCart = (id) => cart.find(prod =>prod.id=== id)?true :false

    //para remover carrito

    const removeProducto = (id)=>{
        toast.error("Producto Eliminado ")
        setCart(cart.filter( prod=>prod.id!==id))
    }
    // el precio total 
        const totalPrice = () => {
            
            return cart.reduce((acc, prod) => acc += (prod.quantity * prod.precio), 0)

        }
// eliminar productos por unidad

        const eliminarPorUnidad = (id) =>
    setCart(
      cart.map((prod) => {
        if (prod.id === id) {
          return { ...prod, quantity: prod.quantity - 1 };
        } else {
          return prod;
        }
      })
    );
    // total de productos

    const totalProductos = ()=> cart.reduce((acumulador, productoActual)=>acumulador + productoActual.quantity,0)
    return (
    <CartContext.Provider value = {{
        cart,
        clearCart,
        isInCart,
        removeProducto,
        addProduct,
        totalPrice,
        eliminarPorUnidad,
        totalProductos
    }}>

        {children}
    </CartContext.Provider>
  )
}
    


export default CartProvider


