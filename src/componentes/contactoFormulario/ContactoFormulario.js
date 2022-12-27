import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { useState } from "react";


 
 const ContactoFormulario = () => {
   const [id, setId] = useState();
 
   const [form, setForm] = useState({
     name: '',
     email: '',
     message: '',
   });
 
   const submitHandler = (ev) => {
     ev.preventDefault();
 
     const db = getFirestore();
     const formsCollection = collection(db, 'formulario');
 
     addDoc(formsCollection, form).then((snapshot) => {
       setForm({
         name: '',
         email: '',
         message: '',
       });
       setId(snapshot.id);
     });
   };
 
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
         </div>
       ) : (
         <form onSubmit={submitHandler}>
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