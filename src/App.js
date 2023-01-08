import React from "react";
import "./index.css"
import Navbar from "./componentes/Navbar/Navbar";
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Footer from "./componentes/Footer/Footer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from "./componentes/Cart/Cart";
import Inicio from "./componentes/routes/Inicio/Inicio";
import Error from "./componentes/Error/Error";
import CartProvider from "./contexts/CartContext";
import  {Toaster} from "react-hot-toast";
import Checkout from "./componentes/Checkout/Checkout";
import "bootstrap/dist/css/bootstrap.min.css"



 

export default function App () {
    return (

      <BrowserRouter>
      <CartProvider>
        <Toaster/>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Inicio/>}/>
            <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route exact path="/productos" element={<ItemListContainer/>}/>
            <Route exact path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
            <Route exact path="/cart" element={<Cart/>}/>
            <Route exact path='/detalle' element={<ItemDetailContainer/>}/>
            <Route exact path='*' element={<Error/>}/>
            <Route exact path='form' element={<Checkout/>}/>
          </Routes>
      </CartProvider>
      <Footer/>
      </BrowserRouter>
      
       
        
      
    );
  }


  