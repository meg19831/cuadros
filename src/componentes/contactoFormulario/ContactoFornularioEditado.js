import React, { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc, updateDoc, collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-hot-toast';
import { useContext } from 'react';
import { CartContext } from '../CartWidget/CartWidget';

const ContactoFormularioEditado = ({ id }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const db = getFirestore();
    const formRef = doc(db, 'formulario', id);
    getDoc(formRef).then((snapshot) => {
      setForm(snapshot.prod());
    });
  }, [id]);

  const submitHandler = (ev) => {
    ev.preventDefault();
    const db = getFirestore();
    const formRef = doc(db, 'formulario', id);
    updateDoc(formRef, form);
  };

  const changeHandler = (ev) => {
    const { value, name } = ev.target;
    setForm({ ...form, [name]: value });
  };

  const {cart,clearCart,totalPrice,} = useContext (CartContext)
  const compra={
    comprador :{
        name:'',
        email: '',
        tel:'',
        
    },
    items:cart.map(prod =>({id: prod.id, titulo: prod.titulo, precio: prod.precio, quantity:prod.quantity})),
    total: totalPrice()
}


const handleClick=() =>{
    if (cart.length<= 0) {
        toast.error("no agregaste productos")
        
    }else{
        const db = getFirestore ();
    const usuarioCollection = collection (db, 'compra');
    addDoc(usuarioCollection, compra)
    .then(({id}) => console.log({id}));
    
    toast('Gracias por tu compra', {
        icon: '👏',
        });
    
    clearCart()
    }
}

  return (
    <div>
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
        <button onClick={handleClick}>Editar</button>
      </form>
    </div>
  );
};

export default ContactoFormularioEditado;
