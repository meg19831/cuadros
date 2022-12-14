
import React, {useState} from 'react'

export const CartContext = React.createContext ('')
 

function CartProvider({children}) {

    const [cart, setCart] = useState ([])

    // agregar productos al carrito

    const addProduct = (item, quantity)=>{
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

    const removeProducto = (id)=>setCart(cart.filter(prod=>prod.id===id))

    //const totalPrice = () => {
        const totalPrice = () => {
            return cart.reduce((acc, prod) => acc += (prod.quantity * prod.precio), 0)
        }
    
    return (
    <CartContext.Provider value = {{
        cart,
        clearCart,
        isInCart,
        removeProducto,
        addProduct,
        totalPrice,
    }}>

        {children}
    </CartContext.Provider>
  )
}
    



export default CartProvider


