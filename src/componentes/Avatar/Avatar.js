import React from "react";

import './avatar.css';


const Avatar = ({src, alt=''})=>{
    return(
        <div className = 'avatar'>
            <img  src = {src} alt = {alt } className="imagenItem"/>
        </div>
    )
};

export default Avatar