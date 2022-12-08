import "./category.css";

import React, { useState } from "react";
import Categories from "../Categories/Categories";

const Category = () => {
  const [data, setData] = useState(Categories);
  const filterResult = (catItem) => {
    const result = Categories.filter((curDate) => {
      return curDate.category === catItem;
    });
    setData(result);
  };

  return (
    <>
    <div className="contenedor-categorias">
        <div className="button-container">
          <button className="boton-categoria" onClick={() => filterResult("amor")}>Categoria amor</button>
          <button className="boton-categoria" onClick={() => filterResult("flores")}>Categoria flores</button>
          </div>
                <div className="card-container">
                  {data.map((values) => {
                      const { id, titulo, precio, imagen } = values;
                        return (
              <>
                        <div className="div" key={id}>
                        <img src={imagen} alt={imagen} className="img" />
                        <h2 className="title">{titulo}</h2>
                        <p>{precio}</p>
                </div>
              </>
            );
          })}
                </div>
              
        
    </div>
    </>
  );
};

export default Category;
