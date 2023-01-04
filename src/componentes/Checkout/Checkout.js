
import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { useState, useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import "bootstrap/dist/css/bootstrap.min.css"
import "./checkout.css"


 
 const ContactoFormulario = () => {


  
   const [id, setId] = useState();
 
   const [form, setForm] = useState({
     name: '',
     email: '',
     message: '',
   });

  


 //importamos el contexto
   const { cart, totalPrice, clearCart} = useContext (CartContext)
 

   //crear la orden de compra

   const compra = {
    form,
    item: cart.map(prod => ({id: prod.id,nombre: prod.titulo, precio:prod.precio, cantidad:prod.quantity })),
    total: totalPrice(),
   }


   //finish compra

   const finisClick =(e)=>{
    e.preventDefault()
    if ( form.name === "" && form.email === "") {
      toast.error ("todos los campos son obligatorios")
    }else{
        const db = getFirestore();
        const usercollection = collection (db, "compra")
        //devuelve promesa
        addDoc (usercollection, compra)
        .then ((res)=>{
          toast.success(`Su Compra ${res.id} se realizó Correctamente`, {
            style: {
              border: '1px solid #713200',
              padding: '16px',
              color: '#713200',
            },
            iconTheme: {
              primary: '#713200',
              secondary: '#FFFAEE',
            },
          });
          setId(res.id)
          clearCart();
        }
    )}
  }


  //captura los datos y los guarda en el form en el estado
   const changeHandler = (ev) => {
     const { value, name } = ev.target;
     setForm({ ...form, [name]: value });
     
   };
 
   return (
    
     <div className="container mt-2">
       {typeof id !== 'undefined' ? (
         <div className="fondo-final-compra">
           <p className="mensajeFinal">Su mensaje se ha enviado correctamente</p>
           <p className="producto-comprado"> El codigo de su producto es: {id}</p>
           <Link to= "/productos" > <button className="botonFinalCompra"> Volver a comprar </button></Link>
         </div>
       ) : (
        <div className=" border border-dark rounded  bg-ligth p-5 mb-5 mt-5 fondo">
          <h2 className="text-center" >Formulario de Compra </h2>
         <form  className="row g-3 form"  onSubmit={finisClick}>
           <div className="btn-group " role="group" aria-label="Basic mixed styles example">
           <div className="col-lg-10 ">
           <label className="label-1" htmlFor="name" >Nombre:</label>
             <input
              className="form-control mb-2"
              type="name" 
              name="name"
               id="name"
               value={form.name} 
               onChange={changeHandler}
              
             />
             </div>
           </div>
           <div className="col-lg-10 ">
             <label className="label-1" htmlFor="email" >Email:</label>
             <input
             className="form-control mb-2"
               type="email"
               name="email"
               id="email"
               value={form.email}
               onChange={changeHandler}
             />
           </div>
           <div>
             <label className="label-1" htmlFor="message">Mensaje:</label>
             <textarea
             className="form-control mb-2"
               name="message"
               id="message"
               value={form.message}
               onChange={changeHandler}
             ></textarea>
           </div>
           <button className="botonEnviar mb-4 mt-4 "  type="submit">Enviar</button>
         </form>
         </div>
       )}
     </div>
   );
 };

export default ContactoFormulario;