import React from "react"
import "./navbar.css"
import CartWidget from  '../CartWidget/CartWidget' 
import Cuadro from  '../Navbar/cuadro.jpg' 
import { Link } from "react-router-dom"


    const Navbar =() => {
    return < div className="navBar"> 
        <ul className="nav-icono">
            <li>
        <Link to = "/">< img src= {Cuadro }  className = "cuadro"  alt = 'cuadro' /></Link>
        </li>
        </ul>
        <ul className="nav-ul">
        <li>
            <Link to="/" className="nav-link">Inicio </Link>
        </li>
    </ul>
    
    <ul className="nav-ul">
        <li>
            <Link to="/productos" className="nav-link">Productos</Link>
        </li>
    </ul>
    
    <ul className="navbar-ul">
        <li>
            <Link to="/productos" className="nav-link" > Categorias </Link>
        </li>
    </ul>
        <CartWidget/>
    </div> 
}

export default Navbar
