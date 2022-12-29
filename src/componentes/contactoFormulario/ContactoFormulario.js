
import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { useState, useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";


 
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
     <div>
       {typeof id !== 'undefined' ? (
         <div>
           <p>Su mensaje se ha enviado correctamente</p>
           <p>{id}</p>
           <Link to= "/productos" > <button> Volver a comprar </button></Link>
         </div>
       ) : (
         <form onSubmit={finisClick}>
           <div>
             <label htmlFor="name">Nombre</label>
             <input
               name="name"
               id="name"
               value={form.name}
               onChange={changeHandler}
             />
           </div>
           <div>
             <label htmlFor="email">Email</label>
             <input
               type="email"
               name="email"
               id="email"
               value={form.email}
               onChange={changeHandler}
             />
           </div>
           <div>
             <label htmlFor="message">Mensaje</label>
             <textarea
               name="message"
               id="message"
               value={form.message}
               onChange={changeHandler}
             ></textarea>
           </div>
           <button>Enviar</button>
         </form>
       )}
     </div>
   );
 };

export default ContactoFormulario;